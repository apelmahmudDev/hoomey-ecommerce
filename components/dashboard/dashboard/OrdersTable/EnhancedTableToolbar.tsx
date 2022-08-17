import { Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

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

export default EnhancedTableToolbar;
