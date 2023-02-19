import axiosClient from "./axiosClient";

export const getDealHot = () => {
	const url = "/dealhot";
	return axiosClient.get(url);
};
export const getDealHotId = (id) => {
	const url = `/dealhot/${id}`;
	return axiosClient.get(url);
};
export const createDealHot = (content) => {
	const url = `/dealhot/create`;
	return axiosClient.post(url, content);
};
export const deleteDealHot = (id) => {
	const url = `/dealhot/${id}`;
	return axiosClient.delete(url);
};
export const editDealHot = (id, content) => {
	const url = `/dealhot/${id}`;
	return axiosClient.put(url, content);
};
