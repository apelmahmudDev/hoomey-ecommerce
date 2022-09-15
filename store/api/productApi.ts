import { IPostProduct } from "../../types/api/products";
import { emptySplitApi } from "./base";

export const productApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		createProduct: build.mutation<IPostProduct, IPostProduct>({
			query: (body) => ({
				url: "products",
				method: "POST",
				body,
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useCreateProductMutation } = productApi;
