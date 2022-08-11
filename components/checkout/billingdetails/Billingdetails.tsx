import { Typography, Box, TextField as MuiTextField, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
// import { CountryDropdown, RegionDropdown, CountryRegionData } from "react-country-region-selector";
import { COUNTRIES } from "../../../assets/data/countries";

export const Label = styled(Typography)({
	marginBottom: "5px",
	fontSize: 10,
	color: "#727376",
});

const TextField = styled(MuiTextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "0 !important",
		fontSize: "10px !important",
		color: "#656565 !important",
	},
});

const Billingdetails = () => {
	// const [country, setCountry] = useState({ country: "", region: "" });

	// const handleCountrySelect = (val: string) => {
	// 	setCountry({ ...country, country: val });
	// };

	// const handleRegionSelect = (val: string) => {
	// 	setCountry({ ...country, region: val });
	// };

	// console.log(country);

	return (
		<div>
			<Typography sx={{ mb: 3 }} variant="h6">
				Billing details
			</Typography>
			<div>
				<Grid container spacing={{ xs: 0, sm: 2, md: 5 }}>
					<Grid item xs={12} sm={6}>
						<Box component="div" sx={{ my: 1.9 }}>
							<Label>First name *</Label>
							<TextField required fullWidth />
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box component="div" sx={{ my: 1.9 }}>
							<Label>Last name *</Label>
							<TextField required fullWidth />
						</Box>
					</Grid>
				</Grid>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Email address *</Label>
					<TextField type="email" required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Password *</Label>
					<TextField type="password" required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Phone *</Label>
					<TextField type="tel" inputMode="numeric" required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Country / Region *</Label>
					{/* <TextField required fullWidth /> */}
					{/* <CountryDropdown
						style={{ border: "1px solid #d6d4d4", height: "47.38px", color: "#939393" }}
						classes="country_dropdown"
						value={country.country}
						onChange={(val) => handleCountrySelect(val)}
					/> */}

					<Autocomplete
						id="country-select-demo"
						// sx={{ width: 300 }}
						options={COUNTRIES}
						autoHighlight
						getOptionLabel={(option) => option.name}
						renderOption={(props, option) => (
							<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
								<img
									loading="lazy"
									width="20"
									src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
									srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
									alt=""
								/>
								{/* {option.name} ({option.code}) +{option.mobileCode} */}
								{option.name}
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								// label="Choose a country"
								required
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password", // disable autocomplete and autofill
								}}
							/>
						)}
					/>
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Street address *</Label>
					<TextField required fullWidth placeholder="House number and street name" />
					<TextField sx={{ my: 1.9 }} fullWidth placeholder="Apartment, suit, unit, etc. (optional)" />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Town / City *</Label>
					<TextField required fullWidth placeholder="House number and street name" />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>State *</Label>
					<TextField required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>ZIP *</Label>
					<TextField required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Company name (optional)</Label>
					<TextField fullWidth />
				</Box>
				<Typography sx={{ my: 3 }} variant="h6" fontFamily="Poppins">
					Shipping Details
				</Typography>
				<FormControlLabel
					sx={{ "& .MuiTypography-root": { fontSize: 10 } }}
					control={<Checkbox size="small" />}
					label="Ship to a different address?"
				/>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Order notes (optional)</Label>
					<TextField fullWidth multiline />
				</Box>
			</div>
		</div>
	);
};

export default Billingdetails;
