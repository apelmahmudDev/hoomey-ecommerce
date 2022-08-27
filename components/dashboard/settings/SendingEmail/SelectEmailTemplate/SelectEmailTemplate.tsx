import { CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { StyledCard } from "../../../components/styledComponents";
import OrderPlacedEmailTemplate from "./order-placed-email.svg";

const SelectEmailTemplate = () => {
	return (
		<StyledCard>
			<CardContent>
				<Grid container spacing={1.25}>
					{[...Array(4)].map((item, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
							<Image
								src={OrderPlacedEmailTemplate}
								alt="order-place-email-template"
								layout="responsive"
							/>
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
