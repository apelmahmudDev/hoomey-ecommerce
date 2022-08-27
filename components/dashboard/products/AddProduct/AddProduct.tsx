import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { PRODUCTS_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";

import { Grid } from "@mui/material";
import { CircleIconButton } from "../../../styledComponents";

import { Button, Checkbox, Container, FormControlLabel } from "@mui/material";
import Media from "./Media";

import { RoundButton } from "../../../styledComponents";
import Category from "./Category";
import Inventory from "./Inventory";
import LongDescription from "./LongDescription";
import MetaFields from "./MetaFields";
import Options from "./Options";
import OptionsCheckBox from "./OptionsCheckBox";
import Pricing from "./Pricing";
import ProductOrganization from "./ProductOrganization";
import ProductStatus from "./ProductStatus";
import SEO from "./SEO";
import Shipping from "./Shipping";
import ShippingPrice from "./ShippingPrice";
import ShortDescription from "./ShortDescription";
import SizeChart from "./SizeChart";
import Taxes from "./Taxes";
import Variants from "./Variants";

const AddProduct = ({ handleTabChange }: ITabChange) => {
	return (
		<div>
			<Box
				sx={{
					mb: 2,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 2.5 }}>
					<CircleIconButton
						sx={{ minWidth: "6px", padding: "2px" }}
						onClick={() => handleTabChange(PRODUCTS_TABS.ROOT)}
					>
						<ArrowBackIcon />
					</CircleIconButton>
					<Typography
						sx={{
							fontWeight: "500",
							fontSize: "18px",
							marginY: "auto",
						}}
						align="center"
					>
						Add Product
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					<RoundButton variant="contained" color="secondary">
						Import Product by CSV
					</RoundButton>
				</Box>
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={7}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<ShortDescription />
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel control={<Checkbox defaultChecked />} label="Long Description" />
							</Grid>

							<Grid item xs={12}>
								<LongDescription />
							</Grid>
							<Grid item xs={12}>
								<Media />
							</Grid>
							<Grid item xs={12}>
								<Pricing />
							</Grid>
							<Grid item xs={12}>
								<Inventory />
							</Grid>
							<Grid item xs={12}>
								<Options />
							</Grid>
							<Grid item xs={12}>
								<Variants />
							</Grid>
							<Grid item xs={12}>
								<Shipping />
							</Grid>
							<Grid item xs={12}>
								<OptionsCheckBox />
							</Grid>
							<Grid item xs={12}>
								<SEO />
							</Grid>
							<Grid item xs={12}>
								<MetaFields />
							</Grid>
							<Grid item xs={12} mt={5}>
								<Container maxWidth="sm">
									<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
										<Button
											sx={{ borderRadius: "5px" }}
											size="large"
											fullWidth
											variant="outlined"
											color="secondary"
										>
											Cancel
										</Button>
										<Button
											sx={{ borderRadius: "5px" }}
											size="large"
											fullWidth
											variant="contained"
											color="secondary"
										>
											Add
										</Button>
									</Box>
								</Container>
							</Grid>
						</Grid>
					</Grid>
					<Grid item container xs={12} md={5}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<ProductStatus />
							</Grid>
							<Grid item xs={12}>
								<Category />
							</Grid>
							<Grid item xs={12}>
								<ProductOrganization />
							</Grid>
							<Grid item xs={12}>
								<SizeChart />
							</Grid>
							<Grid item xs={12}>
								<ShippingPrice />
							</Grid>
							<Grid item xs={12}>
								<Taxes />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};
export default AddProduct;
