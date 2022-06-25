import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

import Heading from "../../ui/Heading";
import ShopForButton from "../../ui/ShopForButton";
import { IMAGES } from "../../../uiElements";

const ForKids: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={7}>
						<Image
							src={IMAGES.KidsSowImg}
							alt={"Female"}
							height={458}
							objectFit="cover"
							layout="responsive"
						/>
					</Grid>
					<Grid item xs={12} md={5}>
						<Heading text="Wearables & Accessories For Kids" />
						<Typography sx={{ fontSize: 12 }} color="text.secondary">
							Our kid&apos;s apparel collection was created with him in mind, so he may look stylish and
							comfortable at all times. Refresh his wardrobe with the latest trends, from essential jeans,
							hoodies, and t-shirts for playtime to suits and shirts for more formal events. Shorts and
							swimwear are essentials for your next vacation, while our footwear and accessories properly
							complete his ensemble.
						</Typography>
						{/* <Link href="/"> */}
						<ShopForButton btnText="Shop For Kids" />
						{/* </Link> */}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForKids;
