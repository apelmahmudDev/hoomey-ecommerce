export interface IPostType {
	name: string;
	slug: string;
	description: string;
	status: boolean;
}

export interface IGetType extends IPostType {
	_id: string;
	createdAt: string;
	updatedAt: string;
}
