import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import KidsImg from "../../../assets/images/kids.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ForKids: FC = () => {
	return (
		<Box my={8}>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={7}>
						<Box sx={{ width: "100%", height: 458, position: "relative" }}>
							<Image alt="Mountains" src={KidsImg} layout="fill" objectFit="contain" />
						</Box>
					</Grid>
					<Grid item xs={12} md={5}>
						<Typography sx={{ mb: 3 }} variant="h5">
							Wearables & Accessories For Kids
						</Typography>
						<Typography variant="body1">
							Our kids' apparel collection was created with him in mind, so he may look stylish and
							comfortable at all times. Refresh his wardrobe with the latest trends, from essential jeans,
							hoodies, and t-shirts for playtime to suits and shirts for more formal events. Shorts and
							swimwear are essentials for your next vacation, while our footwear and accessories properly
							complete his ensemble.
						</Typography>
						<Button endIcon={<ArrowForwardIcon />} sx={{ mt: 5 }} variant="outlined">
							Shop For Kids
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForKids;
