import { CardContent, Typography, Box, IconButton } from "@mui/material";
import { StyledCard, StyledLabel, StyledTextField } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";
import { RemoveIcon } from "../../../components/icons";

const FlexStack = styled(Box)({
	gap: 20,
	margin: "10px 0",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const PromoBar = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box sx={{ mb: 2.5, display: "flex", alignItems: "center", gap: 2.5, justifyContent: "space-between" }}>
					<Typography fontWeight="medium">Promo Bar</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Add Promo Bar
					</Typography>
				</Box>

				<Box>
					<StyledLabel>Text</StyledLabel>
					<FlexStack>
						<StyledTextField
							size="small"
							placeholder="USE CODE FIRST10 FOR 10% OFF YOUR FIRST ORDER"
							fullWidth
						/>
						<IconButton>
							<RemoveIcon />
						</IconButton>
					</FlexStack>
					<FlexStack>
						<StyledTextField
							size="small"
							placeholder="USE CODE FIRST10 FOR 10% OFF YOUR FIRST ORDER"
							fullWidth
						/>
						<IconButton>
							<RemoveIcon />
						</IconButton>
					</FlexStack>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default PromoBar;
