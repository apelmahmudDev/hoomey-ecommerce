import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import FemaleImg from "../../../assets/images/female.png";
import Heading from "../../ui/Heading";
import ShopForButton from "../../ui/ShopForButton";
// import Link from "../../ui/Link";

const ForFemale: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={7}>
						<Image src={FemaleImg} alt={"Female"} height={471} objectFit="cover" layout="responsive" />
					</Grid>
					<Grid item xs={12} md={5}>
						<Heading text="Wearables & Accessories For Woman" />
						<Typography sx={{ fontSize: 12 }} color="text.secondary">
							Our women's collection has crucial seasonal pieces to refresh your wardrobe. We have
							everything you need, from sophisticated casual jumpsuits, dresses, and heels to swim and
							beachwear for your next vacation. Tops in seasonal stripes and vivid prints, as well as
							jeans in a variety of sizes, are available. Complete your ensemble with a variety of purses,
							shoes, and accessories.
						</Typography>
						{/* <Link href="/"> */}
						<ShopForButton btnText="Shop For Woman" />
						{/* </Link> */}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ForFemale;
