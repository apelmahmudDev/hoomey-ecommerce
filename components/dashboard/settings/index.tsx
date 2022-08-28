import { useSelector } from "react-redux";
import { SETTINGS_TABS } from "../../../constants/tabs/settings";
import { RootState } from "../../../store/types";
import AddBlog from "./AddBlog";
import Blogs from "./Blogs";
import ContactOrNewsletter from "./ContactOrNewsletter";
import ManageCoupon from "./ManageCoupon";
import MegaMenu from "./MegaMenu";
import SelectUsers from "./SelectUsers";
import SendingEmail from "./SendingEmail";
import Settings from "./Settings";

function SettingsView() {
	const settings = useSelector((state: RootState) => state.settings);

	return (
		<>
			{settings.tab === SETTINGS_TABS.ROOT && <Settings />}
			{settings.tab === SETTINGS_TABS.MEGA_MENU && <MegaMenu />}
			{settings.tab === SETTINGS_TABS.SENDING_EMAIL && <SendingEmail />}
			{settings.tab === SETTINGS_TABS.SENDING_EMAIL_SELECT_USERS && <SelectUsers />}
			{settings.tab === SETTINGS_TABS.BLOGS && <Blogs />}
			{settings.tab === SETTINGS_TABS.ADD_BLOG && <AddBlog />}
			{settings.tab === SETTINGS_TABS.MANAGE_COUPON && <ManageCoupon />}
			{settings.tab === SETTINGS_TABS.CONTACT_OR_NEWSLETTER && <ContactOrNewsletter />}
		</>
	);
}

export default SettingsView;
