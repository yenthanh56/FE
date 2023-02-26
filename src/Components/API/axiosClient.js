import axios from "axios";
import GetCookie from "../hooks/getCookie";
import SetCookie from "../hooks/setCookie";

import { apiConfig } from "./apiConfig";

const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.request.use(
	(config) => {
		let token = GetCookie("token");
		if (token) {
			SetCookie("token", JSON.stringify(token));
			config.headers.Authorization = `${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosClient;
