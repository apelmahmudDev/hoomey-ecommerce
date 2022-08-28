import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, Typography } from "@mui/material";
import { REVIEW_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";

import { CircleIconButton } from "../../../styledComponents";

import PhotoCard from "./PhotoCard";
import Ratings from "./Ratings";
const ReviewDetails = ({ handleTabChange }: ITabChange) => {
	return (
		<div>
			<Box
				sx={{
					mb: 2,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 2.5 }}>
					<CircleIconButton
						sx={{ minWidth: "6px", padding: "2px" }}
						onClick={() => handleTabChange(REVIEW_TABS.ROOT)}
					>
						<ArrowBackIcon />
					</CircleIconButton>
					<Typography
						sx={{
							fontWeight: "500",
							fontSize: "18px",
							marginY: "auto",
						}}
						align="center"
					>
						Review Details
					</Typography>
				</Box>
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={4}>
						<PhotoCard />
					</Grid>
					<Grid item xs={12} md={4}>
						<Ratings />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};
export default ReviewDetails;
