import { Box, Button, TextField } from "@mui/material";

const Comment = () => {
	return (
		<>
			<Box component="form" autoComplete="off">
				<TextField multiline rows={4} required fullWidth placeholder="Share your experience" />

				<Box sx={{ width: "100%" }}>
					<Button
						sx={{ mt: 2.5, minWidth: { xs: "auto", md: 400 } }}
						variant="contained"
						color="secondary"
						type="submit"
					>
						Next
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Comment;
