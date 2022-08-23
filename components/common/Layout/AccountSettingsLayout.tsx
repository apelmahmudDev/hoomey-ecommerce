import { FC, useState } from "react";
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
	Container,
	IconButton,
	// Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "../../ui";

// icons
import {
	AccountSettingsSvg,
	ChangePassSvg,
	AddressBookSvg,
	ColorShoppingBagSvg,
	ColorHeartSvg,
	PaymentMethodsSvg,
	NortonSvg,
	CameraSvg,
} from "../../icons";
import { IMAGES } from "../../../uiElements";
import { AppAvatar, HoverTooltip } from "../../styledComponents";

// styles

const useStyles = makeStyles((theme) => ({
	listItemRoot: {
		"& .MuiListItemButton-root": {
			paddingLeft: 25,
			paddingRight: 25,
			marginBottom: 10,
			"& .MuiListItemText-root": {
				"& .MuiTypography-root": {
					fontSize: 14,
					fontWeight: 500,
				},
			},
		},
	},

	drawerVisible: {
		height: "100%",
		position: "absolute",
		background: "#fff",
		opacity: 1,
		zIndex: 1,
		transition: "0.3s",
		visibility: "visible",
		transform: "translateY(0)",
		boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
		[theme.breakpoints.down("md")]: {},
	},
	drawerHidden: {
		position: "absolute",
		background: "#fff",
		opacity: 0,
		zIndex: -1,
		transition: "0.3s",
		visibility: "hidden",
		transform: "translateY(-3em)",
		boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
		[theme.breakpoints.down("md")]: {},
	},
}));

const drawerWidth = 250;

const menus = [
	{ link: "/account-settings", name: "Account Settings", icon: <AccountSettingsSvg width={20} height={15} /> },
	{
		link: "/account-settings/change-password",
		name: "Change Password",
		icon: <ChangePassSvg width={20} height={20} />,
	},
	{ link: "/account-settings/address-book", name: "Address Book", icon: <AddressBookSvg width={20} height={20} /> },
	{ link: "/account-settings/my-orders", name: "My Orders", icon: <ColorShoppingBagSvg width={20} height={20} /> },
	{ link: "/account-settings/my-wishlist", name: "My Wishlist", icon: <ColorHeartSvg width={20} height={20} /> },
	{
		link: "/account-settings/payment-methods",
		name: "Payment Methods",
		icon: <PaymentMethodsSvg width={22} height={28} />,
	},
];

const AccountSettingsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	const classes = useStyles();
	const [isDrawerVisible, SetIsDrawerVisible] = useState(true);

	return (
		<Container>
			<Box sx={{ mb: 6, display: "flex", alignItems: "center" }}>
				<Typography sx={{ flexGrow: 1 }} variant="h6" textAlign="center">
					My Account
				</Typography>

				<HoverTooltip title="You are Protected">
					<div>
						<NortonSvg />
					</div>
				</HoverTooltip>
			</Box>

			<Box sx={{ display: "flex", gap: 2.5 }}>
				<CssBaseline />

				<Box
					className={isDrawerVisible ? classes.drawerVisible : classes.drawerHidden}
					sx={{
						// display: { xs: "none", md: "block" },

						bgcolor: "#FBFBFB",
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
						},
					}}
				>
					{/* profile image */}
					<Box sx={{ display: "flex", gap: 2.5, alignItems: "center", padding: "25px 25px 0 25px" }}>
						<Box sx={{ position: "relative" }}>
							<AppAvatar src={IMAGES.AvatarImg} alt="avatar" objectFit="cover" height={60} width={60} />
							<IconButton
								color="primary"
								aria-label="upload picture"
								component="label"
								sx={{
									position: "absolute",
									right: -15,
									bottom: 0,
								}}
							>
								<input hidden accept="image/*" type="file" />
								<CameraSvg />
							</IconButton>
						</Box>
						<div>
							<Typography gutterBottom>Hi</Typography>
							<Typography fontWeight="600">Jhon Doe</Typography>
						</div>
					</Box>
					<Divider sx={{ margin: "30px 0", background: "#ABABAB" }} />
					<List>
						{menus.map((menu) => (
							<Link key={menu.name} href={menu.link}>
								<ListItem disablePadding className={classes.listItemRoot}>
									<ListItemButton>
										<ListItemIcon sx={{ minWidth: 40 }}>{menu.icon}</ListItemIcon>
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

					{/* -------⬇️------- */}
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
