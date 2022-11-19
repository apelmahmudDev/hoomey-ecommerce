import { IGetTag, IPostTag } from "../../types/api/tags";
import { baseApiSlice } from "./base";

export const tagApi = baseApiSlice.injectEndpoints({
	endpoints: (build) => ({
		getTags: build.query<IGetTag[], void>({
			query: () => ({
				url: "tags",
			}),
		}),
		getSingleTag: build.query<IGetTag, string>({
			query: (id) => ({
				url: `tags/${id}`,
			}),
		}),
		createTag: build.mutation<IPostTag, IPostTag>({
			query: (body) => ({
				url: "tags",
				method: "POST",
				body,
			}),
		}),
		updateTag: build.mutation<void, { id: string; body: IPostTag }>({
			query: ({ id, body }) => ({
				url: `tags/${id}`,
				method: "PATCH",
				body,
			}),
		}),
		deleteTag: build.mutation<void, string>({
			query: (id) => ({
				url: `tags/${id}`,
				method: "DELETE",
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetTagsQuery,
	useGetSingleTagQuery,
	useCreateTagMutation,
	useUpdateTagMutation,
	useDeleteTagMutation,
} = tagApi;
