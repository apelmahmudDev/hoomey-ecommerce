import { FC } from "react";
import { Box, Grid, Avatar, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useStyles } from "./styled";
import { heroData } from "./data";

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
