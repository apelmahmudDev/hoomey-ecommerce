import { FC, useState } from "react";
import Image from "next/image";
import { Box, Typography, IconButton, Rating, Button } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import { CartDivider, ProductCircularColor, SmallText } from "../../styledComponents";
import { useStyles } from "./styled";
import { IMAGES } from "../../../uiElements";

// icons
import { CloseIcon, FavoriteBorderIcon } from "../../../uiElements/icons";
import { ArrowLeftIconButton, ArrowRightIconButton } from "../../ui";
import ProductSizeSelect from "../ProductSizeSelect";

const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};

const CartDetails: FC = () => {
	const classes = useStyles();
	const [size, setSize] = useState("10");

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};
	console.log(size);

	return (
		<Box sx={{ position: "relative" }}>
			<IconButton size="small" sx={{ position: "absolute", right: 0, color: "common.white" }}>
				<CloseIcon fontSize="small" />
			</IconButton>

			<Box sx={{ pt: 4, display: "flex", gap: 2, alignItems: "flex-start" }}>
				<Image src={IMAGES.WhiteTshirtImg} alt="Product" height={65} width={47} objectFit="cover" />
				<Box>
					<Box sx={{ mb: 0.6, gap: 2, ...styles }}>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							White Cotton Sweatshirt
						</Typography>
						<SmallText>${"50.00"}</SmallText>
					</Box>
					<Box sx={{ mb: 0.6, display: "flex", alignItems: "center" }}>
						<SmallText sx={{ flex: 1 }}>Quantity</SmallText>
						<Box component="span" sx={{ display: "flex", alignItems: "center", mr: -1 }}>
							<ArrowLeftIconButton color="#fff" onClick={() => console.log("decrement")} />
							<Typography variant="body2" fontWeight="500">
								1
							</Typography>
							<ArrowRightIconButton color="#fff" onClick={() => console.log("increment")} />
						</Box>
					</Box>
					<Box sx={{ mb: 0.6, ...styles }}>
						<SmallText>Color</SmallText>
						<ProductCircularColor color="#EBEBEB" />
					</Box>
					<Box sx={{ mb: 0.6, mr: -0.7, ...styles }}>
						<SmallText>Size</SmallText>
						<Box>
							<ProductSizeSelect
								value={size}
								handleSizeChange={handleSizeChange}
								iconColor="#fff"
								outerFontColor="#fff"
								outerFontSize={12}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<CartDivider sx={{ mt: 6 }} />

			{/* similar products view area - slider*/}
			<Box mt={2.5}>
				<Typography variant="body2" sx={{ mb: 2.5, fontWeight: 600, textAlign: "center" }}>
					Similar Products
				</Typography>

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
					{[...Array(3)].map((item, idx) => (
						<SwiperSlide key={idx}>
							<Box
								sx={{
									display: "flex",
									gap: 2,
									alignItems: "flex-start",
									justifyContent: "space-between",
								}}
							>
								<Image
									src={IMAGES.WhiteTshirtImg}
									alt="Product"
									height={52}
									width={47}
									objectFit="cover"
								/>
								<Box>
									<Box sx={{ mb: 0.6, gap: 2, ...styles }}>
										<Typography variant="body2" sx={{ fontWeight: 600 }}>
											White Cotton Sweatshirt
										</Typography>
										<SmallText>${"50.00"}</SmallText>
									</Box>
									<Box sx={{ mb: 0.6, gap: 2, ...styles }}>
										<Box component="span" className={classes.rating}>
											<Rating name="read-only" value={4} readOnly />
											<Typography>(45)</Typography>
										</Box>
										<Box className={classes.buttonArea}>
											<IconButton color="primary">
												<FavoriteBorderIcon />
											</IconButton>
											<Button variant="contained">Add to Cart</Button>
										</Box>
									</Box>
								</Box>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};

export default CartDetails;