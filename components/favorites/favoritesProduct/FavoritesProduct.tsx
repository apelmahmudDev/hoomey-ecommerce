import {
	Box,
	Grid,
	Container,
	Typography,
	MenuItem,
	SelectChangeEvent,
	FormControl,
	Select,
	InputLabel,
	InputAdornment,
} from "@mui/material";
import { FC, useState } from "react";
import { ProductCard } from "../../common";
import { FiltersSvg } from "../../icons";
import { productData } from "./data";

const FavoritesProduct: FC = () => {
	const [filters, setFilters] = useState("10");

	const handleFiltersChange = (event: SelectChangeEvent) => {
		setFilters(event.target.value as string);
	};

	return (
		<Box mb={9.1}>
			<Container maxWidth="xl">
				<Box mb={4}>
					<Grid container spacing={5}>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth sx={{ "& .MuiOutlinedInput-root": { height: 50 } }}>
								<InputLabel id="demo-simple-select-label">Filters</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={filters}
									label="Filters"
									onChange={handleFiltersChange}
									startAdornment={
										<InputAdornment position="start">
											<FiltersSvg />
										</InputAdornment>
									}
								>
									<MenuItem value={10}>Good Ratings</MenuItem>
									<MenuItem value={20}>Average Ratings</MenuItem>
									<MenuItem value={30}>Bad Ratings</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant="h6" textAlign="center">
								Favorites
							</Typography>
						</Grid>
						{/* <Grid item xs={12} md={3}></Grid> */}
					</Grid>
				</Box>

				<Grid container spacing={{ xs: 2, md: 4 }}>
					{productData.map((product, idx) => (
						<Grid key={idx} item xs={6} sm={4} md={3}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default FavoritesProduct;
