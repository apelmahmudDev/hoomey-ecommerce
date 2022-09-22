export interface IPostTag {
	name: string;
	slug: string;
	description: string;
	status: boolean;
}

export interface IGetTag extends IPostTag {
	_id: string;
	createdAt: string;
	updatedAt: string;
}
