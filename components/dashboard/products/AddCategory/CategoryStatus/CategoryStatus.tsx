import {
	Box,
	CardContent,
	Checkbox,
	Divider,
	FormControlLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { BorderFormControl, StyledButton, StyledCard } from "../../../components/styledComponents";
import { useStyles } from "../../AddProduct/styled";

const CategoryStatus = () => {
	const [filter, setFilter] = useState("10");

	const classes = useStyles();
	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Category status
				</Typography>

				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<BorderFormControl fullWidth size="small" className={classes.statusSelect}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Draft</MenuItem>
							<MenuItem value={20}>Active</MenuItem>
						</Select>
					</BorderFormControl>
				</Box>
				<Typography sx={{ mb: 1.25 }} color="text.secondary" variant="body2">
					This category will be hidden from all sales channels.
				</Typography>
				<Divider variant="middle" />
				<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mt: 1.25 }}>
					<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
						Sub-Categories
					</Typography>
					<StyledButton sx={{ px: 2 }} type="submit" variant="contained" color="secondary">
						Add Sub-Category
					</StyledButton>
				</Box>
				<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px", mt: 2 }}>
					Deselect all
				</Typography>
				<Divider variant="middle" />
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<FormControlLabel control={<Checkbox defaultChecked />} label="Trending" />
					<FormControlLabel control={<Checkbox defaultChecked />} label="Discounts" />
					<FormControlLabel control={<Checkbox defaultChecked />} label="Clothing" />
					<FormControlLabel control={<Checkbox defaultChecked />} label="Gym" />
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default CategoryStatus;
