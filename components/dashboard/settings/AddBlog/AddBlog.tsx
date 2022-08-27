import { Box, Grid, Container, CardContent, Typography } from "@mui/material";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { DashboardDivider, RoundButton } from "../../../styledComponents";
import { AppDropzone, BackIconButton } from "../../../ui";
import { StyledCard, StyledLabel, StyledTextBox, StyledTextField } from "../../components/styledComponents";

const Blogs = () => {
	const dispatch = useAppDispatch();
	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.BLOGS))}>Add Blog</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<Grid container spacing={2.5}>
					{/* menu */}
					<Grid item xs={12} md={7}>
						<StyledCard>
							<CardContent>
								<StyledTextBox>
									<StyledLabel fw="500">Title</StyledLabel>
									<StyledTextField size="small" fullWidth placeholder="Monthly Phone Wallpaper" />
								</StyledTextBox>

								<StyledTextBox>
									<StyledLabel fw="500">Title</StyledLabel>
									<StyledTextField size="small" fullWidth placeholder="Hoomey" />
								</StyledTextBox>

								<StyledTextBox>
									<StyledLabel fw="500">Description</StyledLabel>
									<StyledTextField
										multiline
										rows={5}
										size="small"
										fullWidth
										placeholder="Write description here..."
									/>
								</StyledTextBox>
							</CardContent>
						</StyledCard>
					</Grid>

					{/* add item */}
					<Grid item xs={12} md={5}>
						<StyledCard>
							<CardContent>
								<div>
									<StyledTextBox>
										<StyledLabel fw="500">Blog Status</StyledLabel>
										<StyledTextField size="small" fullWidth placeholder="Monthly Phone Wallpaper" />
									</StyledTextBox>
									<Typography variant="body2" color="text.secondary">
										This blog will be hidden
									</Typography>
									<DashboardDivider sx={{ my: 1.25 }} />
								</div>

								<StyledTextBox>
									<StyledLabel fw="500">Media</StyledLabel>
									<AppDropzone options={{ addRemoveLinks: true }} />
								</StyledTextBox>
							</CardContent>
						</StyledCard>
					</Grid>
				</Grid>

				<Container sx={{ mt: 6 }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							flexDirection: { xs: "column", sm: "row" },
						}}
					>
						<RoundButton fullWidth color="secondary" variant="outlined">
							Cancle
						</RoundButton>
						<RoundButton fullWidth color="secondary" variant="contained">
							Add
						</RoundButton>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Blogs;
