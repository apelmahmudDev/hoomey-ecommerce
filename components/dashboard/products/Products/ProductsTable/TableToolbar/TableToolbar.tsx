import FilterListIcon from "@mui/icons-material/FilterList";
import { Grid, Stack, Toolbar } from "@mui/material";
import { RoundButton } from "../../../../../styledComponents";
import { ExportIcon } from "../../../../components/icons";
import { StyledTextField } from "../../../../components/styledComponents";

// interface EnhancedTableToolbarProps {}

const TableToolbar = () => {
	return (
		<Toolbar sx={{ mb: 2.5, px: "0 !important" }}>
			<Grid container spacing={1.25}>
				<Grid item xs={12} sm={9}>
					<Grid container spacing={1.25}>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Product" />
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Type" />
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledTextField size="small" fullWidth placeholder="Search by Vendor" />
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
