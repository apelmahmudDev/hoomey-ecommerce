import { Box, Typography, Button } from "@mui/material";
import EmailLayout from "../common/layout";
import { Link } from "../../ui";

const NewsletterEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					<strong>Nice to meet you! 👋</strong>
				</Typography>
				<Typography sx={{ my: 2.5 }}>
					Hi <strong>Jhon Doe</strong> ,
				</Typography>
				<Typography sx={{ mt: 2 }}>
					Thank you for believing in our dream! You Signed Up with our <strong>Newsletter</strong>. Our
					mission is to match our customers with the right products. Start exploring with us!
				</Typography>
				<Box sx={{ textAlign: "center" }}>
					<Button
						size="large"
						variant="contained"
						sx={{ my: 2.5, minWidth: 228, minHeight: 56, fontSize: 16, fontWeight: 500 }}
					>
						Let’s go
					</Button>
				</Box>
				<Typography textAlign="center" variant="body2" color="text.secondary">
					If you did not sign up for this account, you can ignore this email.
				</Typography>
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

export default NewsletterEmail;
