import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RoundButton } from "../../../styledComponents";

const SingleNotification = () => {
	return (
		<div>
			{" "}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					padding: 2,
					gap: 1.25,
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
					<RoundButton variant="contained">Edit Review</RoundButton>
					<Box
						sx={{
							display: "flex",

							gap: 1.25,
							justifyContent: "flex-end",
							flexWrap: "wrap",
						}}
					>
						<AccessTimeIcon />
						<Typography
							sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 0.25 }}
							fontWeight="light"
						>
							24 May 2022 at 03:45 pm
						</Typography>
					</Box>
				</Box>
				<Typography sx={{ mt: 2 }} variant="h6" fontWeight={600}>
					Notifications & Recent Activity
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Typography
							sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
							fontWeight="light"
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
							eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum sit,
							minima optio blanditiis fugit? Vero, iure!
						</Typography>
					</Grid>
					<Grid item xs={3} />
					<Grid item xs={1}>
						<CancelIcon />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default SingleNotification;
