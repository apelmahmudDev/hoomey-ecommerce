import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { RoundButton } from "../../styledComponents";
import { TableCustomPagination } from "../../ui";
import { StyledCard, StyledFormControl } from "../components/styledComponents";
import SingleNotification from "./SingleNotification";

const data = [
	{ type: "New User", text: "New Registrtion", name: "Jhon Doe", color: "green", new: true },
	{ type: "New Review", text: "New Review", name: "Levis Tshirt", color: "#8A34FF", new: true },
	{ type: "Abandoned Cart", text: "Abandoned Cart", name: "Jhon Doe", color: "red", new: false },
	{ type: "Order Confirmed", text: "Order Confirmed", name: "Levis Tshirt", color: "black", new: false },
	{ type: "New User", text: "New Registrtion", name: "Jhon Doe", color: "green", new: false },
];

const Notification = () => {
	const [filter, setFilter] = useState("10");
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [, setPage] = useState(0);

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
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
						<SingleNotification data={data[0]} />
						<Divider variant="middle" />
						<SingleNotification data={data[1]} />
						<Divider variant="middle" />
						<SingleNotification data={data[2]} />
						<Divider variant="middle" />
						<SingleNotification data={data[3]} />
						<Divider variant="middle" />
						<SingleNotification data={data[4]} />
					</CardContent>
				</StyledCard>
				<TableCustomPagination handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} />
			</Box>
		</div>
	);
};

export default Notification;
