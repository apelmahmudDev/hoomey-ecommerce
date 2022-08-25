import { Box } from "@mui/material";
import { CUSTOMER_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";
import { BackIconButton } from "../../../ui";

const AddCustomer = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5}>
				<BackIconButton onClick={() => handleTabChange(CUSTOMER_TABS.ROOT)}>Add Customer</BackIconButton>
			</Box>

			{/* others section */}
			{/* <Table /> */}
		</Box>
	);
};

export default AddCustomer;
