import { Container, Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import Billingdetails from "../billingdetails";
import ShoppingCart from "../shoppingCart";

const CombineCheckout = () => {
	const router = useRouter();

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		router.push("/order-placed");
	};

	return (
		<Box mb={9.1}>
			<Container>
				<Box component="form" autoComplete="off" onSubmit={handleSubmit}>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={6} md={8}>
							<Billingdetails />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<ShoppingCart />
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default CombineCheckout;
