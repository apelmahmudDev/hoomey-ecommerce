import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../../../../types/order";
import { Data } from "./ProductTable";

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	align: "inherit" | "right" | "left" | "center" | "justify" | undefined;
}

const headCells: readonly HeadCell[] = [
	{
		id: "product",
		align: "left",
		label: "Product",
		disablePadding: true,
	},
	{
		id: "status",
		align: "center",
		label: "Status",
		disablePadding: false,
	},
	{
		id: "inventory",
		align: "center",
		label: "Inventory",
		disablePadding: false,
	},
	{
		id: "type",
		align: "center",
		label: "Type",
		disablePadding: false,
	},
	{
		id: "vendor",
		align: "center",
		label: "Vendor",
		disablePadding: false,
	},
];

const EnhancedTableHead = (props: EnhancedTableProps) => {
	const {
		order,
		orderBy,

		onRequestSort,
	} = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">#</TableCell>

				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
						padding={headCell.disablePadding ? "none" : "normal" || "left"}
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
};

export default EnhancedTableHead;
