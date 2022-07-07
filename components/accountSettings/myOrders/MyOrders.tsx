import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";
import { ColorShoppingBagSvg } from "../../icons";
import { StatusText } from "../../styledComponents";
import { FlexStack, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";

const MyOrders = () => {
	return (
		<Box>
			<TitleFlexStack>
				<ColorShoppingBagSvg />
				<TitleText>My Orders</TitleText>
			</TitleFlexStack>

			<SettingsDivider />

			{[...Array(3)].map((item, idx) => (
				<Box
					key={idx}
					sx={{ display: "flex", gap: 2.5, bgcolor: "common.white", width: "100%", p: 2.5, my: 2.5 }}
				>
					<Box sx={{ position: "relative", width: 200 }}>
						<Image src={IMAGES.WhiteTshirtImg} alt="Product" height={185} width={134} />
					</Box>

					<Box width="100%">
						<FlexStack>
							<Typography fontWeight="600">White Cotton Sweatshirt </Typography>
							<Button variant="outlined" color="secondary">
								View Order
							</Button>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Quantity</Typography>
							<Typography variant="body2">1</Typography>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Order Number</Typography>
							<Typography variant="body2">1234546</Typography>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Shipped Date</Typography>
							<Typography variant="body2">22 March 2022</Typography>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Total Amount</Typography>
							<Typography variant="body2">$300.00</Typography>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Status</Typography>
							<StatusText status="delivered" variant="body2">
								Delivered
							</StatusText>
						</FlexStack>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default MyOrders;
