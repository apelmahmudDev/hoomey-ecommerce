import { FC } from "react";
import Image from "next/image";
import { useStyles } from "./styled";
import { Box, Container, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { productData } from "./data";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const LatestProducts: FC = () => {
	const classes = useStyles();

	return (
		<Box mb={8}>
			<Container maxWidth="lg">
				<Typography variant="h5" textAlign="center" sx={{ mb: "20px" }}>
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
							<Card className={classes.latestProductCard} sx={{ maxWidth: 345 }}>
								<CardActionArea>
									<Box sx={{ background: "#E5E5E5" }}>
										<Image
											src={product.image}
											alt={product.name}
											height={469}
											width={340}
											objectFit="cover"
											layout="responsive"
										/>
									</Box>

									<CardContent>
										<Typography gutterBottom variant="h6" component="div">
											{product.name}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											<del>${product.discount.toFixed(2)}</del> ${product.price.toFixed(2)}
										</Typography>
										<Box component="span" sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
											<Rating name="read-only" value={4} readOnly size="small" />
											(45)
										</Box>
									</CardContent>
								</CardActionArea>
								<Typography className={classes.discountChip}> -{product.discount}%</Typography>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default LatestProducts;
