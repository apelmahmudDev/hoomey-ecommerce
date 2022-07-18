import { useState } from "react";
import { Box, Rating } from "@mui/material";

const styles = {
	my: 1.25,
	height: 50,
	width: "100%",
	maxWidth: 400,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "1px solid #292929",
};

const Ratings = () => {
	const [value, setValue] = useState<number | null>(5);
	return (
		<>
			<Box sx={{ ...styles }}>
				<Rating
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
			</Box>
			<Box sx={{ ...styles }}>
				<Rating name="simple-controlled" value={4} />
			</Box>
			<Box sx={{ ...styles }}>
				<Rating name="simple-controlled" value={3} />
			</Box>
			<Box sx={{ ...styles }}>
				<Rating name="simple-controlled" value={2} />
			</Box>
			<Box sx={{ ...styles }}>
				<Rating name="simple-controlled" value={1} />
			</Box>
		</>
	);
};

export default Ratings;
