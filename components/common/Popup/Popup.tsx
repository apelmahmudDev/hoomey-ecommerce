import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { ReactNode } from "react";
import { CloseIcon } from "../../../uiElements/icons";

export interface DialogCloseProps {
	onClick: () => void;
}

const DialogClose = (props: DialogCloseProps) => {
	const { onClick } = props;
	return (
		<DialogTitle sx={{ m: 0, p: 2 }}>
			{onClick ? (
				<IconButton
					aria-label="close"
					onClick={onClick}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

const Popup = ({
	children,
	isOpen,
	isNeedCloseBtn,
	handleTogglePopup,
}: {
	children: ReactNode;
	isOpen: boolean;
	isNeedCloseBtn?: boolean;
	handleTogglePopup: (toggle: boolean) => void;
}) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 5, maxWidth: 700 } }}
		>
			{isNeedCloseBtn && <DialogClose onClick={() => handleTogglePopup(false)} />}

			{/* you can pass children with wrap following component */}

			{/* <DialogContent></DialogContent>
			<DialogActions></DialogActions> */}

			{children}
		</Dialog>
	);
};

export default Popup;
