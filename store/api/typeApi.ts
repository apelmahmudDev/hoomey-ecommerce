import { IGetType, IPostType } from "../../types/api/types";
import { emptySplitApi } from "./base";

export const typeApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		getTypes: build.query<IGetType[], void>({
			query: () => ({
				url: "types",
			}),
		}),
		getSingleType: build.query<IGetType, string>({
			query: (id) => ({
				url: `types/${id}`,
			}),
		}),
		createType: build.mutation<IPostType, IPostType>({
			query: (body) => ({
				url: "types",
				method: "POST",
				body,
			}),
		}),
		updateType: build.mutation<void, { id: string; body: IPostType }>({
			query: ({ id, body }) => ({
				url: `types/${id}`,
				method: "PATCH",
				body,
			}),
		}),
		deleteType: build.mutation<void, string>({
			query: (id) => ({
				url: `types/${id}`,
				method: "DELETE",
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetTypesQuery,
	useGetSingleTypeQuery,
	useCreateTypeMutation,
	useUpdateTypeMutation,
	useDeleteTypeMutation,
} = typeApi;
