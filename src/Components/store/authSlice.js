import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { createAuth, loginAuth } from "../API/authApi";
import { createAccountGoogle } from "../API/googleApi";
import RemoveCookie from "../hooks/removeCookie";
import SetCookie from "../hooks/setCookie";
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
//https://be-weld.vercel.app/v1/userorder
// https://be-weld.vercel.app/
export const getAllUser = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get("https://be-livid.vercel.app/v1/userorder");
		dispatch(setLogin(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const loginUser = async (user, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));

	try {
		// const res = await axios.post(
		// 	"https://be-weld.vercel.app/v1/auth/login",
		// 	user,{

		// 	}
		// );
		const res = await loginAuth(user);
		// RemoveCookie("token");
		dispatch(setLogin(res));
		// SetCookie("token", JSON.stringify(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
		navigate("/");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
		toast.error(
			"Tài khoản hoặc mật khẩu không đúng,Vui lòng kiểm tra lại!!!"
		);
	}
};
export const registerUser = async (user, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		// const res = await axios.post(
		// 	"https://be-weld.vercel.app/v1/auth/register",
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
		// RemoveCookie("token");
		navigate("/");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
