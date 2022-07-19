import { Paper, Box, Button, Divider, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
		</Box>
	);
}

const FilterDropdwon = () => {
	return (
		<Box m={5}>
			<Paper sx={{ maxWidth: 308, boxShadow: 0, borderRadius: 0, p: 2.5, border: "1px solid #ABABAB" }}>
				<Box textAlign="right">
					<Button color="secondary">Close</Button>
				</Box>
				<Divider sx={{ my: 2.5, bgcolor: "#5B5B5B" }} />

				{/* Categories */}
				<Box my={2.5}>
					<Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
						Categories
					</Typography>
					<FormGroup>
						<FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Trending" />
						<FormControlLabel control={<Checkbox color="secondary" />} label="Discount" />
						<FormControlLabel control={<Checkbox color="secondary" />} label="Clothing" />
					</FormGroup>
				</Box>

				{/* Brands */}
				<Box my={2.5}>
					<Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
						Price Range
					</Typography>
					<Box sx={{ width: "100%" }}>
						<Typography variant="subtitle1" sx={{ mb: 0.5 }}>
							$0 - $1500
						</Typography>
						<LinearProgressWithLabel value={50} />
						<Box sx={{ mt: 0.5, display: "flex", justifyContent: "space-between" }}>
							<Typography variant="subtitle1">$0</Typography>
							<Typography variant="subtitle1">$1500</Typography>
						</Box>
					</Box>
				</Box>

				{/* Brands */}
				<Box my={2.5}>
					<Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
						Categories
					</Typography>
					<FormGroup>
						<FormControlLabel control={<Checkbox color="secondary" />} label="Adidas" />
						<FormControlLabel control={<Checkbox color="secondary" />} label="Nike" />
						<FormControlLabel control={<Checkbox color="secondary" />} label="Adidas" />
						<FormControlLabel control={<Checkbox color="secondary" />} label="Adidas" />
					</FormGroup>
				</Box>

				<Box sx={{ "& .MuiButton-root": { my: 1.25 } }}>
					<Divider sx={{ my: 2.5, bgcolor: "#5B5B5B" }} />
					<Button variant="contained" fullWidth>
						Apply Filters
					</Button>
					<Button variant="outlined" fullWidth color="secondary">
						Apply Filters
					</Button>
				</Box>
			</Paper>
		</Box>
	);
};

export default FilterDropdwon;
