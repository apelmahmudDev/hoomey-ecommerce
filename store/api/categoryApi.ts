import { emptySplitApi } from "./base";

export const categoryApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		createCategories: build.mutation<unknown, unknown>({
			query: (body) => ({
				url: "categories",
				method: "POST",
				body,
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useCreateCategoriesMutation } = categoryApi;
