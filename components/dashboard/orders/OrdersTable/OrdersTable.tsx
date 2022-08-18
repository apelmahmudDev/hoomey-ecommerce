import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { CardContent } from "@mui/material";
import { StyledCard } from "../../components/styledComponents";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import { useState } from "react";
import { Order } from "../../../../types/order";
import { getComparator, stableSort } from "../../../../utils/helper/table-sort";

export interface Data {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number): Data {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
	};
}

const rows = [
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Donut", 452, 25.0, 51, 4.9),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
	createData("Honeycomb", 408, 3.2, 87, 6.5),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Jelly Bean", 375, 0.0, 94, 0.0),
	createData("KitKat", 518, 26.0, 65, 7.0),
	createData("Lollipop", 392, 0.2, 98, 0.0),
	createData("Marshmallow", 318, 0, 81, 2.0),
	createData("Nougat", 360, 19.0, 9, 37.0),
	createData("Oreo", 437, 18.0, 63, 4.0),
];

const OrdersTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("calories");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<TableToolbar />
			<StyledCard sx={{ width: "100%" }}>
				<CardContent>
					<TableContainer>
						<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
							<TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow hover tabIndex={-1} key={row.name}>
												<TableCell padding="checkbox">{index + 1}</TableCell>
												<TableCell component="th" id={labelId} scope="row" padding="none">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
												<TableCell align="right">{row.fat}</TableCell>
												<TableCell align="right">{row.carbs}</TableCell>
												<TableCell align="right">{row.protein}</TableCell>
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow
										style={{
											height: 53 * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						page={page}
						component="div"
						count={rows.length}
						rowsPerPage={rowsPerPage}
						onPageChange={handleChangePage}
						rowsPerPageOptions={[5, 10, 25]}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</CardContent>
			</StyledCard>
		</Box>
	);
};

export default OrdersTable;
