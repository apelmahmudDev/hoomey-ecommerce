import { FC } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FemaleImg from "../../../assets/images/female.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const ForFemale: FC = () => {
	return (
		<Box my={8}>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={7}>
						<Box sx={{ width: "100%", height: 471, position: "relative" }}>
							<Image alt="Mountains" src={FemaleImg} layout="fill" objectFit="contain" />
						</Box>
					</Grid>
					<Grid item xs={12} md={5}>
						<Typography sx={{ mb: 3 }} variant="h5">
							Wearables & Accessories For Woman
						</Typography>
						<Typography variant="body1">
							Our women's collection has crucial seasonal pieces to refresh your wardrobe. We have
							everything you need, from sophisticated casual jumpsuits, dresses, and heels to swim and
							beachwear for your next vacation. Tops in seasonal stripes and vivid prints, as well as
							jeans in a variety of sizes, are available. Complete your ensemble with a variety of purses,
							shoes, and accessories.
						</Typography>
						<Button endIcon={<ArrowForwardIcon />} sx={{ mt: 5 }} variant="outlined">
							Shop For Woman
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForFemale;
