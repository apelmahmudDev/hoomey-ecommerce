import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Popup } from "../../../common";
import Media from "../AddProduct/Media";
import AddSubCategory from "./AddSubCategory";
import CategoryStatus from "./CategoryStatus";
import Title from "./Title";
import { BackIconButton } from "../../../ui";
import { useRouter } from "next/router";

const AddCategory = () => {
	const router = useRouter();
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
				<BackIconButton onClick={() => router.back()}>Add Category</BackIconButton>

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
