import { Container, Box, Grid } from "@mui/material";
import Billingdetails from "../billingdetails";
import ShoppingCart from "../shoppingCart";

const CombineCheckout = () => {
	return (
		<Box mb={9.1}>
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={6} md={8}>
						<Billingdetails />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ShoppingCart />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CombineCheckout;
