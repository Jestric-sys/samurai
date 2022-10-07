import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "abc3ad55-35be-4da2-8afc-d1576638f8fa"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data;
            });
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },
    followUser(id) {
        return instance.post(`follow/${id}`); 
    },
    profileUserID(id) {
        return instance.get(`profile/${id}`)
            .then(res => {
                return res.data;
            });
    }
};

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(res => {
                return res.data
            });
    }
};