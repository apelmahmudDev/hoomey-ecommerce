import { emptySplitApi } from "./base";

export const authApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		createUser: build.mutation<unknown, unknown>({
			query: (body) => ({
				url: "/api/v1/users",
				method: "POST",
				body,
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useCreateUserMutation } = authApi;
