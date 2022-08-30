import { Box } from "@mui/material";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { BackIconButton } from "../../../ui";
import SelectUsersTable from "./SelectUsersTable";

const SelectUsers = () => {
	const dispatch = useAppDispatch();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.SENDING_EMAIL))}>
				Sending Email
			</BackIconButton>

			<Box mt={3.75} component="section">
				<SelectUsersTable />
			</Box>
		</Box>
	);
};

export default SelectUsers;
