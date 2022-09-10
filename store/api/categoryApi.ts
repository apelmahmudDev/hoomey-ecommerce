import { IGetCategories, IPostCategories } from "../../types/api/categories";
import { emptySplitApi } from "./base";

export const categoryApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		getCategories: build.query<IGetCategories, void>({
			query: () => ({
				url: "categories",
			}),
		}),
		createCategories: build.mutation<IPostCategories, IPostCategories>({
			query: (body) => ({
				url: "api/v1/categories",
				method: "POST",
				body,
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useGetCategoriesQuery, useCreateCategoriesMutation } = categoryApi;
