import { Box, IconButton, Typography } from "@mui/material";
import { PopupDivider } from "../../styledComponents";

const ColorPalette = () => {
	return (
		<Box textAlign="center">
			<Typography variant="h6" fontWeight="600" sx={{ color: "#292929" }}>
				Colors Variants
			</Typography>
			<PopupDivider />
			<Box sx={{ display: "flex", flexWrap: "wrap", maxWidth: 400, overflowY: "auto" }}>
				{[
					{ name: "Blue", color: "#364C9B" },
					{ name: "Purple", color: "#963DA7" },
					{ name: "Black", color: "#010101" },
					{ name: "Red", color: "#C81818" },
					{ name: "Orange", color: "#DA851B" },
					{ name: "Yellow", color: "#FFDB00" },
					{ name: "Green", color: "#189418" },
					{ name: "White", color: "#FFFFFF" },
					{ name: "Grey", color: "#EBEBEB" },
					{ name: "Beinge", color: "#BDA672" },
					{ name: "Brown", color: "#714B26" },
				].map((item) => (
					<Box key={item.color}>
						<IconButton>
							<Box
								sx={{
									height: 50,
									width: 50,
									bgcolor: item.color,
									border: "3px solid #DADADA",
									borderRadius: 50,
								}}
							/>
						</IconButton>
						<Typography fontSize={10} sx={{ mt: 1.25, color: "#656565" }}>
							Green
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ColorPalette;
