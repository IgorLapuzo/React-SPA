import * as axios from 'axios';



const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { "API-KEY": "a44b13c6-81f9-404f-b19f-8f5154fea008"} 
})

export const userAPI = {
	getUsers (currentPage, pagesSize) {
		return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
			.then(response => {
				return response.data;
			})
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		return instance.get(`profile/` + userId)	
	},
};

export const authAPI = {
	me(){
		return instance.get(`auth/me`)
	}
};