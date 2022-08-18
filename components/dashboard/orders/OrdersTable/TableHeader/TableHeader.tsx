import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../../../../../types/order";
import { Data } from "../OrdersTable";

interface TableHeaderProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: "name",
		numeric: false,
		disablePadding: true,
		label: "Dessert (100g serving)",
	},
	{
		id: "calories",
		numeric: true,
		disablePadding: false,
		label: "Calories",
	},
	{
		id: "fat",
		numeric: true,
		disablePadding: false,
		label: "Fat (g)",
	},
	{
		id: "carbs",
		numeric: true,
		disablePadding: false,
		label: "Carbs (g)",
	},
	{
		id: "protein",
		numeric: true,
		disablePadding: false,
		label: "Protein (g)",
	},
];

const TableHeader = (props: TableHeaderProps) => {
	const { order, orderBy, onRequestSort } = props;
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
						align={headCell.numeric ? "right" : "left"}
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
};

export default TableHeader;
