import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { RoundButton } from "../../styledComponents";
import { StyledCard, StyledFormControl } from "../components/styledComponents";

const Notification = () => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	return (
		<div>
			<Typography sx={{ mb: 4, mt: 2 }} variant="h6" fontWeight={600}>
				Notifications & Recent Activity
			</Typography>

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
				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<StyledFormControl fullWidth size="small">
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Registration</MenuItem>
							<MenuItem value={20}>Order Confirmed</MenuItem>
							<MenuItem value={30}>Abandoned Cart </MenuItem>
							<MenuItem value={40}>Review</MenuItem>
							<MenuItem value={50}>Out of Stock</MenuItem>
						</Select>
					</StyledFormControl>
				</Box>

				<RoundButton sx={{ backgroundColor: "#ECECEC", color: "black" }} variant="contained">
					Mark all as read
				</RoundButton>
			</Box>

			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
							Comments
						</Typography>

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								padding: 2,
								gap: 1.25,
								border: "2px solid rgba(34,47,62, .1)",
								borderRadius: "10px",
								height: "100%",
							}}
						>
							<Box
								sx={{
									display: "flex",

									gap: 2.5,
									justifyContent: "space-between",
									flexWrap: "wrap",
								}}
							>
								<Box
									sx={{
										display: "flex",

										gap: 2.5,
										justifyContent: "flex-start",
										flexWrap: "wrap",
									}}
								>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: 0.25,
											justifyContent: "flex-start",
											flexWrap: "wrap",
										}}
									>
										<Typography sx={{ fontSize: "18px" }} fontWeight="medium">
											Jia Doe
										</Typography>
										<Typography sx={{ color: "#8B8B8B", fontSize: "12px" }} fontWeight="medium">
											22 May 2022
										</Typography>
									</Box>
								</Box>

								<RoundButton variant="contained">Edit Review</RoundButton>
							</Box>

							<Typography
								sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
								fontWeight="light"
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
								eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum
								sit, minima optio blanditiis fugit? Vero, iure!
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									maxHeight: "116px",
									maxWidth: "84px",
									gap: 0.25,
									justifyContent: "flex-start",
									flexWrap: "wrap",
								}}
							>
								{" "}
							</Box>
						</Box>
					</CardContent>
				</StyledCard>
			</Box>
		</div>
	);
};

export default Notification;
