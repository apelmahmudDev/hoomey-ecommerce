import { Box, CardContent, Typography } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";

const Media = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Media
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 1.25,
						border: "2px solid rgba(34,47,62, .1)",
						borderRadius: "5px",
						height: "120px",
					}}
				>
					<Box
						sx={{
							display: "flex",

							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2 }}>
							Add file
						</Typography>
						<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2, ml: 2, mr: 2 }}>
							|
						</Typography>
						<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2 }}>
							Add from URL
						</Typography>
					</Box>

					<Typography
						sx={{ color: "#8B8B8B", fontWeight: "500", fontSize: "16px", mb: 1.25 }}
						fontWeight="light"
					>
						Add images, videos or 3D models
					</Typography>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Media;
