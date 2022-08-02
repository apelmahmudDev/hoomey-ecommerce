import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";

interface CartProducts extends IProduct {
	quantity: number;
}

interface InitialState {
	products: CartProducts[];
}

const initialState: InitialState = {
	products: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: initialState as InitialState,
	reducers: {
		addToCart: (state: InitialState, action: PayloadAction<IProduct>) => {
			const product = action.payload;
			const matchProduct = state.products.find((pd) => pd.id === product.id);

			if (matchProduct?.quantity) {
				matchProduct.quantity++;
			} else {
				state.products = [...state.products, { ...product, quantity: 1 }];
			}
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
