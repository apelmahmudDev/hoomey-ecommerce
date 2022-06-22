import { FC } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useStyles } from "./styled";
import Image, { StaticImageData } from "next/image";
import CuteYoungGirl from "../../../assets/images/hero/cute-youn-girl.png";

// heroData
const heroData: {
	image: string | StaticImageData;
	title: string;
}[] = [
	{
		image: CuteYoungGirl,
		title: "Brown realistic sofa with decorative cushions",
	},
	{
		image: CuteYoungGirl,
		title: "Two-seater gray sofa with two cushions",
	},
	{
		image: CuteYoungGirl,
		title: "Discover the new you",
	},
];

const Hero: FC = () => {
	const classes = useStyles();

	return (
		<Box mb={8}>
			<Swiper
				modules={[Pagination, Autoplay]}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				className={classes.mySwiper}
			>
				{heroData.map((item, idx) => (
					<SwiperSlide key={idx}>
						<Box sx={{ width: "100%", height: "100%", position: "relative" }}>
							<Image alt="hero" src={item.image} layout="fill" objectFit="cover" />
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Hero;
