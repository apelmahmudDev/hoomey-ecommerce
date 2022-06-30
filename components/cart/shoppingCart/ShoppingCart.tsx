import { FC } from "react";
import { Grid, Box, Container } from "@mui/material";
import Item from "./Item";
import CartTotals from "./CartTotals";

const ShoppingCart: FC = () => {
	return (
		<Box mb={9.1}>
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} md={8}>
						<Item />
					</Grid>
					<Grid item xs={12} md={4}>
						<CartTotals />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ShoppingCart;
