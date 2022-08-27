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

const Manage = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ mb: 2.5 }} fontWeight="medium">
					Manage
				</Typography>

				<FlexStack>
					<Typography variant="body2">Sending Email</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Manage
					</Typography>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Blogs</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Manage
					</Typography>
				</FlexStack>
				<FlexStack>
					<Typography variant="body2">Contact Us / Newsletter</Typography>
					<Typography variant="body2" color="primary.main" fontWeight="medium">
						Manage
					</Typography>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default Manage;
