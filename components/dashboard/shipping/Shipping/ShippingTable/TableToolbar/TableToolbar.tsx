import { Toolbar, Grid, Stack } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { StyledTextField } from "../../../../components/styledComponents";
import { RoundButton } from "../../../../../styledComponents";
import { ExportIcon } from "../../../../components/icons";

// interface EnhancedTableToolbarProps {}

const TableToolbar = () => {
	return (
		<Toolbar sx={{ mb: 2.5, px: "0 !important" }}>
			<Grid container spacing={1.25}>
				<Grid item xs={12} sm={9}>
					<Grid container spacing={1.25}>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Title" />
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Type" />
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Price" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Stack spacing={1.25} direction="row">
						<RoundButton variant="contained">
							<FilterListIcon />
						</RoundButton>
						<RoundButton fullWidth startIcon={<ExportIcon />} variant="contained" color="secondary">
							Export .CSV
						</RoundButton>
					</Stack>
				</Grid>
			</Grid>
		</Toolbar>
	);
};

export default TableToolbar;
