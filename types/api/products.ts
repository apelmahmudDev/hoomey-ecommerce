export interface IPostProduct {
	name: string;
	slug: string;
	excerpt: string;
	description: string;
	categories: Array<string>;
	subCategories: Array<string>;
	tags: Array<string>;
	type: string;
	options: Array<unknown>;
}

export interface IGetProducts extends IPostProduct {
	_id: string;
	createdAt: string;
	updatedAt: string;
}

export interface UpdateProduct extends IPostProduct {}
