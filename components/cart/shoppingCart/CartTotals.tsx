import {
	Typography,
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	SelectChangeEvent,
	MenuItem,
	FormControl,
	Select,
	TextField,
	Button,
} from "@mui/material";
import { styled } from "@mui/styles";
import { HeadingText } from "../../styledComponents";
import { COLORS } from "../../../theme/colors";
import { useStyles } from "./styled";
import { WhiteLockSvg } from "../../icons";
import { PaymentSystemView, SecuredByNorton } from "../../common";
import { EndIconButton } from "../../ui";
import { ExpandMoreIcon, LocationOnIcon } from "../../../uiElements/icons";
import { useState } from "react";
import { COUNTRIES } from "../../../assets/data/countries";

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
	const classes = useStyles();
	const [country, setCountry] = useState("Bangladesh");
	const [product, setProduct] = useState("10");

	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};
	const handleProductChange = (event: SelectChangeEvent) => {
		setProduct(event.target.value as string);
	};

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
				<SmallText sx={{ p: 1.5 }}>Shipping to NJ</SmallText>
				{/* update address */}
				<Accordion className={classes.accordion}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<LocationOnIcon sx={{ color: "#4B4B4B", width: 15 }} />
						<Typography sx={{ fontSize: 10, fontWeight: 600 }}>Change address</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box
							component="form"
							sx={{
								"& .MuiTextField-root, & .MuiFormControl-root": { my: 0.5 },
							}}
						>
							<FormControl fullWidth>
								<Select
									size="small"
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={country}
									onChange={handleCountryChange}
								>
									{COUNTRIES.map((option) => (
										<MenuItem key={option.name} value={option.name}>
											{option.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl fullWidth>
								<Select
									size="small"
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={product}
									onChange={handleProductChange}
								>
									<MenuItem value={10}>New Jersey</MenuItem>
									<MenuItem value={20}>New Jersey</MenuItem>
									<MenuItem value={30}>New Jersey</MenuItem>
								</Select>
							</FormControl>
							<TextField size="small" fullWidth placeholder="Town/City" />
							<TextField size="small" fullWidth placeholder="ZIP" />
							<Button
								type="submit"
								fullWidth
								color="secondary"
								size="small"
								variant="contained"
								sx={{ mt: 1.2, justifyContent: "center !important" }}
							>
								Update
							</Button>
						</Box>
					</AccordionDetails>
				</Accordion>

				<SmallText sx={{ p: 1.5, borderBottom: "1px solid #D6D4D4", borderTop: "1px solid #D6D4D4" }}>
					Tax
				</SmallText>
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
			<EndIconButton onClick={() => console.log("checkout working")} endIcon={<WhiteLockSvg />}>
				Proceed to checkout
			</EndIconButton>
		</div>
	);
};

export default CartTotals;
