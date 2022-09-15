import { IGetProducts, IPostProduct, UpdateProduct } from "../../types/api/products";
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
		updateProduct: build.mutation<IGetProducts, { id: string; body: UpdateProduct }>({
			query: ({ id, ...body }) => ({
				url: `categories/${id}`,
				method: "PATCH",
				...body,
			}),
		}),
		deleteProduct: build.mutation<IGetProducts, string>({
			query: (id) => ({
				url: `products/${id}`,
				method: "DELETE",
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetProductsQuery,
	useGetSingleProductQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
} = productApi;
