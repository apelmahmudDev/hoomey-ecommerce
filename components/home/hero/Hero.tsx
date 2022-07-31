import { FC } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Lazy } from "swiper";
import { useStyles } from "./styled";
import Image from "next/image";
import { heroData } from "./data";

const Hero: FC = () => {
	const classes = useStyles();

	return (
		<Box mb={9.1}>
			<Swiper
				className={classes.mySwiper}
				modules={[Pagination, Autoplay, Lazy]}
				lazy={true}
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
							<Image
								src={data.image}
								alt="hero-banner"
								layout="fill"
								objectFit="cover"
								className="swiper-lazy"
							/>
						</Box>
						<Container sx={{ position: "relative", height: "100%" }}>
							<Box className={classes.content} sx={{ textAlign: data.contentPosition }}>
								<Box sx={{ display: "inline-block", textAlign: "center" }}>
									<Typography variant="h5" sx={{ fontFamily: "Sedan" }}>
										{data.title}
									</Typography>
									<Box>
										<Button variant="contained">Shop Now</Button>
									</Box>
								</Box>
							</Box>
						</Container>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Hero;
