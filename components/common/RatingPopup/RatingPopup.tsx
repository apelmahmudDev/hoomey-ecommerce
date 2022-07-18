import { FC, useState } from "react";
import { Box, DialogActions, Divider, Typography, Button } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../ui";
import Ratings from "./Ratings";
import ProductImage from "./ProductImage";
import Comment from "./Comment";
import Details from "./Details";

const steps = ["Rating", "Product image", "Comment", "Your Details"];

const RatingTitle = () => {
	return (
		<Typography fontWeight={600} variant="h6" textAlign="center">
			How would you rate this item?
		</Typography>
	);
};
const ProductImgTitle = () => {
	return (
		<Typography fontWeight={600} variant="h6" textAlign="center">
			Show it off
		</Typography>
	);
};
const CommentTitle = () => {
	return (
		<Typography fontWeight={600} variant="h6" textAlign="center">
			Tell us more!
		</Typography>
	);
};
const DetailsTitle = () => {
	return (
		<Typography fontWeight={600} variant="h6" textAlign="center">
			About you
		</Typography>
	);
};

const RatingPopup: FC = () => {
	const [activeStep, setActiveStep] = useState(4);
	const [isRatingOpen, setIsRatingOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsRatingOpen(boolean);
	};

	const handleActiveStepBack = () => {
		switch (activeStep) {
			case 2:
				setActiveStep(1);
				break;
			case 3:
				setActiveStep(2);
				break;
			case 4:
				setActiveStep(3);
				break;
			default:
				break;
		}
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
					{/* title of rating popup */}
					{activeStep <= 1 && <RatingTitle />}
					{activeStep === 2 && <ProductImgTitle />}
					{activeStep === 3 && <CommentTitle />}
					{activeStep === 4 && <DetailsTitle />}

					<Divider sx={{ my: 3, bgcolor: "1px solid #C4C4C4" }} />

					{/* stepper */}
					<Box sx={{ width: "100%" }}>
						<Stepper activeStep={activeStep} alternativeLabel>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel sx={{ whiteSpace: "nowrap" }}>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					</Box>

					{/*body content rating  popup */}
					<Box mt={5} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						{activeStep <= 1 && <Ratings />}
						{activeStep === 2 && <ProductImage />}
						{activeStep === 3 && <Comment />}
						{activeStep === 4 && <Details />}
					</Box>
				</Box>
			</DialogContent>
			{activeStep <= 1 ? null : (
				<DialogActions sx={{ justifyContent: "space-between" }}>
					<Button color="secondary" onClick={handleActiveStepBack}>
						Back
					</Button>
					<Button color="secondary">Skip</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};

export default RatingPopup;
