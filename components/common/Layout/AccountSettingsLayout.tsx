import { FC } from "react";
import {
	Box,
	Typography,
	CssBaseline,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Avatar,
	Container,
} from "@mui/material";
import { Link } from "../../ui";

// icons
import {
	AccountSettingsSvg,
	ChangePassSvg,
	AddressBookSvg,
	ColorShoppingBagSvg,
	ColorHeartSvg,
	PaymentMethodsSvg,
} from "../../icons";

const drawerWidth = 340;

const menus = [
	{ link: "/account-settings", name: "Account Settings", icon: <AccountSettingsSvg width={22} height={28} /> },
	{
		link: "/account-settings/change-password",
		name: "Change Password",
		icon: <ChangePassSvg width={22} height={28} />,
	},
	{ link: "/account-settings/address-book", name: "Address Book", icon: <AddressBookSvg width={22} height={28} /> },
	{ link: "/account-settings/my-orders", name: "My Orders", icon: <ColorShoppingBagSvg width={22} height={28} /> },
	{ link: "/account-settings/my-wishlist", name: "My Wishlist", icon: <ColorHeartSvg width={25} height={20} /> },
	{
		link: "/account-settings/payment-methods",
		name: "Payment Methods",
		icon: <PaymentMethodsSvg width={22} height={28} />,
	},
];

const AccountSettingsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
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
					<Box sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
						<Avatar alt="M" />
						<Typography fontWeight="medium">Jhon Doe</Typography>
					</Box>
					<Divider sx={{ margin: "30px 0", background: "#ABABAB" }} />
					<List>
						{menus.map((menu) => (
							<Link key={menu.name} href={menu.link}>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>{menu.icon}</ListItemIcon>
										<ListItemText primary={menu.name} />
									</ListItemButton>
								</ListItem>
							</Link>
						))}
					</List>
				</Box>
				{/* body content */}
				<Box component="main" sx={{ flexGrow: 1, bgcolor: "#FBFBFB", p: 4 }}>
					{children}
					{/* <MyAccount /> */}
					{/* <ChangePassword /> */}
					{/* <AddressBook /> */}
					{/* <MyOrders /> */}
					{/* <MyWishlist /> */}
					{/* <PaymentMethods /> */}
				</Box>
			</Box>
		</Container>
	);
};

export default AccountSettingsLayout;
