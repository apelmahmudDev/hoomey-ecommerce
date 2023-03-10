import { ReactNode, useEffect } from "react";
import { Box, Button, InputAdornment } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../../ui";
import { MailFillSvg } from "../../../icons";
import { Label } from "../../../styledComponents";
import { AuthDevider, AuthSubtitle, AuthTitle, StyedTextField, StyledBox } from "../styledComponents";
import { IPopup } from "../../../../types/popup";
import { useRequestTResetPasswordMutation } from "../../../../store/api/authApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { regex } from "../../../../utils/validations/regex";
import { useAppDispatch } from "../../../../store";
import { useToastify } from "../../../../store/slices/toastifySlice";

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const PasswordChange = ({ isOpen, handleTogglePopup }: IPopup) => {
	const dispatch = useAppDispatch();
	const [requestResetPassword, { data, isError }] = useRequestTResetPasswordMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ email: string }>();

	const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
		requestResetPassword({ email });
	};

	//  notifications
	useEffect(() => {
		if (isError) dispatch(useToastify({ desc: "Something went wrong", severity: "error" }));
		if (data?.error) dispatch(useToastify({ desc: data.error, severity: "error" }));
		if (data?.msg) dispatch(useToastify({ desc: data.msg, severity: "success" }));
	}, [dispatch, isError, data]);

	return (
		<Dialog
			open={isOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />
				<Box>
					<AuthTitle>Forget Password</AuthTitle>
					<AuthDevider />
					<AuthSubtitle>Please enter your email address</AuthSubtitle>

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						<StyledBox>
							<Label fontSize={18}>Email Address *</Label>
							<StyedTextField
								required
								type="email"
								error={errors.email ? true : false}
								{...register("email", { required: true, pattern: regex.email })}
								helperText={errors.email && "Enter a valid email address"}
								InputProps={{ startAdornment: <FieldIcon icon={<MailFillSvg />} /> }}
							/>
						</StyledBox>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Confirm
						</Button>
						<AuthSubtitle sx={{ mt: 3, textAlign: "center" }}>
							We will send you the mail with your password reset link
						</AuthSubtitle>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default PasswordChange;
