import { FC, useState } from "react";
import { Box, Button, Divider, IconButton, Typography, Switch, DialogActions } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIcon } from "../../../uiElements/icons";
import { COLORS } from "../../../theme/colors";

const label = { inputProps: { "aria-label": "Switch demo" } };

const CookiePopup: FC = () => {
	const [isNewsLetterOpen, setIsNewsLetterOpen] = useState(true);

	const handleClose = () => {
		setIsNewsLetterOpen(false);
	};

	return (
		<Dialog
			open={isNewsLetterOpen}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, maxWidth: 700 } }}
		>
			<DialogContent>
				<IconButton
					size="small"
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
					}}
				>
					<CloseIcon />
				</IconButton>

				<Typography textAlign="center" variant="h6" fontFamily="Poppins">
					Manage Cookie Consent
				</Typography>
				<Divider sx={{ bgcolor: "#000000", my: 2.5 }} />

				<Typography textAlign="center" fontWeight="medium" sx={{ color: COLORS.GRANITE_GREY }}>
					We use cookies to optimize our website and our services. For our policies, please visit our{" "}
					<Button>Privacy Policy</Button> or <Button>Terms of Service</Button> page.
				</Typography>

				<Box sx={{ my: 2.25, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="h6">Functional Cookies</Typography>
					<Switch {...label} defaultChecked />
				</Box>
				<Box sx={{ my: 2.25, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="h6">Marketing Cookies</Typography>
					<Switch {...label} />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button color="secondary" variant="contained" onClick={handleClose} fullWidth size="large">
					Accept All Cookies
				</Button>
				<Button color="secondary" variant="outlined" onClick={handleClose} fullWidth size="large">
					Save Preferences
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CookiePopup;
