import { FC } from "react";
import { useStyles } from "./styled";
import { Box, Container, Typography } from "@mui/material";
import ProductCard from "../../common/ProductCard";
import { productData } from "./data";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const LatestProducts: FC = () => {
	const classes = useStyles();

	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Typography sx={{ fontFamily: "Poppins", mb: 2.6 }} variant="h6" textAlign="center">
					Latest Products
				</Typography>
				<Swiper
					className={classes.mySwiper}
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{productData.map((product, idx) => (
						<SwiperSlide key={idx}>
							<ProductCard product={product} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default LatestProducts;
