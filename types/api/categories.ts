export interface IPostCategories {
	name: string;
	img: string;
	description?: string;
}

export interface IGetCategories extends IPostCategories {
	_id: string;
	createdAt: string;
	updatedAt: string;
}

export interface UpdateCategories extends IPostCategories {}
