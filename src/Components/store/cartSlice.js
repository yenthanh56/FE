import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// data: {
	// 	cartItems: [],
	// 	cartTotalQuantity: 0,
	// 	cartTotalAmount: 0,
	// },
	products: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// addToCart: (state, action) => {
		// 	const itemsIndex = state.data.cartItems.findIndex(
		// 		(item) => item.id === action.payload.id
		// 	);

		// 	if (itemsIndex >= 0) {
		// 		state.data.cartItems[itemsIndex].cartQuantity += 1;
		// 	} else {
		// 		const tempProduct = {
		// 			...action.payload,
		// 			cartQuantity: 1,
		// 		};
		// 		state.data.cartItems.push(tempProduct);
		// 	}
		// },
		// addtoBuy: (state, action) => {
		// 	state.data.cartItems.push(action.payload);
		// },

		// removeCart: (state, action) => {
		// 	const nextCartItems = state.data.cartItems.filter(
		// 		(item) => item.id !== action.payload.id
		// 	);

		// 	state.data.cartItems = nextCartItems;
		// },
		// decreaseCart: (state, action) => {
		// 	const itemIndex = state.data.cartItems.findIndex(
		// 		(item) => item.id === action.payload.id
		// 	);

		// 	if (state.data.cartItems[itemIndex].cartQuantity > 1) {
		// 		state.data.cartItems[itemIndex].cartQuantity -= 1;
		// 	} else if (state.data.cartItems[itemIndex].cartQuantity === 1) {
		// 		const nextCartItems = state.data.cartItems.filter(
		// 			(item) => item.id !== action.payload.id
		// 		);

		// 		state.data.cartItems = nextCartItems;
		// 	}
		// },
		setDataNull: (state) => {
			state.products = [];
		},

		// getTotals: (state, action) => {
		// 	let { total, quantity } = state.data.cartItems.reduce(
		// 		(cartTotal, cartItem) => {
		// 			const { price, cartQuantity } = cartItem;
		// 			const itemTotal = price * cartQuantity;
		// 			cartTotal.total += itemTotal;
		// 			cartTotal.quantity += cartQuantity;
		// 			return cartTotal;
		// 		},
		// 		{ total: 0, quantity: 0 }
		// 	);
		// 	state.data.cartTotalQuantity = quantity;
		// 	state.data.cartTotalAmount = total;
		// },

		addToCart: (state, action) => {
			const items = state.products.find(
				(item) => item.id === action.payload.id
			);
			if (items) {
				items.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload);
			}
		},
		decreaseCart: (state, action) => {
			const items = state.products.find(
				(product) => product.id === action.payload.id
			);
			if (items) {
				items.quantity -= 1;
			} else {
				state.products.push(action.payload);
			}
		},
		increaseCart: (state, action) => {
			const items = state.products.find(
				(product) => product.id === action.payload.id
			);
			if (items) {
				items.quantity += 1;
			} else {
				state.products.push(action.payload);
			}
		},
		removeCart: (state, action) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload.id
			);
		},
	},
});

// export const selectAllCart = (state) => state.cart?.data?.cartItems;
export const selectAllCart = (state) => state.cart?.products;

export const {
	addToCart,
	addtoBuy,
	removeCart,
	decreaseCart,
	increaseCart,
	setDataNull,
} = cartSlice.actions;

export default cartSlice.reducer;
