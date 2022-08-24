import { CardContent, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Order } from "../../../../types/order";
import { getComparator, stableSort } from "../../../../utils/helper/table-sort";
import { TableCustomPagination } from "../../../ui";
import { StatusChip, StyledCard } from "../../components/styledComponents";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";

export interface Data {
	id: number;
	category: string;
	date: string | number;
	subCategories: number;
	products: number;
	status: string;
	action: string;
}

function createData(
	id: number,
	category: string,
	date: string | number,
	subCategories: number,
	products: number,
	status: string,
	action: string,
): Data {
	return {
		id,
		category,
		date,
		subCategories,
		products,
		status,
		action,
	};
}

const rows = [
	createData(1, "Men", "22-May-2022", 6, 4, "Active", "Active"),
	createData(2, "Kids", "22-May-2022", 4, 5, "Draft", "Inactive"),
	createData(3, "Women", "22-May-2022", 2, 4, "Active", "Active"),
	createData(4, "Men", "22-May-2022", 3, 4, "Draft", "Inactive"),
	createData(5, "Kids", "22-May-2022", 5, 2, "Active", "Active"),
	createData(6, "Women", "22-May-2022", 4, 5, "Active", "Inactive"),
	createData(7, "Men", "22-May-2022", 2, 5, "Draft", "Active"),
	createData(8, "Kids", "22-May-2022", 5, 2, "Active", "Inactive"),
	createData(9, "Women", "22-May-2022", 1, 6, "Draft", "Inactive"),
];

const OrdersTable = () => {
	const [orderBy, setOrderBy] = useState<keyof Data>("category");
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
						<Table sx={{ minWidth: 1000 }} aria-labelledby="tableTitle" size="medium">
							<TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow hover tabIndex={-1} key={row.id}>
												<TableCell padding="checkbox">{index + 1}</TableCell>
												<TableCell
													component="th"
													id={labelId}
													scope="row"
													align="center"
													padding="none"
												>
													{row.category}
												</TableCell>
												<TableCell align="center">{row.date}</TableCell>
												<TableCell align="center">{row.subCategories}</TableCell>
												<TableCell align="center">{row.products}</TableCell>
												<TableCell align="center">
													<StatusChip status={row.status}>{row.status}</StatusChip>
												</TableCell>
												<TableCell align="center">
													<StatusChip status={row.action}>{row.action}</StatusChip>
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

export default OrdersTable;
