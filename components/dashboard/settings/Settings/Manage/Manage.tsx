import { CardContent, Typography, Box, Button } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";
import { useAppDispatch } from "../../../../../store/hooks";
import { SETTINGS_TABS } from "../../../../../constants/tabs/settings";
import { tabSwitch } from "../../../../../store/slices/settingsSlice";

const FlexStack = styled(Box)({
	gap: 20,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const Manage = () => {
	const dispatch = useAppDispatch();

	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight="medium">
					Manage
				</Typography>

				<FlexStack>
					<Typography variant="body2">Sending Email</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.SENDING_EMAIL))}>Manage</Button>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Blogs</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.BLOGS))}>Manage</Button>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Contact Us / Newsletter</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.CONTACT_OR_NEWSLETTER))}>Manage</Button>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default Manage;
