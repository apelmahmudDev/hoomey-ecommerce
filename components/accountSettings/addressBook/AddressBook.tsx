import { Box, Button, Grid, Typography, Checkbox, FormControlLabel, IconButton, Stack } from "@mui/material";
import { SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { AddressBookSvg, EditSvg, DeleteSvg } from "../../icons";

const AddressBook = () => {
	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between" }}>
				<TitleFlexStack>
					<AddressBookSvg />
					<TitleText>Address Book</TitleText>
				</TitleFlexStack>
				<Button color="secondary" variant="contained">
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
								<IconButton>
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
								<IconButton>
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
		</Box>
	);
};

export default AddressBook;
