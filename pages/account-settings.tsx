import type { NextPage } from "next";
import Head from "next/head";
import {
	ChangePassword,
	MyAccount,
	AddressBook,
	MyOrders,
	MyWishlist,
	PaymentMethods,
} from "../components/accountSettings";
import { Layout } from "../components/common";

import {
	Box,
	Container,
	Typography,
	CssBaseline,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 340;

const AccountSettings: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Account Settings</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				{/* account & settings */}
				<Container>
					<Typography sx={{ mb: 6 }} variant="h6" textAlign="center">
						My Account
					</Typography>
					<Box sx={{ display: "flex", gap: 2.5 }}>
						<CssBaseline />
						<Box
							sx={{
								bgcolor: "#FBFBFB",
								p: 4,
								width: drawerWidth,
								flexShrink: 0,
								"& .MuiDrawer-paper": {
									width: drawerWidth,
									boxSizing: "border-box",
								},
							}}
						>
							<Divider />
							<List>
								{[
									"Account Settings ",
									"Change Password",
									"Address Book",
									"My Orders",
									"My Wishlist",
									"Payment Methods",
								].map((text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemButton>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Box>
						{/* body content */}
						<Box component="main" sx={{ flexGrow: 1, bgcolor: "#FBFBFB", p: 4 }}>
							{/* <MyAccount /> */}
							{/* <ChangePassword /> */}
							{/* <AddressBook /> */}
							{/* <MyOrders /> */}
							{/* <MyWishlist /> */}
							<PaymentMethods />
						</Box>
					</Box>
				</Container>
			</Layout>
		</div>
	);
};

export default AccountSettings;
