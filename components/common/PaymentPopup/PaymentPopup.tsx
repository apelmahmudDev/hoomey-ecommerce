import { FC, useState } from "react";
import { Box, Button, Typography, DialogActions, FormControl, TextField, InputAdornment } from "@mui/material";

import DialogContent from "@mui/material/DialogContent";
import { Label, PopupDivider } from "../../styledComponents";
import { MasterCardSvg, VisaSvg } from "../../icons";
import SecuredByNorton from "../SecuredByNorton";
import PaymentSystemView from "../PaymentSystemView";
import Popup from "../Popup";

const PaymentPopup: FC = () => {
	const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

	const handleTogglePopup = (boolean: boolean) => {
		setIsPaymentMethodOpen(boolean);
	};

	return (
		<Popup isOpen={isPaymentMethodOpen} handleTogglePopup={handleTogglePopup}>
			<DialogContent>
				<Typography textAlign="center" variant="h6" fontFamily="Poppins">
					New Payment Method
				</Typography>
				<PopupDivider />

				{/* payment way */}
				<Box my={2.5}>
					<Label>Card number</Label>
					<FormControl fullWidth>
						<TextField
							required
							size="small"
							inputMode="numeric"
							sx={{ borderRadius: 0 }}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Box component="span" sx={{ display: "flex", gap: 0.5 }}>
											<VisaSvg />
											<MasterCardSvg />
										</Box>
									</InputAdornment>
								),
							}}
						/>
					</FormControl>
				</Box>
				<Box my={2.5}>
					<Label>Exp. Date</Label>
					<Box sx={{ display: "flex", gap: 1.3 }}>
						<TextField required size="small" placeholder="MM" />
						<TextField required size="small" placeholder="YYYY" />
						<TextField required size="small" placeholder="CVV" />
					</Box>
				</Box>

				<Box sx={{ maxWidth: 350, mx: "auto" }}>
					<SecuredByNorton />
					<PaymentSystemView />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button
					color="secondary"
					variant="contained"
					onClick={() => handleTogglePopup(false)}
					fullWidth
					size="large"
				>
					Cancel
				</Button>
				<Button
					color="secondary"
					variant="outlined"
					onClick={() => handleTogglePopup(false)}
					fullWidth
					size="large"
				>
					Save Changes
				</Button>
			</DialogActions>
		</Popup>
	);
};

export default PaymentPopup;
