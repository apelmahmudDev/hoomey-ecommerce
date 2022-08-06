import { useState } from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import { IMAGES } from "../../../uiElements";
import { HeadingText, ProductCircularColor, SmallText } from "../../styledComponents";
import { ColorPalette } from "../../common";

const FlexStack = styled(Box)((theme) => ({
	display: "flex",
	gap: "20px",
	alignItems: "center",
	justifyContent: "space-between",
}));

const Text = styled(Typography)((theme) => ({
	fontWeight: 500,
}));

const OrderDetails = () => {
	const [colorPaletteAnchorEl, setColorPaletteAnchorElAnchorEl] = useState<HTMLButtonElement | null>(null);

	// color palette handler
	const handleOpenColorPalette = (event: React.MouseEvent<HTMLButtonElement>) => {
		setColorPaletteAnchorElAnchorEl(event.currentTarget);
	};

	return (
		<Box>
			<Container maxWidth="md">
				<Typography sx={{ fontWeight: 600, mb: 1.3 }}>Order Details:</Typography>
				<SmallText>Total (2 Items) $100</SmallText>
				{/* product box with details */}

				<Box sx={{ my: 2.5, display: "flex", gap: 3.7 }}>
					<Image src={IMAGES.WhiteTshirtImg} alt="product-image" height={196} width={154} />
					<Box sx={{ width: "100%" }}>
						<FlexStack>
							<HeadingText>White Cotton Sweatshirt</HeadingText>
							<Typography variant="h6" sx={{ fontWeight: 400 }}>
								$50.00
							</Typography>
						</FlexStack>
						<FlexStack>
							<Text variant="body2">Quantity</Text>
							<Typography variant="body2">$50.00</Typography>
						</FlexStack>
						<FlexStack>
							<Text variant="body2">Color</Text>
							{/* <ProductCircularColor color="#FFDB00" className="color-circle">
								<ColorPalette />
							</ProductCircularColor> */}
							<ProductCircularColor
								// aria-describedby={id}
								color="#FFDB00"
								className="color-circle"
								onClick={handleOpenColorPalette}
							/>
							<ColorPalette
								anchorEl={colorPaletteAnchorEl}
								setAnchorElAnchorEl={setColorPaletteAnchorElAnchorEl}
							/>
						</FlexStack>
						<FlexStack>
							<Text variant="body2">Size</Text>
							<Text variant="body2">M</Text>
						</FlexStack>
					</Box>
				</Box>
				<Divider sx={{ mt: 2.5, background: "#EEEEEE" }} />
			</Container>
		</Box>
	);
};

export default OrderDetails;
