import { CardContent, Typography, Box, Button } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";
import { tabSwitch } from "../../../../../store/slices/settingsSlice";
import { SETTINGS_TABS } from "../../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../../store/hooks";

const FlexStack = styled(Box)({
	gap: 20,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const MegaMenu = () => {
	const dispatch = useAppDispatch();

	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight="medium">
					Mega Menu
				</Typography>

				<FlexStack>
					<Typography variant="body2">Men</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.MEGA_MENU))}>Customize</Button>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Women</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.MEGA_MENU))}>Customize</Button>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Kids</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.MEGA_MENU))}>Customize</Button>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default MegaMenu;
