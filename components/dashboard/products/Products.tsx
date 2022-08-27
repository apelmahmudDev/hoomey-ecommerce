import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Typography } from "@mui/material";
import { useState } from "react";

import { CircleIconButton, RoundButton } from "../../styledComponents";
import CategoryStatus from "./AddCategory/CategoryStatus";
import Title from "./AddCategory/Title";
import Category from "./AddProduct/Category";
import Inventory from "./AddProduct/Inventory";
import LongDescription from "./AddProduct/LongDescription";
import Media from "./AddProduct/Media";
import MetaFields from "./AddProduct/MetaFields";
import Options from "./AddProduct/Options";
import OptionsCheckBox from "./AddProduct/OptionsCheckBox";
import Pricing from "./AddProduct/Pricing";
import ProductOrganization from "./AddProduct/ProductOrganization";
import ProductStatus from "./AddProduct/ProductStatus";
import SEO from "./AddProduct/SEO";
import Shipping from "./AddProduct/Shipping";
import ShippingPrice from "./AddProduct/ShippingPrice";
import ShortDescription from "./AddProduct/ShortDescription";
import SizeChart from "./AddProduct/SizeChart";
import Taxes from "./AddProduct/Taxes";
import Variants from "./AddProduct/Variants";
import CategoryTable from "./CategoryTable";
import ProductsTable from "./ProductsTable";

const Products = () => {
	const [state, setState] = useState("Products");
	return (
		<div>
			{/* top part of Products} */}
			{state === "Products" && (
				<>
					<Box
						sx={{
							mb: 4,
							mt: 2,
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							justifyContent: "space-between",
							flexWrap: "wrap",
						}}
					>
						<Typography variant="h6" fontWeight={600}>
							Products
						</Typography>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<RoundButton variant="contained" onClick={() => setState("Category")}>
								Categories
							</RoundButton>
							<RoundButton variant="contained" color="secondary" onClick={() => setState("Add Product")}>
								Add Product
							</RoundButton>
						</Box>
					</Box>

					{/* table section */}
					<Box my={2.5}>
						<ProductsTable />
					</Box>
				</>
			)}
			{state === "Add Product" && (
				<>
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
								onClick={() => setState("Products")}
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
										<FormControlLabel
											control={<Checkbox defaultChecked />}
											label="Long Description"
										/>
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
				</>
			)}
			{state === "Category" && (
				<>
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
								onClick={() => setState("Products")}
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
								Category
							</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<RoundButton variant="contained" color="secondary" onClick={() => setState("Add Category")}>
								Add Category
							</RoundButton>
						</Box>
					</Box>
					{/* table section */}
					<Box my={2.5}>
						<CategoryTable />
					</Box>
				</>
			)}
			{state === "Add Category" && (
				<>
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
								onClick={() => setState("Category")}
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
								Add Category
							</Typography>
						</Box>
						<Grid container spacing={2.5}>
							<Grid item xs={12} md={7}>
								<Grid container spacing={2.5}>
									<Grid item xs={12}>
										<Title />
									</Grid>
									<Grid item xs={12}>
										<Media />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={5}>
								<Grid container spacing={2.5}>
									<Grid item xs={12}>
										<CategoryStatus />
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
		</div>
	);
};

export default Products;
