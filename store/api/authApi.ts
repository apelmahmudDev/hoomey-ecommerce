import { ICreateUser } from "../../types/api/auth";
import { baseApiSlice } from "./base";

export interface User {
	id: number;
	name: string;
}

export const authApi = baseApiSlice.injectEndpoints({
	endpoints: (build) => ({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		createUser: build.mutation<any, ICreateUser>({
			query: (body) => ({
				url: "auth/add-user",
				method: "POST",
				body,
			}),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		userLogIn: build.mutation<any, { email: string; password: string }>({
			query: (body) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
		}),
		requestTResetPassword: build.mutation<any, { email: string }>({
			query: (body) => ({
				url: "auth/req-reset-password",
				method: "POST",
				body,
			}),
		}),
		getLogedInUser: build.query<User, number>({
			query: () => "users",
			//providesTags: (result, error, id) => [{ type: 'User', id }],
		}),
	}),
	overrideExisting: false,
});

export const { useCreateUserMutation, useUserLogInMutation, useRequestTResetPasswordMutation, useGetLogedInUserQuery } =
	authApi;
