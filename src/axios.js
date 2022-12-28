import axios from "axios";

export const makeRequest = axios.create({
	baseURL: "http://localhost:8080/v1/",
	withCredentials: true,
});
