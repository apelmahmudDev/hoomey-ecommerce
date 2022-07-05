import { FC } from "react";
import { useStyles } from "./styled";
import Image from "next/image";
import { Typography, Box, Button } from "@mui/material";

// Import Swiper
import { Pagination, Lazy, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { sliderData } from "./data";
import { ArrowRightAltIcon } from "../../../uiElements/icons";

const BlogsSlider: FC = () => {
	const classes = useStyles();

	// for swiper slieder
	const pagination = {
		clickable: true,
		renderBullet: function (index: any, className: any) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<Swiper
			className={classes.mySwiper}
			navigation={true}
			pagination={pagination}
			modules={[Pagination, Navigation, Autoplay, Lazy]}
			lazy={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
		>
			{sliderData.map((item, idx) => (
				<SwiperSlide key={idx}>
					<Box sx={{ position: "relative" }}>
						{/* <Box className={classes.banner}> */}
						<Image src={item.image} alt="banner-hero" layout="responsive" />
						{/* </Box> */}
					</Box>
					<Box my={3}>
						<Typography variant="h6" fontWeight="medium">
							{item.title}
						</Typography>
						<Typography variant="subtitle2" fontWeight="light" sx={{ my: 1.3, color: "#ABABAB" }}>
							{item.subTitle}
						</Typography>
						<Typography color="text.secondary">{item.desc}</Typography>
						<Button
							sx={{ mt: 2.5, minWidth: 181, justifyContent: "space-between" }}
							color="secondary"
							variant="contained"
							endIcon={<ArrowRightAltIcon />}
						>
							Read More
						</Button>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default BlogsSlider;
