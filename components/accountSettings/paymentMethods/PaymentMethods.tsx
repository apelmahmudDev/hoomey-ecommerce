import { Box, Button, Typography, IconButton } from "@mui/material";
import { FlexStack, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { PaymentMethodsSvg, DeleteSvg, MasterCardSvg, VisaSvg } from "../../icons";

const AddressBook = () => {
	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
				<TitleFlexStack>
					<PaymentMethodsSvg />
					<TitleText>Payment Methods</TitleText>
				</TitleFlexStack>
				<Button color="secondary" variant="contained">
					Add New
				</Button>
			</Box>

			<SettingsDivider />

			{/* payment methods card */}
			{[
				{ card: <MasterCardSvg height={30} width={50} />, aboutCard: "This is your default payment method" },
				{ card: <VisaSvg height={30} width={50} />, aboutCard: "This card has been expired" },
			].map((item, idx) => (
				<Box key={idx} sx={{ position: "relative", bgcolor: "common.white", p: 2.5, my: 2.5 }}>
					<Box sx={{ mr: 7, display: "flex", gap: 2.5 }}>
						<Box component="span" mt={1.5}>
							{item.card}
						</Box>
						<Box width="100%">
							<FlexStack>
								<Typography fontWeight="medium">Card:</Typography>
								<Typography>Master Debit (9332)</Typography>
							</FlexStack>
							<FlexStack>
								<Typography fontWeight="medium">Exp:</Typography>
								<Typography>Exp: 08/21</Typography>
							</FlexStack>
							<FlexStack>
								<Typography fontWeight="medium">Card Holder:</Typography>
								<Typography>John Doe</Typography>
							</FlexStack>
							<Typography sx={{ color: "#9E9E9E", fontSize: 12, mt: 3 }}>{item.aboutCard}</Typography>
						</Box>
					</Box>

					{/* action on right corner */}
					<Box sx={{ position: "absolute", top: 20, right: 20 }}>
						<Box>
							<IconButton>
								<DeleteSvg />
							</IconButton>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default AddressBook;
