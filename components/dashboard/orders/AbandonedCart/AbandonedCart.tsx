import { Box } from "@mui/material";

import { ITabChange } from "../../../../types/tab-change";
import Table from "./Table";
import { ORDER_TABS } from "..";
import { BackIconButton } from "../../../ui";

const AbandonedCart = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5}>
				<BackIconButton onClick={() => handleTabChange(ORDER_TABS.ROOT)}>Abondoned Cart</BackIconButton>
			</Box>

			{/* table section */}
			<Table />
		</Box>
	);
};

export default AbandonedCart;
