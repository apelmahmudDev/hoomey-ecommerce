import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { REVIEW_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";

import { CircleIconButton } from "../../../styledComponents";

import { useState } from "react";

const ReviewDetails = ({ handleTabChange }: ITabChange) => {
	const [isImportCSVOpen, setIsImportCSVOpen] = useState(false);
	const [isSEOOpen, setIsSEOOpen] = useState(false);

	const handleImportCSVTogglePopup = (boolean: boolean) => {
		setIsImportCSVOpen(boolean);
	};

	const handleSEOTogglePopup = (boolean: boolean) => {
		setIsSEOOpen(boolean);
	};
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
			</Box>
		</div>
	);
};
export default ReviewDetails;
