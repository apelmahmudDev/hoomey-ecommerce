import { Box, Typography } from "@mui/material";

import { REVIEW_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";
import { RoundButton } from "../../../styledComponents";

const Reviews = ({ handleTabChange }: ITabChange) => {
	return (
		<div>
			<Box
				sx={{
					mb: 4,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Typography variant="h6" fontWeight={600}>
					Reviews
				</Typography>
				<RoundButton onClick={() => handleTabChange(REVIEW_TABS.REVIEW_DETAILS)} variant="contained">
					Select button
				</RoundButton>
			</Box>
		</div>
	);
};

export default Reviews;
