import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { CardContent, SelectChangeEvent } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import { useState } from "react";
import { Order } from "../../../../../types/order";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";
import { TableCustomPagination } from "../../../../ui";
import { RoundButton } from "../../../../styledComponents";

export interface Data {
	name: string;
	date: string;
	amount: number;
	status: string;
}

function createData(name: string, date: string, amount: number, status: string): Data {
	return {
		name,
		date,
		amount,
		status,
	};
}

const rows = [
	createData("John Doe", "22-May-2022", 234, "Active"),
	createData("John Doe", "22-May-2022", 150, "InActive"),
	createData("John Doe", "22-May-2022", 234, "Active"),
	createData("John Doe", "22-May-2022", 150, "InActive"),
	createData("John Doe", "22-May-2022", 234, "Active"),
	createData("John Doe", "22-May-2022", 150, "InActive"),
	createData("John Doe", "22-May-2022", 234, "Active"),
	createData("John Doe", "22-May-2022", 150, "InActive"),
	createData("John Doe", "22-May-2022", 234, "Active"),
	createData("John Doe", "22-May-2022", 150, "InActive"),
	createData("John Doe", "22-May-2022", 234, "Active"),
	createData("John Doe", "22-May-2022", 150, "InActive"),
];

const ManageCouponTable = () => {
	const [orderBy, setOrderBy] = useState<keyof Data>("date");
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState<Order>("asc");
	const [page, setPage] = useState(0);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// const handleChangePage = (event: unknown, newPage: number) => {
	// 	setPage(newPage);
	// };

	// const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	// };

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<TableToolbar />
			<StyledCard sx={{ width: "100%" }}>
				<CardContent>
					<TableContainer>
						<Table sx={{ minWidth: 1300 }} aria-labelledby="tableTitle" size="medium">
							<TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										// const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow hover tabIndex={-1} key={index}>
												<TableCell padding="checkbox">{index + 1}</TableCell>
												<TableCell align="center">{row.name}</TableCell>
												<TableCell align="center">{row.date}</TableCell>
												<TableCell align="center">${row.amount}</TableCell>
												<TableCell align="center">{row.status}</TableCell>
												<TableCell align="right">
													<RoundButton size="small" color="secondary" variant="contained">
														Edit
													</RoundButton>
												</TableCell>
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
				</CardContent>
			</StyledCard>
			{/* <TablePagination
				page={page}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				onPageChange={handleChangePage}
				rowsPerPageOptions={[5, 10, 25]}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}

			{/* customized table pagination  */}
			<TableCustomPagination handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} />
		</Box>
	);
};

export default ManageCouponTable;
