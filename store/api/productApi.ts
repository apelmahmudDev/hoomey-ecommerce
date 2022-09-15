import { IGetProducts, IPostProduct } from "../../types/api/products";
import { emptySplitApi } from "./base";

export const productApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<IGetProducts[], void>({
			query: () => ({
				url: "products",
			}),
		}),
		getSingleProduct: build.query<IGetProducts, string>({
			query: (id) => ({
				url: `products/${id}`,
			}),
		}),
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
