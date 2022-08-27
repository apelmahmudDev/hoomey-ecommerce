import { Box } from "@mui/material";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { BackIconButton } from "../../../ui";
import ContactOrNewsletterTable from "./ContactOrNewsletterTable";

const ContactOrNewsletter = () => {
	const dispatch = useAppDispatch();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.ROOT))}>
				Manage Contact Us / Newsletter
			</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<ContactOrNewsletterTable />
			</Box>
		</Box>
	);
};

export default ContactOrNewsletter;
