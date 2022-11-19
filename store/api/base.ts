import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BASE_API,

		// prepareHeaders: (headers, { getState }) => {
		// 	const { auth } = getState();
		// 	const token = auth.access_token;

		// 	if (token) headers.set("authorization", `Bearer ${token}`);

		// 	return headers;
		// },
	}),
	tagTypes: [],
	endpoints: (builder) => ({}),
});
