import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useStyles } from "./styled";
import Image from "next/image";
import { heroData } from "./data";

const Hero: FC = () => {
	const classes = useStyles();

	return (
		<Box mb={9.1}>
			<Swiper
				className={classes.mySwiper}
				modules={[Pagination, Autoplay]}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
			>
				{heroData.map((data, idx) => (
					<SwiperSlide key={idx}>
						<Box sx={{ width: "100%", height: "100%", position: "relative" }}>
							<Image src={data.image} alt="hero-banner" layout="fill" objectFit="cover" />
						</Box>
						<Box className={classes.content}>
							<Typography variant="h5" sx={{ fontFamily: "Sedan" }}>
								{data.title}
							</Typography>
							<Button variant="contained">Shop Now</Button>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Hero;
