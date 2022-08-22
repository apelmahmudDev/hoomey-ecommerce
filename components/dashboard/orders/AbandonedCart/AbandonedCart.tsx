import { Box, Stack, Typography } from "@mui/material";
import { ArrowBackIcon } from "../../../../uiElements/icons";
import { CircleIconButton } from "../../../styledComponents";
import { HandleTabChangeType } from "../../../../types/tab-change";
import Table from "./Table";
import { ORDER_TABS } from "..";

interface AbandonedCartProps {
	handleTabChange: HandleTabChangeType;
	setTab: (tab: string) => void;
}

const AbandonedCart = ({ handleTabChange, setTab }: AbandonedCartProps) => {
	return (
		<Box my={2.5}>
			{/* back to order tab */}
			<Stack direction="row" alignItems="center" spacing={2.5} sx={{ mb: 3.5, alignSelf: "flex-start" }}>
				<CircleIconButton onClick={() => setTab(ORDER_TABS.ROOT)} size="small">
					<ArrowBackIcon fontSize="small" />
				</CircleIconButton>
				<Typography sx={{ fontWeight: 500, fontSize: { xs: 16, sm: 18 } }}>Abondoned Cart</Typography>
			</Stack>

			{/* table section */}
			<Table />
		</Box>
	);
};

export default AbandonedCart;
