import { FC, useState } from "react";
import Image from "next/image";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { IMAGES } from "../../../uiElements";
import Logo from "../../icons/Logo";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIcon } from "../../../uiElements/icons";

const NewsLetterPopup: FC = () => {
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
			sx={{ "& .MuiPaper-root": { borderRadius: 0, maxWidth: 720 } }}
		>
			<DialogContent sx={{ p: 0 }}>
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

				<Box sx={{ display: "flex" }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "50%",
							position: "relative",
						}}
					>
						<Image src={IMAGES.PopupImg} alt="image" />
						<Box sx={{ position: "absolute" }}>
							<Logo />
						</Box>
					</Box>
					<Box
						sx={{
							width: "50%",
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							p: 3,
						}}
					>
						<Typography
							fontFamily="Poppins"
							variant="h4"
							fontWeight="bold"
							textTransform="uppercase"
							letterSpacing="0.1em"
						>
							Newsletter
						</Typography>
						<Typography variant="body2" fontSize={12} sx={{ my: 5 }}>
							Signup here to get the latest news, updates and special offers deliverd directly to your
							inbox
						</Typography>

						<Box component="form" autoComplete="off">
							<TextField placeholder="E-mail address" size="small" fullWidth required />
							<Button
								variant="contained"
								color="secondary"
								type="submit"
								fullWidth
								sx={{
									fontFamily: "Oswald",
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									borderRadius: 0,
									fontWeight: 400,
									fontSize: 12,
									mt: 2.5,
								}}
							>
								Register
							</Button>
						</Box>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default NewsLetterPopup;
