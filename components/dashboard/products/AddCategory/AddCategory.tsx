import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { PRODUCTS_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";
import { CircleIconButton } from "../../../styledComponents";

import { Popup } from "../../../common";
import Media from "../AddProduct/Media";
import AddSubCategory from "./AddSubCategory";
import CategoryStatus from "./CategoryStatus";
import Title from "./Title";

const AddCategory = ({ handleTabChange }: ITabChange) => {
	const [isAddSubCategoryOpen, setIsAddSubCategoryOpen] = useState(false);

	const handleAddSubCategoryTogglePopup = (boolean: boolean) => {
		setIsAddSubCategoryOpen(boolean);
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
						onClick={() => handleTabChange(PRODUCTS_TABS.CATEGORIES)}
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
						Add Category
					</Typography>
				</Box>
				<Grid container spacing={2.5}>
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
								<CategoryStatus handleTogglePopup={handleAddSubCategoryTogglePopup} />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2.5}>
							<Grid item xs={3} />
							<Grid item xs={6}>
								<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
									<Button
										sx={{ borderRadius: "5px" }}
										size="large"
										fullWidth
										variant="outlined"
										color="secondary"
									>
										Cancel
									</Button>
									<Button
										sx={{ borderRadius: "5px" }}
										size="large"
										fullWidth
										variant="contained"
										color="secondary"
									>
										Add
									</Button>
								</Box>
							</Grid>
							<Grid item xs={3} />
						</Grid>
					</Grid>
				</Grid>

				<Popup
					isOpen={isAddSubCategoryOpen}
					rounded
					isNeedCloseBtn
					handleTogglePopup={handleAddSubCategoryTogglePopup}
				>
					<AddSubCategory handleTogglePopup={handleAddSubCategoryTogglePopup} />
				</Popup>
			</Box>
		</div>
	);
};
export default AddCategory;
