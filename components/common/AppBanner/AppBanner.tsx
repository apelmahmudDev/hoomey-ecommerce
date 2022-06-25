import Image, { StaticImageData } from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./styled";

const AppBanner = ({ image }: { image: StaticImageData | string }) => {
	const classes = useStyles();

	return (
		<Box mb={9.1}>
			<Box sx={{ height: 597, position: "relative" }}>
				<Box sx={{ width: "100%", height: "100%", position: "relative" }}>
					<Image src={image} alt="banner-hero" layout="fill" objectFit="cover" />
				</Box>
				<Box className={classes.content}>
					<Typography variant="h5" sx={{ fontFamily: "Sedan" }}>
						Discover the new you
					</Typography>
					<Button variant="contained">Shop Now</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AppBanner;
