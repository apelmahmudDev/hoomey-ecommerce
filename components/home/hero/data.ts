import { StaticImageData } from "next/image";
import { IMAGES } from "../../../uiElements";

// heroData
export const heroData: {
	image: string | StaticImageData;
	title: string;
	contentPosition: "left" | "center" | "right";
}[] = [
	{
		image: IMAGES.HomeHero1lImg,
		title: "Discover the new you",
		contentPosition: "center",
	},
	{
		image: IMAGES.HomeHero2lImg,
		title: "The Way forward",
		contentPosition: "left",
	},
	{
		image: IMAGES.HomeHero5lImg,
		title: "Outfits for the little ones",
		contentPosition: "right",
	},
	{
		image: IMAGES.HomeHero3lImg,
		title: "Tradition of trust",
		contentPosition: "center",
	},
	{
		image: IMAGES.HomeHero4lImg,
		title: "Comfortable sports wearings",
		contentPosition: "right",
	},
];
