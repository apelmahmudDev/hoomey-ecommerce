import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useState } from "react";
import { StatusText, StyledButton, StyledCard } from "../components/styledComponents";
import { CardContent } from "@mui/material";

interface Data {
	customer: string;
	email: string;
	amount: number;
	status: string;
	action: string;
}

function createData(customer: string, email: string, amount: number, status: string, action: string): Data {
	return {
		customer,
		email,
		amount,
		status,
		action,
	};
}

const rows = [
	createData("John Doe", "John@abc.com", 100, "Delivered", "View"),
	createData("Oliver", "oliver@abc.com", 200, "In Shipping", "View"),
	createData("Mariah Betts", "Mariah@abc.com", 100, "Delivered", "View"),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = "asc" | "desc";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: "customer",
		numeric: false,
		disablePadding: true,
		label: "Customer",
	},
	{
		id: "email",
		numeric: false,
		disablePadding: false,
		label: "Email",
	},
	{
		id: "amount",
		numeric: false,
		disablePadding: false,
		label: "Amount",
	},
	{
		id: "status",
		numeric: false,
		disablePadding: false,
		label: "Status",
	},
	{
		id: "action",
		numeric: true,
		disablePadding: false,
		label: "Action",
	},
];

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const {
		// onSelectAllClick,
		order,
		orderBy,
		//  numSelected,
		//   rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">#</TableCell>
				{/* <TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all desserts",
						}}
					/>
				</TableCell> */}
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "center"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

const EnhancedTableToolbar = () => {
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
			}}
		>
			<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
				Orders
			</Typography>
			<Tooltip title="Filter list">
				<IconButton>
					<FilterListIcon />
				</IconButton>
			</Tooltip>
		</Toolbar>
	);
};

const OrdersTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("amount");
	// const [selected, setSelected] = useState<readonly string[]>([]);
	// const [page, setPage] = useState(0);
	// const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	// const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (event.target.checked) {
	// 		const newSelected = rows.map((n) => n.customer);
	// 		setSelected(newSelected);
	// 		return;
	// 	}
	// 	setSelected([]);
	// };

	// const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
	// 	const selectedIndex = selected.indexOf(name);
	// 	let newSelected: readonly string[] = [];

	// 	if (selectedIndex === -1) {
	// 		newSelected = newSelected.concat(selected, name);
	// 	} else if (selectedIndex === 0) {
	// 		newSelected = newSelected.concat(selected.slice(1));
	// 	} else if (selectedIndex === selected.length - 1) {
	// 		newSelected = newSelected.concat(selected.slice(0, -1));
	// 	} else if (selectedIndex > 0) {
	// 		newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
	// 	}

	// 	setSelected(newSelected);
	// };

	// const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	// };

	// const isSelected = (name: string) => selected.indexOf(name) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	// const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box>
			<StyledCard>
				<CardContent>
					<EnhancedTableToolbar
					//  numSelected={selected.length}
					/>
					<TableContainer>
						<Table aria-labelledby="tableTitle" size="medium">
							<EnhancedTableHead
								// numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								// onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                            rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									// .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										// const isItemSelected = isSelected(row.customer);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												// onClick={(event) => handleClick(event, row.customer)}
												role="checkbox"
												// aria-checked={isItemSelected}
												tabIndex={-1}
												key={row.customer}
												// selected={isItemSelected}
											>
												<TableCell padding="checkbox">{index + 1}</TableCell>
												{/* <TableCell padding="checkbox">
												<Checkbox
													color="primary"
													checked={isItemSelected}
													inputProps={{
														"aria-labelledby": labelId,
													}}
												/>
											</TableCell> */}
												<TableCell component="th" id={labelId} scope="row" padding="none">
													{row.customer}
												</TableCell>
												<TableCell align="center">{row.email}</TableCell>
												<TableCell align="center">{row.amount}</TableCell>
												<TableCell align="center">
													<StatusText fw={500} status={row.status}>
														{row.status}
													</StatusText>
												</TableCell>
												<TableCell align="right">
													<StyledButton variant="contained" color="secondary">
														View
													</StyledButton>
												</TableCell>
											</TableRow>
										);
									})}
								{/* {emptyRows > 0 && (
									<TableRow
										style={{
											height: 53 * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)} */}
							</TableBody>
						</Table>
					</TableContainer>
					{/* <TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/> */}
				</CardContent>
			</StyledCard>
			{/* <FormControlLabel control={<Switch checked={dense}  label="Dense padding" /> */}
		</Box>
	);
};

export default OrdersTable;
