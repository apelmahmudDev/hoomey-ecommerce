import { ICreateUser } from "../../types/api/auth";
import { userLoggedIn } from "../slices/authSlice";
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
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				const result = await queryFulfilled;
				localStorage.setItem("accessToken", JSON.stringify(result.data.token));
				dispatch(userLoggedIn(result.data.token));
			},
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		requestTResetPassword: build.mutation<any, { email: string }>({
			query: (body) => ({
				url: "auth/req-reset-password",
				method: "POST",
				body,
			}),
		}),
		getUserProfile: build.query<User, void>({
			query: () => "auth/profile",
			//providesTags: (result, error, id) => [{ type: 'User', id }],
		}),
	}),
	overrideExisting: false,
});

export const { useCreateUserMutation, useUserLogInMutation, useRequestTResetPasswordMutation, useGetUserProfileQuery } =
	authApi;
