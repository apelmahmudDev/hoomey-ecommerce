import { Typography, Box, SelectChangeEvent, Button, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { CloseIcon } from "../../../uiElements/icons";
import { PaymentSystemView, ProductSizeSelect, SecuredByNorton } from "../../common";
import { WhiteLockSvg } from "../../icons";
import { ProductCircularColor, SmallText } from "../../styledComponents";
import { ArrowLeftIconButton, ArrowRightIconButton } from "../../ui";

// styles
const styles = {
	flexStack: { my: 0.3, display: "flex", alignItems: "center", justifyContent: "space-between" },
	fs12: {
		fontSize: 12,
		color: COLORS.GRANITE_GREY,
		fontWeight: 500,
	},
};

const ShoppingCart = () => {
	const [size, setSize] = useState("10");

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};
	console.log(size);

	return (
		<div>
			<Typography sx={{ mb: 3 }} variant="h6">
				Shopping Cart
			</Typography>
			<Typography sx={{ mb: 2 }} variant="h6">
				Your order
			</Typography>
			<Typography sx={{ mb: 2, fontSize: 12 }}>Total (1 Item) $50</Typography>
			{/* product & it's details */}
			<Box>
				<Box sx={{ textAlign: "right" }}>
					<IconButton size="small">
						<CloseIcon fontSize="small" />
					</IconButton>
				</Box>
				<Box sx={{ display: "flex", gap: 1.3, width: "100%", my: 2.5 }}>
					<Box component="div">
						<Image src={IMAGES.WhiteTshirtImg} alt="Product" height={115} width={72} objectFit="cover" />
					</Box>
					<Box component="div" sx={{ width: "100%" }}>
						<Box sx={{ ...styles.flexStack }}>
							<Typography sx={{ fontSize: 12, color: COLORS.GRANITE_GREY }}>
								White Cotton Sweatshirt
							</Typography>
							<Typography sx={{ fontSize: 12, color: COLORS.GRANITE_GREY, fontWeight: 500 }}>
								$50.00
							</Typography>
						</Box>

						<Box component="div" sx={{ ...styles.flexStack }}>
							<Typography sx={{ ...styles.fs12 }}>Quantity</Typography>
							<Box sx={{ ...styles.flexStack }}>
								<ArrowLeftIconButton
									color={COLORS.GRANITE_GREY}
									onClick={() => console.log("decrement")}
								/>
								<Typography variant="body2" fontWeight="500">
									1
								</Typography>
								<ArrowRightIconButton
									color={COLORS.GRANITE_GREY}
									onClick={() => console.log("increment")}
								/>
							</Box>
						</Box>
						<Box sx={{ ...styles.flexStack }}>
							<Typography sx={{ ...styles.fs12 }}>Color</Typography>
							<ProductCircularColor color="#EBEBEB" />
						</Box>
						<Box sx={{ ...styles.flexStack }}>
							<Typography sx={{ ...styles.fs12 }}>Size</Typography>
							<ProductSizeSelect
								value={size}
								handleSizeChange={handleSizeChange}
								iconColor={COLORS.GRANITE_GREY}
								outerFontColor={COLORS.GRANITE_GREY}
								outerFontSize={12}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box sx={{ background: "#FAFAFA", border: "1px solid #D6D4D4" }}>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4", color: COLORS.GRANITE_GREY }}>
					Subtotal
				</SmallText>
				<SmallText sx={{ p: 1.5, color: COLORS.GRANITE_GREY }}>Shipping</SmallText>
				<Box sx={{ ...styles, px: 1.5 }}>
					<SmallText>USPS Priority 2-3 Day:</SmallText>
					<SmallText>$5.00</SmallText>
				</Box>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>Shipping to NJ</SmallText>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>Tax</SmallText>
				<Box sx={{ p: 1.5, display: "flex", justifyContent: "space-between" }}>
					<Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.GRANITE_GREY }}>
						Total
					</Typography>
					<Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.GRANITE_GREY }}>
						$55.00
					</Typography>
				</Box>
			</Box>
			<SecuredByNorton />
			<PaymentSystemView />
			<FormControlLabel
				sx={{ mb: 2.5, "& .MuiTypography-root": { fontSize: 10 } }}
				control={<Checkbox size="small" />}
				label={
					<Typography>
						I have read and agree to the website{" "}
						<span style={{ color: "#E2BC82" }}>terms and conditions</span>
					</Typography>
				}
			/>
			<Button fullWidth variant="contained" color="secondary" endIcon={<WhiteLockSvg />}>
				Checkout
			</Button>
		</div>
	);
};

export default ShoppingCart;
