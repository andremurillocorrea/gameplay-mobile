import React, { createContext, useContext, useState, ReactNode} from 'react';
import * as AuthSession from 'expo-auth-session';

import { discordAPI } from '../sevices/api';
import { CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '../config/discord';

type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string
    email: string,
    token: string
}

type AuthContextData = {
    user: User,
    loading: boolean,
    signIn: () => Promise<void>
}

type AuthProviderProps = {
    children?: ReactNode 
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);
        
            const authUrl = `${discordAPI.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const authResponse = await AuthSession.startAsync({ authUrl });

            console.log(authResponse);
            
            if (authResponse.type === 'success' && !authResponse.params.error) {

                const { 
                        access_token: token,
                        token_type: tokenType
                    } = authResponse.params;

                discordAPI.defaults.headers.common['Authorization'] = `${tokenType} ${token}`

                const { status, data } = await discordAPI.get('/users/@me')

                if (status === 200) {

                    const { avatar: avatarHash, email, id, username } = data as User;

                    const firstName = username.split(' ')[0];

                    const avatar = `${CDN_IMAGE}/avatars/${id}/${avatarHash}`
        
                    const userData = {
                        ...user,
                        id,
                        username,
                        firstName,
                        avatar,
                        email,
                        token
                    }
        
                    setUser(userData);
                }            
            } 
        } catch {
            throw new Error('Não foi possível autenticar');
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context
}