import { CardContent, Typography } from "@mui/material";
import { StyledButton, StyledCard } from "../../../components/styledComponents";

const SEO = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Search engine listing preview
				</Typography>

				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "12px", mt: 1.25 }} fontWeight="light">
					Add a title and description to see how this product might appear in a search engine listing.
				</Typography>
				<StyledButton
					sx={{ px: 4, minWidth: "132px", mt: 2 }}
					type="submit"
					variant="contained"
					color="secondary"
				>
					Edit website SEO
				</StyledButton>
			</CardContent>
		</StyledCard>
	);
};

export default SEO;
