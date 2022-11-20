import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../index";

export const baseApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BASE_API,

		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState)?.auth?.accessToken;
			if (token) {
				headers.set("musto-access-token", token);
			}
			return headers;
		},
	}),
	tagTypes: [],
	endpoints: (builder) => ({}),
});
