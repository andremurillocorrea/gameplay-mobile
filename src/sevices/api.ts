import axios from 'axios';

export const discordAPI = axios.create({
    baseURL: 'https://discord.com/api'
})