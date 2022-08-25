import { Box } from "@mui/material";
import { CUSTOMER_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";
import { BackIconButton } from "../../../ui";

const CustomerDetails = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5}>
				<BackIconButton onClick={() => handleTabChange(CUSTOMER_TABS.ROOT)}>Customer Details</BackIconButton>
			</Box>

			{/* other section */}
			{/* <Table /> */}
		</Box>
	);
};

export default CustomerDetails;
