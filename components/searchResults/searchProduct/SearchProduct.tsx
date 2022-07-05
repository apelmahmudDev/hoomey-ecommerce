import {
	Box,
	Grid,
	Container,
	IconButton,
	Typography,
	Theme,
	MenuItem,
	SelectChangeEvent,
	FormControl,
	Select,
	InputLabel,
	InputAdornment,
} from "@mui/material";
import { FC, useState } from "react";
import { CloseIcon } from "../../../uiElements/icons";
import { ProductCard } from "../../common";
import { FiltersSvg } from "../../icons";
import { productData } from "./data";

const SearchProduct: FC = () => {
	const [bestMatch, setBestMatch] = useState("10");
	const [filters, setFilters] = useState("10");

	const handleMatchChange = (event: SelectChangeEvent) => {
		setBestMatch(event.target.value as string);
	};
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
								Search results for <span style={{ color: "#E2BC82" }}>“Sweatshirts”</span>
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth sx={{ "& .MuiOutlinedInput-root": { height: 50 } }}>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={bestMatch}
									onChange={handleMatchChange}
								>
									<MenuItem value={10}>Best Match</MenuItem>
									<MenuItem value={20}>Price Low to High</MenuItem>
									<MenuItem value={30}>Price High to Low</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						height: 40,
						width: 108,
						padding: "2px 3px",
						bgcolor: (theme: Theme) => theme.palette.secondary.main,
						color: "#fff",
						mb: 2.5,
					}}
				>
					<IconButton size="small" sx={{ color: "common.white" }}>
						<CloseIcon fontSize="small" />
					</IconButton>
					<Typography sx={{ fontSize: 12, fontWeight: 500 }}>Trending</Typography>
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

export default SearchProduct;
