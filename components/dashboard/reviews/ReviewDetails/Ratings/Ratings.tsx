import { Box, CardContent, Divider, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { StyledCard, StyledFormControl } from "../../../components/styledComponents";
import { useStyles } from "../styled";

const Ratings = () => {
	const [filter, setFilter] = useState("10");
	const classes = useStyles();

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	return (
		<StyledCard>
			<CardContent>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2.5 }}>
						<Typography sx={{ flex: "1 1 100%", fontSize: "16px", fontWeight: "500" }} component="div">
							Ratings
						</Typography>
					</Box>
					<Box sx={{ minWidth: "135px", height: "45px" }}>
						<StyledFormControl fullWidth size="small" className={classes.daySelect}>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={filter}
								onChange={handleFilter}
							>
								<MenuItem value={10}>Overall</MenuItem>
								<MenuItem value={20}>This Week</MenuItem>
								<MenuItem value={30}>This Month</MenuItem>
								<MenuItem value={40}>Quarterly</MenuItem>
								<MenuItem value={50}>Yearly</MenuItem>
							</Select>
						</StyledFormControl>
					</Box>
				</Stack>
				<Divider variant="middle" />
			</CardContent>
		</StyledCard>
	);
};
export default Ratings;
