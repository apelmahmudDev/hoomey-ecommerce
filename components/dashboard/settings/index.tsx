import { useSelector } from "react-redux";
import { SETTINGS_TABS } from "../../../constants/tabs/settings";
import { RootState } from "../../../store/types";
import Settings from "./Settings";

function SettingsView() {
	const settings = useSelector((state: RootState) => state.settings);

	return <>{settings.tab === SETTINGS_TABS.ROOT && <Settings />}</>;
}

export default SettingsView;
