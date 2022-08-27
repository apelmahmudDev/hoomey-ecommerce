import { CardContent, Typography, Box } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";

const FlexStack = styled(Box)({
	gap: 20,
	margin: "10px 0",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const MegaMenu = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ mb: 2.5 }} fontWeight="medium">
					Mega Menu
				</Typography>

				<FlexStack>
					<Typography variant="body2">Men</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Customize
					</Typography>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Women</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Customize
					</Typography>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Kids</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Customize
					</Typography>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default MegaMenu;
