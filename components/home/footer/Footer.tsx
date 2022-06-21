import { FC } from "react";
import Link from "next/link";
import { Box, Container, Divider, Grid, List, ListItem, Typography } from "@mui/material";

// icons
import {
	FacebookSvg,
	InstagramSvg,
	IpaySvg,
	LogoSvg,
	MasterCardSvg,
	PinterestSvg,
	PSvg,
	VisaSvg,
	WhatsappSvg,
} from "../../icons";

const Footer: FC = () => {
	return (
		<Box mt={8} sx={{ background: "#292929", py: 2, color: "#fff" }}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<LogoSvg />
						<Typography sx={{ mt: 2, fontSize: 12 }}>
							We're working to turn our passion into a booming online store. We hope you enjoy our
							products as much as we enjoy offering them to you. If you have any questions or comments,
							please don't hesitate to contact us.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h6">Useful Links</Typography>
						<Box
							sx={{
								mt: 3,
								display: "flex",
								flexWrap: "wrap",
								gap: 2,
								"& > a": {
									fontSize: 12,
									whiteSpace: "nowrap",
								},
							}}
						>
							<Link href="/about">
								<a>About Hoomey</a>
							</Link>

							<Link href="/faqs">
								<a>FAQs</a>
							</Link>

							<Link href="/returns">
								<a>Returns</a>
							</Link>

							<Link href="/contact">
								<a>Contact us</a>
							</Link>

							<Link href="/blogs">
								<a>Blogs</a>
							</Link>

							<Link href="/privacy">
								<a>Privacy Policy</a>
							</Link>

							<Link href="/terms">
								<a>Terms of Service</a>
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography variant="h6" sx={{ mb: 1 }}>
							Language
						</Typography>
						<Typography variant="h5" sx={{ mt: 1 }}>
							Logo
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Divider sx={{ mt: 4, mb: 2, backgroundColor: "#DCDCDC" }} />
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Box sx={{ display: "flex", gap: 3 }}>
							<Link href="/">
								<a>
									<FacebookSvg />
								</a>
							</Link>
							<Link href="/">
								<a>
									<PinterestSvg />
								</a>
							</Link>
							<Link href="/">
								<a>
									<InstagramSvg />
								</a>
							</Link>
							<Link href="/">
								<a>
									<WhatsappSvg />
								</a>
							</Link>
						</Box>
						<Typography sx={{ mt: 1.5 }}>&copy; {new Date().getFullYear()} Hoomey.</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ display: "flex", gap: 1 }}>
							<VisaSvg />
							<MasterCardSvg />
							<IpaySvg />
							<PSvg />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
