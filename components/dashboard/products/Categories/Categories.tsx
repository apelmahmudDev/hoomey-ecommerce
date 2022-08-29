import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { PRODUCTS_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";

import { CircleIconButton, RoundButton } from "../../../styledComponents";
import CategoryTable from "./CategoryTable";

const Categories = ({ handleTabChange }: ITabChange) => {
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
						onClick={() => handleTabChange(PRODUCTS_TABS.ROOT)}
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
						Category
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					<RoundButton
						variant="contained"
						color="secondary"
						onClick={() => handleTabChange(PRODUCTS_TABS.ADD_CATEGORY)}
					>
						Add Category
					</RoundButton>
				</Box>
			</Box>
			{/* table section */}
			<Box my={2.5}>
				<CategoryTable />
			</Box>
		</div>
	);
};
export default Categories;
