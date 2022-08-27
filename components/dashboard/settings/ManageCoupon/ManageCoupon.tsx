import { Box } from "@mui/material";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { BackIconButton } from "../../../ui";
import ManageCouponTable from "./ManageCouponTable";

const ManageCoupon = () => {
	const dispatch = useAppDispatch();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.ROOT))}>Manage Coupon</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<ManageCouponTable />
			</Box>
		</Box>
	);
};

export default ManageCoupon;
