import Image from "next/image";
import { useStyles } from "./styled";
import { Box, Stack, Typography, Divider, Rating, Card, CardContent, IconButton } from "@mui/material";

// types
import { IProduct } from "../../../types/product";
import { COLORS } from "../../../theme/colors";
import { FavoriteBorderIcon, ShoppingBagOutlinedIcon } from "../../../uiElements/icons";
import { PriceTypography } from "../../ui";

const ProductCard = ({ product }: { product: IProduct }) => {
	const classes = useStyles();

	return (
		<Card className={classes.latestProductCard}>
			<Box sx={{ background: COLORS.PRODUCT_CARD_BG, position: "relative" }}>
				<Image
					src={product.image}
					alt={product.name}
					height={469}
					width={340}
					objectFit="cover"
					layout="responsive"
					className="swiper-lazy"
				/>

				{/* hover view item  */}
				<Stack
					className={classes.hoverView}
					direction="row"
					divider={<Divider orientation="vertical" flexItem />}
					spacing={2}
				>
					<IconButton color="primary" size="large" aria-label="add-to-favorite">
						<FavoriteBorderIcon />
					</IconButton>
					<IconButton color="primary" size="large" aria-label="add-to-cart">
						<ShoppingBagOutlinedIcon />
					</IconButton>
				</Stack>
			</Box>

			<CardContent>
				<Typography component="div">{product.name}</Typography>
				<PriceTypography discount={product.discount} price={product.price} fontSize={12} />
				<Box component="span" sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
					<Rating name="read-only" value={4} readOnly size="small" />
					<Typography sx={{ fontSize: 12 }}>(45)</Typography>
				</Box>
			</CardContent>

			<Typography className={classes.discountChip}> -{product.discount}%</Typography>
		</Card>
	);
};

export default ProductCard;
