import { ORDER_TABS } from "..";
import { BackIconButton } from "../../../ui";
import { Box, Typography } from "@mui/material";
import { ITabChange } from "../../../../types/tab-change";

const OrderDetails = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			{/* back to order tab */}
			<Box mb={3.5}>
				<BackIconButton onClick={() => handleTabChange(ORDER_TABS.ROOT)}>Order</BackIconButton>
			</Box>

			{/*  */}
		</Box>
	);
};

export default OrderDetails;
