import { Menu, MenuItem } from "@mui/material";
import styles from "../styles";

interface MenuProps {
	// eslint-disable-next-line @rushstack/no-new-null
	anchorEl: HTMLElement | null;
	isOpen: boolean;
	handleClose: () => void;
}

const Notifications = ({ anchorEl, isOpen, handleClose }: MenuProps) => {
	return (
		<Menu
			anchorEl={anchorEl}
			id="notifications-menu"
			open={isOpen}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: { ...styles.menu },
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem>Settings</MenuItem>
			<MenuItem>Logout</MenuItem>
		</Menu>
	);
};

export default Notifications;
