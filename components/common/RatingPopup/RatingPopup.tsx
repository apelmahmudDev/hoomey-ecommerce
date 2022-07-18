import { FC, useState } from "react";
import { Box, Divider, Rating, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../ui";

const steps = ["Rating", "Product image", "Comment", "Your Details"];

const styles = {
	my: 1.25,
	height: 50,
	width: "100%",
	maxWidth: 400,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "1px solid #292929",
};

const RatingPopup: FC = () => {
	const [value, setValue] = useState<number | null>(5);
	const [isRatingOpen, setIsRatingOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsRatingOpen(boolean);
	};

	return (
		<Dialog
			open={isRatingOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { sm: 620, md: 720 } } }}
		>
			<DialogContent sx={{ p: 2 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />

				<Box>
					<Typography fontWeight={600} variant="h6" textAlign="center">
						How would you rate this item?
					</Typography>
					<Divider sx={{ my: 3, bgcolor: "1px solid #C4C4C4" }} />

					{/* stepper */}
					<Box sx={{ width: "100%" }}>
						<Stepper activeStep={1} alternativeLabel>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel sx={{ whiteSpace: "nowrap" }}>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					</Box>

					{/* ratings */}
					<Box mt={5} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<Box sx={{ ...styles }}>
							<Rating
								name="simple-controlled"
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							/>
						</Box>
						<Box sx={{ ...styles }}>
							<Rating name="simple-controlled" value={4} />
						</Box>
						<Box sx={{ ...styles }}>
							<Rating name="simple-controlled" value={3} />
						</Box>
						<Box sx={{ ...styles }}>
							<Rating name="simple-controlled" value={2} />
						</Box>
						<Box sx={{ ...styles }}>
							<Rating name="simple-controlled" value={1} />
						</Box>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default RatingPopup;
