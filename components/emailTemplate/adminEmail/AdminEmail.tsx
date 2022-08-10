import { Box, Button, Divider, Typography } from "@mui/material";
import { Link } from "../../ui";
import EmailLayout from "../common/layout";

const AdminEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					Hi <strong>Jhon Doe</strong> 👋
				</Typography>
				<Typography sx={{ mt: 2 }}>
					This mail contains the data of new user who recently signed up on Hoomey. Check the details below.
				</Typography>
				<Divider sx={{ my: 1.5, borderColor: "#EEEEEE" }} />
				<Box my={1} display="flex" alignItems="center" justifyContent="space-between">
					<Typography>Email Address</Typography>
					<Typography>
						<strong>Mariahbetts@abc.com</strong>
					</Typography>
				</Box>
			</Box>
			<Typography component="div" sx={{ mt: 3 }}>
				<Box sx={{ lineHeight: 1, my: -0.5 }}>
					Questions or FAQs? Check out our{" "}
					<Link href="/faqs">
						<Button sx={{ textDecoration: "underline" }}>Frequently Asked Questions.</Button>
					</Link>
				</Box>
				<Box sx={{ lineHeight: 1, my: -0.5 }}>
					In case of any refund or return visit
					<Link href="/return">
						<Button sx={{ textDecoration: "underline" }}>Returns.</Button>
					</Link>
				</Box>
				<Box sx={{ lineHeight: 1, my: -0.5 }}>
					Visit{" "}
					<Link href="/privacy-policy">
						<Button sx={{ textDecoration: "underline" }}>Privacy Policy</Button>
					</Link>{" "}
					and
					<Link href="/terms-of-service">
						<Button sx={{ textDecoration: "underline" }}> Terms of Service</Button>
					</Link>{" "}
					for our policies & terms
				</Box>
			</Typography>
		</EmailLayout>
	);
};

export default AdminEmail;
