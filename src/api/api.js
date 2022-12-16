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
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(id);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => {
                return res.data;
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(res => {
                return res.data;
            });
    },
    updateStatus(status) {
        return instance.put('profile/status', { status });
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