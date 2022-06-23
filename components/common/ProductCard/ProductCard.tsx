import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useStyles } from "./styled";
import Image from "next/image";

// types
import { IProduct } from "../../../types/product";

const ProductCard = ({ product }: { product: IProduct }) => {
	const classes = useStyles();

	return (
		<Card className={classes.latestProductCard} sx={{ maxWidth: 340 }}>
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
					<Typography component="div">{product.name}</Typography>
					<Typography variant="body2" color="primary" sx={{ my: 0.5, fontSize: 12 }}>
						<del className={classes.del}>${product.discount.toFixed(2)}</del> ${product.price.toFixed(2)}
					</Typography>
					<Box component="span" sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
						<Rating name="read-only" value={4} readOnly size="small" />
						<Typography sx={{ fontSize: 12 }}>(45)</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
			<Typography className={classes.discountChip}> -{product.discount}%</Typography>
		</Card>
	);
};

export default ProductCard;
