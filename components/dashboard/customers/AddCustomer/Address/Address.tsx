import { CardContent, Typography, Box, Grid, Select, MenuItem, SelectChangeEvent, InputAdornment } from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDownIcon } from "../../../../../uiElements/icons";
import { ArabicFlagSvg } from "../../../../icons";
import UsaFlag from "../../../../icons/UsaFlag";
import {
	SelectFormControl,
	StyledCard,
	StyledLabel,
	StyledTextBox,
	StyledTextField,
} from "../../../components/styledComponents";

const Address = () => {
	const [language, setLanguage] = useState("10");

	const handleChange = (event: SelectChangeEvent) => {
		setLanguage(event.target.value as string);
	};
	return (
		<StyledCard>
			<CardContent>
				<Box textAlign="center">
					<Typography gutterBottom fontWeight="medium" fontSize={18}>
						Address
					</Typography>
					<Typography color="text.secondary" variant="body2">
						The primary address of this customer
					</Typography>
				</Box>

				{/* form input */}
				<StyledTextBox>
					<StyledLabel fw="500">Country/Region</StyledLabel>
					<StyledTextField size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">First Name</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">Last Name</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Company</StyledLabel>
					<StyledTextField size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Address</StyledLabel>
					<StyledTextField multiline size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel fw="500">Apartment, suite, etc</StyledLabel>
					<StyledTextField multiline size="small" fullWidth />
				</StyledTextBox>

				<StyledTextBox>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">City</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fw="500">Postal Code</StyledLabel>
							<StyledTextField size="small" fullWidth />
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledLabel fw="500">Phone Number</StyledLabel>
				<Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
					<Box sx={{ flex: 1 }} component="div">
						<StyledTextField
							size="small"
							fullWidth
							InputProps={{
								startAdornment: <InputAdornment position="start">+61</InputAdornment>,
							}}
						/>
					</Box>
					<div>
						<SelectFormControl
							//  className={classes.languageSelect}
							size="small"
						>
							<Select
								IconComponent={KeyboardArrowDownIcon}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={language}
								onChange={handleChange}
								// startAdornment={
								// 	<InputAdornment position="start">
								// 		<Image src={Flag} height={26} width={36} />
								// 	</InputAdornment>
								// }
							>
								<MenuItem
									//  className={classes.menuItem}
									value={10}
								>
									<UsaFlag />
									USA
								</MenuItem>
								<MenuItem
									//  className={classes.menuItem}
									value={20}
								>
									<ArabicFlagSvg />
									Arab
								</MenuItem>
							</Select>
						</SelectFormControl>
					</div>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Address;
