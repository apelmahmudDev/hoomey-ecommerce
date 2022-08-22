import { CardContent, SelectChangeEvent, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { useState } from "react";
import { Order } from "../../../../types/order";
import { IMAGES } from "../../../../uiElements";
import { getComparator, stableSort } from "../../../../utils/helper/table-sort";
import { TableCustomPagination } from "../../../ui";
import { StatusText, StyledCard } from "../../components/styledComponents";
import EnhancedTableHead from "./EnhancedTableHead";
import TableToolbar from "./TableToolbar";

export interface Data {
	product: string;
	status: string;
	inventory: number;
	type: string;
	vendor: string;
}

function createData(product: string, status: string, inventory: number, type: string, vendor: string): Data {
	return {
		product,
		status,
		inventory,
		type,
		vendor,
	};
}

const rows = [
	createData("John Doe", "Active", 12, "Woman", "Hoomey"),
	createData("Oliver", "Inactive", 212, "Men", "Hoomey"),
	createData("John Do", "Active", 12, "clothing", "Hoomey"),
	createData("Olive", "Inactive", 21, "Men", "Hoomey"),
	createData("John D", "Active", 2, "Woman", "Hoomey"),
	createData("Oliv", "Inactive", 19, "clothing", "Hoomey"),
	createData("John ", "Active", 102, "man", "Hoomey"),
	createData("Oli", "Inactive", 78, "Men", "Hoomey"),
];

const ProductTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("inventory");

	const [rowsPerPage, setRowsPerPage] = useState(5);
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
						<Table aria-labelledby="tableTitle" sx={{ minWidth: 600 }}>
							<EnhancedTableHead
								order={order}
								orderBy={orderBy}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                          		  rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												role="checkbox"
												tabIndex={-1}
												key={row.product}
												sx={{ "& .MuiTableCell-root": { p: 1.25 } }}
											>
												<TableCell padding="checkbox">{index + 1}</TableCell>

												<TableCell component="th" id={labelId} scope="row" padding="none">
													<Stack direction="row" spacing={2}>
														<Image
															src={IMAGES.Baby1Img}
															height={65}
															width={65}
															objectFit="cover"
															placeholder="blur"
														/>
														<Box
															sx={{
																display: "flex",
																flexDirection: "column",
																justifyContent: "space-around",
															}}
														>
															<Typography sx={{ fontWeight: "500", fontSize: 14 }}>
																Tshirt Levis
															</Typography>
														</Box>
													</Stack>
												</TableCell>

												<TableCell align="center">
													<StatusText fw={500} status={row.status}>
														{row.status}
													</StatusText>
												</TableCell>
												<TableCell align="center">{row.inventory} in stock</TableCell>
												<TableCell align="center">{row.type}</TableCell>

												<TableCell align="center">{row.vendor}</TableCell>
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

export default ProductTable;
