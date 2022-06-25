import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

import Heading from "../../ui/Heading";
import ShopForButton from "../../ui/ShopForButton";
import { IMAGES } from "../../../uiElements";

const ForMen: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={5}>
						<Heading text="Wearables & Accessories For Men" />
						<Typography sx={{ fontSize: 12 }} color="text.secondary">
							Whatever the weather brings this season, we've got a variety of trendy outfits for you to
							choose from. We have everything you need, from casual tops, t-shirts, and jeans for lazy
							days to shorts and swimsuits for your next vacation. Our clothing may simply be matched with
							our newest trainers to change up your gym style. Stock up on essentials like undergarments
							in a variety of styles, or relax in our comfortable loungewear.
						</Typography>
						{/* <Link href="/"> */}
						<ShopForButton btnText="Shop For Men" />
						{/* </Link> */}
					</Grid>
					<Grid item xs={12} md={7}>
						<Image src={IMAGES.ManImg} alt={"Female"} height={650} objectFit="cover" layout="responsive" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForMen;
