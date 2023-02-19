import axios from "axios";

import { apiConfig } from "./apiConfig";

const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.request.use();
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
