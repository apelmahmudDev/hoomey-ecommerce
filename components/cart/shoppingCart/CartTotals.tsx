import { HeadingText } from "../../styledComponents";

import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/styles";
import { COLORS } from "../../../theme/colors";
// import { useStyles } from "./styled";
import {
	LockSvg,
	MasterCardForCartSvg,
	NortonSvg,
	PaypalSvg,
	UnionPaySvg,
	VisaForCartSvg,
	OPaySvg,
	WhiteLockSvg,
} from "../../icons";
import { PaymentSystemView, SecuredByNorton } from "../../common";

const SmallText = styled(Typography)({
	fontSize: 10,
	fontWeight: 500,
	color: COLORS.GRANITE_GREY,
});

const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};

const CartTotals = () => {
	// const classes = useStyles();
	return (
		<div>
			<HeadingText sx={{ mb: 3.5 }}>Cart totals</HeadingText>
			<Box sx={{ background: "#FAFAFA", border: "1px solid #D6D4D4" }}>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>Subtotal</SmallText>
				<SmallText sx={{ p: 1.5 }}>Shipping</SmallText>
				<Box sx={{ ...styles, px: 1.5 }}>
					<SmallText>USPS Priority 2-3 Day:</SmallText>
					<SmallText>$5.00</SmallText>
				</Box>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>Shipping to NJ</SmallText>
				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4" }}>Tax</SmallText>
				<Box sx={{ ...styles, p: 1.5 }}>
					<Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.GRANITE_GREY }}>
						Total
					</Typography>
					<Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.GRANITE_GREY }}>
						$55.00
					</Typography>
				</Box>
			</Box>
			<SecuredByNorton />
			<PaymentSystemView />
			<Button fullWidth variant="contained" color="secondary" endIcon={<WhiteLockSvg />}>
				Proceed to checkout
			</Button>
		</div>
	);
};

export default CartTotals;
