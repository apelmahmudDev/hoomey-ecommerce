import { Container, Typography, Box, Grid, Button, SelectChangeEvent } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useState } from "react";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { ProductSizeSelect } from "../../common";
import { ProductCircularColor } from "../../styledComponents";
import { ArrowLeftIconButton, ArrowRightIconButton, PriceTypography } from "../../ui";

const styles = {
	display: "flex",
	alignItems: "center",
	gap: 1,
	p: 0.5,
	border: `1px solid ${COLORS.BORDER}`,
};

export default function FloatingAdvertise() {
	const [size, setSize] = useState("10");

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};

	// console.log(size);

	return (
		<AppBar position="fixed" sx={{ bgcolor: "common.white", top: "auto", bottom: 0, p: 1 }}>
			<Toolbar>
				<Container>
					<Grid container spacing={3} alignItems="center">
						<Grid item xs={12} sm={6}>
							<Box sx={{ display: "flex", gap: 1.3, alignItems: "center" }}>
								<Image
									src={IMAGES.WhiteTshirtImg}
									alt="product"
									height={70}
									width={50}
									objectFit="cover"
								/>
								<Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
									White Cotton Sweatshirt
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box sx={{ display: "flex", alignItems: "center", gap: 2.4 }}>
								<PriceTypography discount={90} price={50} fontSize={20} />
								<ProductCircularColor color="#EBEBEB" />
								<Box sx={{ ...styles }}>
									<ArrowLeftIconButton onClick={() => console.log("decrement")} />
									<Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
										1
									</Typography>
									<ArrowRightIconButton onClick={() => console.log("increment")} />
								</Box>
								<Box sx={{ ...styles }}>
									<ProductSizeSelect value={size} handleSizeChange={handleSizeChange} />
								</Box>
								<Button color="secondary" variant="contained">
									Add to cart
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	);
}
