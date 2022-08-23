import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { CircleIconButton, RoundButton } from "../../styledComponents";
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
								variant="contained"
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
								variant="contained"
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
					<Box my={2.5}>Category Table</Box>
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
								variant="contained"
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
					</Box>
				</>
			)}
		</div>
	);
};

export default Products;
