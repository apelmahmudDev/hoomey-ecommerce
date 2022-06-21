import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import ManImg from "../../../assets/images/man.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ForKids: FC = () => {
	return (
		<Box my={8}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Image quality="85" src={ManImg} alt={"Man Image"} height={420} width={420} layout="fixed" />
					</Grid>
					<Grid item xs={12} md={6}>
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
