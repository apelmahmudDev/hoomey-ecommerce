import { IGetCategories, IPostCategories, UpdateCategories } from "../../types/api/categories";
import { emptySplitApi } from "./base";

export const categoryApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		getCategories: build.query<IGetCategories[], void>({
			query: () => ({
				url: "categories",
			}),
		}),
		createCategories: build.mutation<IPostCategories, IPostCategories>({
			query: (body) => ({
				url: "categories",
				method: "POST",
				body,
			}),
		}),
		getSingleCategory: build.query<IGetCategories, { id: string }>({
			query: (id) => ({
				url: `categories/${id}`,
			}),
		}),
		updateCategory: build.mutation<IGetCategories, { id: string; body: UpdateCategories }>({
			query: ({ id, body }) => ({
				url: `categories/${id}`,
				method: "PUT",
				body,
			}),
		}),
		deleteCategory: build.mutation<IGetCategories, { id: string }>({
			query: (id) => ({
				url: `categories/${id}`,
				method: "DELETE",
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useGetCategoriesQuery, useCreateCategoriesMutation } = categoryApi;
