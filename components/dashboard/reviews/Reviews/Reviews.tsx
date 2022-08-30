import { Box, Stack, Typography } from "@mui/material";

import { ITabChange } from "../../../../types/tab-change";
import SwitchIcon from "../../../common/SwitchIcon";
import ReviewTable from "./ReviewTable";

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
				<Stack direction="row" spacing={1} alignItems="center">
					<Typography sx={{ fontSize: 12 }} fontWeight="medium">
						Review approval
					</Typography>
					<SwitchIcon inputProps={{ "aria-label": "ant design" }} />
				</Stack>
			</Box>
			{/* table section */}
			<Box my={2.5}>
				<ReviewTable handleTabChange={handleTabChange} />
			</Box>
		</div>
	);
};

export default Reviews;
