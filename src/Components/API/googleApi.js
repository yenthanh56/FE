import axiosClient from "./axiosClient";

export const createAccountGoogle = (data) => {
	const url = `auth/google`;
	return axiosClient.post(url, data);
};
