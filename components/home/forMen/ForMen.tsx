import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import ManImg from "../../../assets/images/man.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ForMen: FC = () => {
	return (
		<Box my={8}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Typography sx={{ mb: 3 }} variant="h5">
							Wearables & Accessories For Men
						</Typography>
						<Typography variant="body1">
							Whatever the weather brings this season, we've got a variety of trendy outfits for you to
							choose from. We have everything you need, from casual tops, t-shirts, and jeans for lazy
							days to shorts and swimsuits for your next vacation. Our clothing may simply be matched with
							our newest trainers to change up your gym style. Stock up on essentials like undergarments
							in a variety of styles, or relax in our comfortable loungewear.
						</Typography>
						<Button endIcon={<ArrowForwardIcon />} sx={{ mt: 5 }} variant="outlined">
							Shop For Men
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Image quality="85" src={ManImg} alt={"Man Image"} height={420} width={420} layout="fixed" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForMen;
