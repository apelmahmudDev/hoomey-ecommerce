import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ArrowBackIosNewIcon, ArrowForwardIosIcon } from "../../../uiElements/icons";

const TopHeader = () => {
	return (
		<Box
			sx={{
				gap: 2,
				px: 1.25,
				pt: 1.25,
				pb: 1,
				display: "flex",
				color: "#fff",
				textAlign: "center",
				bgcolor: "#292929",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<IconButton color="primary" size="small">
				<ArrowBackIosNewIcon fontSize="small" />
			</IconButton>
			<Typography sx={{ fontFamily: "Euclid Circular A", fontSize: { xs: 8, sm: 10 }, letterSpacing: "0.22em" }}>
				USE CODE FIRST10 FOR 10% OFF YOUR FIRST ORDER
			</Typography>
			<IconButton color="primary" size="small">
				<ArrowForwardIosIcon fontSize="small" />
			</IconButton>
		</Box>
	);
};

export default TopHeader;
