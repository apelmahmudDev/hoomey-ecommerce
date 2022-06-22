import { StaticImageData } from "next/image";
import WhiteCottonSweatshirtImg from "../../../assets/images/latest_products/white_cotton_sweatshirt.png";
import BlackCottonSweatshirtImg from "../../../assets/images/latest_products/tshirt.png";

// heroData
export const productData: {
	image: string | StaticImageData;
	name: string;
	price: number;
	discount: number;
}[] = [
	{
		image: WhiteCottonSweatshirtImg,
		name: "White Cotton Sweatshirt",
		price: 25,
		discount: 50,
	},
	{
		image: BlackCottonSweatshirtImg,
		name: "Black Cotton Sweatshirt ",
		price: 25,
		discount: 50,
	},
	{
		image: WhiteCottonSweatshirtImg,
		name: "White Cotton Sweatshirt",
		price: 50,
		discount: 90,
	},
	{
		image: BlackCottonSweatshirtImg,
		name: "Black Cotton Sweatshirt ",
		price: 50,
		discount: 25,
	},
	{
		image: WhiteCottonSweatshirtImg,
		name: "White Cotton Sweatshirt",
		price: 50,
		discount: 90,
	},
];
