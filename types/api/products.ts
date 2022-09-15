export interface IPostProduct {
	name: string;
	slug: string;
	excerpt: string;
	description: string;
	categories: Array<unknown>;
	subCategories: Array<unknown>;
	tags: Array<unknown>;
	type: string;
	options: Array<unknown>;
}
