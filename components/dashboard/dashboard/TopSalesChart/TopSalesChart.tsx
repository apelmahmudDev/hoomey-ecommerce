import { useState } from "react";
import { StyledCard, StyledFormControl } from "../../components/styledComponents";
import { Toolbar, Typography, MenuItem, Box, Select, SelectChangeEvent, CardContent } from "@mui/material";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});
import { ApexOptions } from "apexcharts";
import { AppDivider } from "../../../styledComponents";

const TopSalesChart = () => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

	const series = [44, 55, 67, 83];
	// chart options
	const options: ApexOptions = {
		chart: {
			height: 350,
			type: "line",
			zoom: {
				enabled: true,
			},
		},
	};

	return (
		<StyledCard>
			<CardContent>
				{/* enhanced toolbar */}
				<Toolbar
					sx={{
						pl: { sm: 2 },
						pr: { xs: 1, sm: 1 },
					}}
				>
					<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
						Top Sales
					</Typography>

					<Box sx={{ minWidth: "150px" }}>
						<StyledFormControl fullWidth size="small">
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={filter}
								onChange={handleFilter}
							>
								<MenuItem value={10}>This Month</MenuItem>
								<MenuItem value={20}>Previous Month</MenuItem>
								<MenuItem value={30}>Last 6 Months</MenuItem>
								<MenuItem value={40}>This Year</MenuItem>
							</Select>
						</StyledFormControl>
					</Box>
				</Toolbar>

				{/* radialbars chart */}
				<div id="chart">
					<Chart options={options} series={series} type="radialBar" height={350} />
				</div>

				<AppDivider />
			</CardContent>
		</StyledCard>
	);
};

export default TopSalesChart;
