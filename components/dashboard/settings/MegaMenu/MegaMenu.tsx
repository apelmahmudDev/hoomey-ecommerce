import { BackIconButton } from "../../../ui";
import { Box, Grid } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import Menu from "./Menu";
import AddItem from "./AddItem";

const MegaMenu = () => {
	const dispatch = useAppDispatch();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.ROOT))}>
				Men Mega Menu Settings
			</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<Grid container spacing={2.5}>
					{/* menu */}
					<Grid item xs={12} md={4}>
						<Menu />
					</Grid>

					{/* add item */}
					<Grid item xs={12} md={8}>
						<AddItem />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default MegaMenu;
