import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { createAuth } from "../API/authApi";
import { createAccountGoogle } from "../API/googleApi";
export const STATUS = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
	SUCCESS: "successfully",
});

const initialState = {
	login: {
		data: null,
		status: STATUS.IDLE,
	},
	register: {
		status: STATUS.IDLE,
	},
	logout: {
		status: STATUS.IDLE,
	},
	currentUser: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogin: (state, action) => {
			state.login.data = action.payload;
			state.login.status = action.payload;
		},

		setLoginSuccess: (state, action) => {
			state.currentUser = action.payload;
		},
		setRegister: (state, action) => {
			state.register.status = action.payload;
		},
		setLogout: (state) => {
			state.login.data = null;
			state.currentUser = null;
		},
		setStatus: (state, action) => {
			state.login.status = action.payload;
		},
	},
});

export const selectAllUser = (state) => state.auth?.login?.data;

export const { setLogin, setRegister, setLogout, setStatus, setLoginSuccess } =
	authSlice.actions;

export default authSlice.reducer;

// http://localhost:8080/v1/auth/login
// http://localhost:8080/v1/auth/register
// https://api-backend-nine.vercel.app/v1/user
export const getAllUser = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get("http://localhost:5000/v1/userorder");
		dispatch(setLogin(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const loginUser = async (user, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));

	try {
		const res = await axios.post(
			"http://localhost:5000/v1/auth/login",
			user
		);
		if (!user) {
			return;
		}
		if (user) {
			dispatch(setLogin(res.data));
			dispatch(setStatus(STATUS.SUCCESS));
			navigate("/");
		}
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const registerUser = async (user, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		// const res = await axios.post(
		// 	"http://localhost:5000/v1/auth/register",
		// 	user
		// );
		const res = await createAuth(user);
		dispatch(setLogin(res));
		dispatch(setStatus(STATUS.SUCCESS));
		navigate("/users/login");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const loginGoogle = async (data, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await createAccountGoogle(data);

		dispatch(setLogin(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
		navigate("/");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};

export const logoutUser = async (dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		dispatch(setLogout());
		dispatch(setStatus(STATUS.SUCCESS));

		navigate("/");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
