import { CardContent, Grid, Typography } from "@mui/material";
// import Image from "next/image";
import { StyledCard } from "../../../components/styledComponents";
// import OrderPlacedEmailTemplate from "./order-placed-email.svg";
import OrderPlacedEmail from "./orderPlacedEmail";

const SelectEmailTemplate = () => {
	return (
		<StyledCard>
			<CardContent>
				<Grid container spacing={1.25}>
					{[...Array(4)].map((item, idx) => (
						<Grid key={idx} item xs={12} md={6} lg={3}>
							{/* <Image
								src={OrderPlacedEmailTemplate}
								alt="order-place-email-template"
								layout="responsive"
							/> */}
							<OrderPlacedEmail />
							<Typography sx={{ mt: 2.5, textAlign: "center" }} fontWeight="medium" variant="body2">
								Order Placed Email
							</Typography>
						</Grid>
					))}
				</Grid>
			</CardContent>
		</StyledCard>
	);
};

export default SelectEmailTemplate;
