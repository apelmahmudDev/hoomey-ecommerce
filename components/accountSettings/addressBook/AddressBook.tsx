import {
	Box,
	Button,
	Grid,
	Typography,
	Checkbox,
	FormControlLabel,
	IconButton,
	DialogContent,
	TextField,
	DialogActions,
	FormControl,
	SelectChangeEvent,
	Select,
	MenuItem,
} from "@mui/material";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { AddressBookSvg, EditSvg, DeleteSvg } from "../../icons";
import { Popup } from "../../common";
import { useState } from "react";
import { PopupDivider } from "../../styledComponents";
import EditAddress from "./EditAddress";

const AddressBook = () => {
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [isAddNewOpen, setIsAddNewOpen] = useState(false);
	const [country, setCountry] = useState("United States");

	const handleAddNewTogglePopup = (boolean: boolean) => {
		setIsAddNewOpen(boolean);
	};

	const handleEditTogglePopup = (boolean: boolean) => {
		setIsEditOpen(boolean);
	};

	// handle country change
	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
				<TitleFlexStack>
					<AddressBookSvg />
					<TitleText>Address Book</TitleText>
				</TitleFlexStack>
				<Button onClick={() => handleAddNewTogglePopup(true)} color="secondary" variant="contained">
					Add New
				</Button>
			</Box>

			<SettingsDivider />

			<Grid container spacing={2.5}>
				{/* default address */}
				<Grid item xs={12} md={6}>
					<Box sx={{ position: "relative", bgcolor: "#FFF9F0", border: "1px solid #D9D9D9", p: 2.5 }}>
						<Box sx={{ maxWidth: "75%" }}>
							<Typography fontWeight="medium" lineHeight="30px">
								2442 N Virginia Av, Chicago, IL 60610 United States
							</Typography>
							<FormControlLabel
								sx={{ mt: 2 }}
								control={<Checkbox defaultChecked />}
								label="Default Address"
							/>
						</Box>
						{/* action on right corner */}
						<Box sx={{ position: "absolute", top: 20, right: 20 }}>
							<Box>
								<IconButton onClick={() => handleEditTogglePopup(true)}>
									<EditSvg />
								</IconButton>
							</Box>
							<Box>
								<IconButton>
									<DeleteSvg />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<Box sx={{ position: "relative", bgcolor: "common.white", border: "1px solid #D9D9D9", p: 2.5 }}>
						<Box sx={{ maxWidth: "75%" }}>
							<Typography fontWeight="medium" lineHeight="30px">
								2442 N Virginia Av, Chicago, IL 60610 United States
							</Typography>
							<FormControlLabel sx={{ mt: 2 }} control={<Checkbox />} label="Default Address" />
						</Box>
						{/* action on right corner */}
						<Box sx={{ position: "absolute", top: 20, right: 20 }}>
							<Box>
								<IconButton onClick={() => handleEditTogglePopup(true)}>
									<EditSvg />
								</IconButton>
							</Box>
							<Box>
								<IconButton>
									<DeleteSvg />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>

			{/* Popup -> add new */}
			<Popup isOpen={isAddNewOpen} handleTogglePopup={handleAddNewTogglePopup}>
				<DialogContent>
					<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
						New Address
					</Typography>
					<PopupDivider />

					<Box
						component="form"
						sx={{
							"& .MuiTextField-root": { bgcolor: "#fff" },
						}}
					>
						<Box my={2}>
							<Label>Country / Region</Label>
							<FormControl fullWidth>
								<Select
									size="small"
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={country}
									onChange={handleCountryChange}
								>
									<MenuItem value={10}>United States</MenuItem>
									<MenuItem value={20}>North South</MenuItem>
									<MenuItem value={30}>India</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box my={2}>
							<Label>Street Address</Label>
							<TextField
								size="small"
								sx={{ mb: 2 }}
								required
								placeholder="House number and street name"
								fullWidth
							/>
							<TextField
								size="small"
								required
								placeholder="Apartment, suit, unit, etc (optional)"
								fullWidth
							/>
						</Box>

						<Box my={2}>
							<Label>Town / City</Label>
							<TextField size="small" required placeholder="City or Town Name" fullWidth />
						</Box>
						<Box>
							<Label>State</Label>
							<TextField size="small" required placeholder="State name" fullWidth />
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button
						fullWidth
						color="secondary"
						variant="contained"
						onClick={() => handleAddNewTogglePopup(false)}
					>
						Cancel
					</Button>
					<Button
						fullWidth
						color="secondary"
						variant="outlined"
						onClick={() => handleAddNewTogglePopup(false)}
					>
						Save Changes
					</Button>
				</DialogActions>
			</Popup>

			{/* Popup -> edit */}
			<Popup isOpen={isEditOpen} handleTogglePopup={handleEditTogglePopup}>
				<EditAddress handleTogglePopup={handleEditTogglePopup} />
			</Popup>
		</Box>
	);
};

export default AddressBook;
