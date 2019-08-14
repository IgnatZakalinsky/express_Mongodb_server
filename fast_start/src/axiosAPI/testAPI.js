import * as axios from "axios";

const instans = axios.create({
    withCredentials: true, // with ?Cookie to another server
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'f481cc10-95d4-4491-8cd3-ad1cb570cd4c'}
});

export const testAPI = {
    getSomeTextFromServer(userId) {
        return instans.get(`profile/` + userId);
    }
};
