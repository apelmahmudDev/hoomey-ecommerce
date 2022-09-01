import { Menu, MenuItem } from "@mui/material";
import { MenuFilterProps } from "../../../../../../../types/menu-filter";
import styles from "../../../../../common/styles";

const FilterMenu = ({ anchorEl, isOpen, handleClose }: MenuFilterProps) => {
	return (
		<Menu
			anchorEl={anchorEl}
			id="filter-menu"
			open={isOpen}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: { ...styles.menu, "& .MuiMenuItem-root": { justifyContent: "center", fontSize: 14 } },
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem>Most Orders</MenuItem>
			<MenuItem>Least Orders</MenuItem>
		</Menu>
	);
};

export default FilterMenu;
