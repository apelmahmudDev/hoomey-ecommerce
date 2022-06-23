import { StaticImageData } from "next/image";

export interface IProduct {
	image: string | StaticImageData;
	name: string;
	price: number;
	discount: number;
}
