import axiosClient from "./axiosClient";

export const createAuth = (data) => {
	const url = `/auth/register`;
	return axiosClient.post(url, data);
};

export const loginAuth = (data) => {
	const url = `/auth/login`;
	return axiosClient.post(url, data);
};
