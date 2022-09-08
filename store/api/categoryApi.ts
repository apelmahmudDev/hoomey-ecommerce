import { emptySplitApi } from "./base";

export const categoryApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		createCategory: build.mutation<unknown, unknown>({
			query: (body) => ({
				url: "/api/v1/categories",
				method: "POST",
				body,
			}),
		}),
		// getCategories: build.mutation<unknown, unknown>({
		// 		query: (body) => ({
		// 			url: "/api/v1/catgeories",
		// 			body,
		// 		}),
		// 	}),
	}),
	overrideExisting: false,
});

export const { useCreateCategoryMutation } = categoryApi;
