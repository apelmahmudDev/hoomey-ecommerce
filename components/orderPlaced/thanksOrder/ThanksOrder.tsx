import { Box, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../../theme/colors";
import { CheckSvg } from "../../icons";
import { HeadingText } from "../../styledComponents";

const FlexStack = styled(Box)((theme) => ({
	display: "flex",
	gap: "20px",
	alignItems: "center",
	justifyContent: "space-between",
}));

const Text = styled(Typography)((theme) => ({
	fontWeight: 500,
}));

const ThanksOrder = () => {
	return (
		<Box mb={2.5}>
			<Container>
				<HeadingText>Order Placed</HeadingText>
				<Container maxWidth="md">
					<Box sx={{ background: COLORS.OFF_WHITE, py: 2.5, px: 5, textAlign: "center" }}>
						<CheckSvg sx={{ height: 70, width: 70 }} />
						<Typography
							sx={{
								textTransform: "uppercase",
								fontWeight: "medium",
								letterSpacing: "0.1em",
								my: 2.5,
							}}
							variant="h5"
						>
							Thank You For Your Order
						</Typography>
						<Typography variant="body2">
							Please check your inbox, as a confirmation email is on its way
						</Typography>
						<Divider sx={{ background: "1px solid #ACACAC", my: 2.5 }} />
						<FlexStack my={2.5}>
							<Text>Order Number</Text>
							<Text>#123456789</Text>
						</FlexStack>
						<FlexStack my={2.5}>
							<Text>Order Status</Text>
							<Text>In Shipment</Text>
						</FlexStack>
						<FlexStack>
							<Text>Delivery (expected)</Text>
							<Text>23/May/2022 - 25/May/2022</Text>
						</FlexStack>
					</Box>
				</Container>
			</Container>
		</Box>
	);
};

export default ThanksOrder;
