import { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Paper, TextField } from "@mui/material";
import { productData } from "./data";
import ProductCard from "../ProductCard";
import { FlexStack, Icontext, SearchTitle } from "./styledComponents";
import { NorthWestIcon, SearchIcon, SettingsBackupRestoreIcon } from "../../../uiElements/icons";

const SearchDropdwon = () => {
	const [searchValue, setSearchValue] = useState("");
	const [isShowSuggestion, setIsShowSuggestion] = useState(false);

	useEffect(() => {
		if (searchValue.length > 0) {
			setIsShowSuggestion(true);
		} else {
			setIsShowSuggestion(false);
		}
	}, [searchValue]);

	return (
		<Box mx={5}>
			<Box component="form">
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<TextField
						required
						fullWidth
						size="small"
						type="search"
						label="Search"
						variant="filled"
						id="filled-search"
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<Button sx={{ minWidth: 100 }} type="submit" variant="contained" color="secondary">
						Search
					</Button>
				</Box>
			</Box>
			<Box className="search-suggestions" sx={{ display: isShowSuggestion ? "block" : "none" }}>
				<Paper sx={{ p: 2.5, display: "flex", gap: 2.5 }}>
					{/* your searches */}
					<Box sx={{ width: 300 }}>
						<SearchTitle>Your Searches</SearchTitle>

						<FlexStack>
							<Icontext variant="body2" fontWeight="bold">
								<SearchIcon fontSize="small" /> sweatshirt
							</Icontext>
							<IconButton size="small" color="secondary">
								<NorthWestIcon fontSize="small" />
							</IconButton>
						</FlexStack>

						{[...Array(4)].map((item, idx) => (
							<FlexStack key={idx}>
								<Icontext variant="body2" fontWeight="bold">
									<SettingsBackupRestoreIcon fontSize="small" /> sweatshirt white
								</Icontext>
								<IconButton size="small" color="secondary">
									<NorthWestIcon fontSize="small" />
								</IconButton>
							</FlexStack>
						))}
					</Box>
					{/* Products */}
					<Box>
						<SearchTitle>Products</SearchTitle>
						<Grid container spacing={3}>
							{productData.map((product, idx) => (
								<Grid key={idx} item xs={6} md={3}>
									<ProductCard product={product} />
								</Grid>
							))}
						</Grid>

						<Button sx={{ mt: 3 }} color="secondary" variant="contained">
							See All Product (37)
						</Button>
					</Box>
				</Paper>
			</Box>
		</Box>
	);
};

export default SearchDropdwon;
