import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
	SUCCESS: "successfully",
});

const initialState = {
	user: {
		data: [],
		status: STATUS.IDLE,
	},
	// ordered: [],
	userOrdered: [],
	duplicates: {},
	detail: {},
	createOrder: {
		status: STATUS.IDLE,
	},
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		// get all User Ordered
		setUserOrder: (state, action) => {
			state.user.data = action.payload;
			// state.user.data.push(action.payload);
		},
		// setArrayUserOrdered: (state, action) => {
		// 	state.ordered = action.payload;
		// },
		setDetail: (state, action) => {
			state.detail = action.payload;
		},

		setCreateOrder: (state, action) => {
			state.createOrder.status = action.payload;
		},

		setUserOrdered: (state, action) => {
			state.userOrdered = action.payload;
		},

		setStatus: (state, action) => {
			state.user.status = action.payload;
		},
	},
});
//"https://apitiki-myapp.herokuapp.com/v1/userorder/create"
// https://apitiki-myapp.herokuapp.com/v1/userorder
// https://backend-api-kohl.vercel.app
export const selectAllUserOrder = (state) => state.order?.user?.data;
// export const showAllOrdered = (state) => state.order?.ordered;

export const userOrdered = (state) => state.order?.userOrdered;

export const {
	setUserOrder,
	setCreateOrder,
	setStatus,
	setArrayUserOrdered,
	setUserOrdered,
	setDetail,
} = orderSlice.actions;

export default orderSlice.reducer;

export const createUserOrder = async (userOrder, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.post(
			"https://backend-api-kohl.vercel.app/v1/userorder/create",
			userOrder
		);

		dispatch(setUserOrdered(res.data));
		dispatch(setCreateOrder(STATUS.SUCCESS));
		dispatch(setStatus(STATUS.SUCCESS));
		navigate("/pay");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
//`https://apitiki-myapp.herokuapp.com/v1/userorder`
//`http://localhost:8080/v1/userorder`
//https://backend-api-lake.vercel.app/
export const getAllUserOrder = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			`https://backend-api-lake.vercel.app/v1/userorder`
		);
		dispatch(setUserOrder(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};

export const getUserOrdered = async (dispatch, id) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			`https://backend-api-lake.vercel.app/${id}`
		);
		dispatch(setUserOrdered(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};

export const deleteUserOrdered = async (dispatch, id) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.delete(
			`https://backend-api-lake.vercel.app/${id}`
		);
		dispatch(setUserOrdered(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
