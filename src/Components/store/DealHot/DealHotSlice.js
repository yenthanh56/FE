import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
	createDealHot,
	deleteDealHot,
	editDealHot,
	getDealHot,
	getDealHotId,
} from "~/Components/API/fetchDealHotApi";

const STATUS = Object.freeze({
	IDLE: "idle",
	LOADING: "loading",
	ERROR: "error",
	SUCCESS: "successfully",
});

const initialState = {
	dealhosts: [],
	status: STATUS.IDLE,
	detail: {},
};

const dealHotSlice = createSlice({
	name: "dealhot",
	initialState,
	reducers: {
		// setData: (state, action) => {
		// 	state.dealhosts.push(action.payload);
		// },
		getData: (state, action) => {
			state.dealhosts = action.payload;
		},

		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setDetail: (state, action) => {
			state.detail = action.payload;
		},
	},
});
export const selectAllDealHot = (state) => state.dealhot?.dealhosts;
export const selectDetailDealHot = (state) => state.dealhot?.detail;

export const { getData, setStatus, setDetail } = dealHotSlice.actions;
export default dealHotSlice.reducer;

export const getAllDealHot = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		// const res = await axios.get("http://localhost:5000/v1/dealhot/");
		const res = await getDealHot();
		dispatch(getData(res));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const getDealHotSlug = async (dispatch, id) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		// const res = await axios.get(`http://localhost:8080/v1/dealhot/${id}`);
		const res = await getDealHotId(id);
		dispatch(setDetail(res));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};

export const postDealHot = async (obj, dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		// const res = await axios.post(
		// 	// "https://backend-api-kohl.vercel.app/v1/dealhot/create",
		// 	"http://localhost:5000/v1/dealhot/create",
		// 	obj
		// );

		const res = await createDealHot(obj);
		dispatch(getData(res));
		dispatch(setStatus(STATUS.SUCCESS));
		getAllDealHot(dispatch);
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const deleteDeal = async (dispatch, id) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		await deleteDealHot(id);
		getAllDealHot(dispatch);
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const editDeal = async (dispatch, id, content) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		await editDealHot(id, content);
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
