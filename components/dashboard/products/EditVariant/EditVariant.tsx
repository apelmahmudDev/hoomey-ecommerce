import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { PRODUCTS_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";

import { CircleIconButton } from "../../../styledComponents";

const EditVariant = ({ handleTabChange }: ITabChange) => {
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
						onClick={() => handleTabChange(PRODUCTS_TABS.ADD_PRODUCT)}
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
						Variant
					</Typography>
				</Box>
				{/* <Grid container spacing={2.5}>
					<Grid item xs={12} md={7}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<Title />
							</Grid>
							<Grid item xs={12}>
								<Media />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={5}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<CategoryStatus />
							</Grid>
						</Grid>
					</Grid>
				</Grid> */}
			</Box>
		</div>
	);
};
export default EditVariant;
