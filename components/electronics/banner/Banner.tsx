import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./styled";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";

const Banner: FC = () => {
	const classes = useStyles();

	return (
		<Box mb={9.1}>
			<Box sx={{ height: 597, position: "relative" }}>
				<Box sx={{ width: "100%", height: "100%", position: "relative" }}>
					<Image src={IMAGES.CuteYoungGirlImg} alt="hero-banner" layout="fill" objectFit="cover" />
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

export default Banner;
