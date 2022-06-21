import { FC } from "react";
import { Box, Grid, Avatar, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useStyles } from "./styled";

// heroData
const heroData: {
	image: string;
	title: string;
	description: string;
}[] = [
	{
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Brown realistic sofa with decorative cushions",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Veniam assumenda consequatur esse nisi dolorem repellendus,
		autem inventore eius qui eaque molestiae tempore
		perspiciatis ipsum corrupti tenetur excepturi voluptate ut
		illo.`,
	},
	{
		image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Two-seater gray sofa with two cushions",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam assumenda consequatur esse nisi dolorem repellendus,
					autem inventore eius qui eaque molestiae tempore
					perspiciatis ipsum corrupti tenetur excepturi voluptate ut
					illo.`,
	},
	{
		image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Chair and pillow",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam assumenda consequatur esse nisi dolorem repellendus,
					autem inventore eius qui eaque molestiae tempore
					perspiciatis ipsum corrupti tenetur excepturi voluptate ut
					illo.`,
	},
];

const Hero: FC = () => {
	const classes = useStyles();

	return (
		<Box>
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
					<SwiperSlide key={idx} style={{ height: "100vh" }}>
						<Avatar
							sx={{
								width: "100% !important",
								height: "100% !important",
								borderRadius: "0 !important",
							}}
							className={classes.heroAvatar}
							src={item.image}
							alt="image of hero"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Hero;
