import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../../store/api/categoryApi";
import { useAppDispatch } from "../../../../store/hooks";
import { useToastify } from "../../../../store/slices/toastifySlice";
import { Popup } from "../../../common";
import { BackIconButton } from "../../../ui";
import Media from "../AddProduct/Media";
import AddSubCategory from "./AddSubCategory";
import CategoryStatus from "./CategoryStatus";
import Title from "./Title";

interface Inputs {
	name: string;
	slug: string;
	description: string;
	isStatus: string;
}

const AddCategory = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [createCategory, { data, isLoading, error }] = useCreateCategoryMutation();
	const [isAddSubCategoryOpen, setIsAddSubCategoryOpen] = useState(false);

	const { register, handleSubmit } = useForm<Inputs>();

	// handle form submit & user creation
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const { name, description, isStatus } = data;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		createCategory({
			name: name,
			slug: `${name.toLowerCase()}`,
			description: description,
			status: isStatus === "Active" ? true : false,
		});
	};

	const handleAddSubCategoryTogglePopup = (boolean: boolean) => {
		setIsAddSubCategoryOpen(boolean);
	};

	//console.log("category", data);
	// console.log(Boolean(error));

	//  notifications
	useEffect(() => {
		if (error) dispatch(useToastify({ desc: "Category create failed.", severity: "error" }));
		if (data) dispatch(useToastify({ desc: "Category create successful.", severity: "success" }));
	}, [dispatch, error, data]);

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

				<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={7}>
							<Grid container spacing={2.5}>
								<Grid item xs={12}>
									<Title register={register} />
								</Grid>
								<Grid item xs={12}>
									<Media />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={5}>
							<Grid container spacing={2.5}>
								<Grid item xs={12}>
									<CategoryStatus
										register={register}
										handleTogglePopup={handleAddSubCategoryTogglePopup}
									/>
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
											type="submit"
										>
											{isLoading ? "Please wait..." : "Add"}
										</Button>
									</Box>
								</Grid>
								<Grid item xs={3} />
							</Grid>
						</Grid>
					</Grid>
				</Box>

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
