import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { FC, useState } from "react";
import { AppAvatar, AppDivider, Search, SearchIconWrapper, StyledInputBase } from "../components/styledComponents";

// icons
import {
	AppIconSvg,
	BarSvg,
	CheckCartSvg,
	CustomersSvg,
	DashboardBagSvg,
	DashboardMenuSvg,
	DeliveryCarSvg,
	GraySearchIcon,
	NavNotificationsSvg,
	NotificationsSvg,
	ReviewsSvg,
	SettingsSvg,
} from "../components/icons";

import { Link } from "../components/ui";
import { AdminLayoutProps } from "../types/page";
import { IMAGES } from "../uiElements";

const drawerWidth = 120;

const drawerItem = [
	{ icon: <DashboardMenuSvg />, text: "Dashboard", link: "/dashboard" },
	{ icon: <CheckCartSvg />, text: "Orders", link: "/dashboard/order" },
	{ icon: <DashboardBagSvg />, text: "Products", link: "/dashboard/products" },
	{ icon: <CustomersSvg />, text: "Customers", link: "/dashboard/customers" },
	{ icon: <ReviewsSvg />, text: "Reviews", link: "/dashboard/reviews" },
	{ icon: <DeliveryCarSvg />, text: "Shipping", link: "/dashboard/shipping" },
	{ icon: <BarSvg />, text: "Analytics", link: "/dashboard/analytics" },
	{ icon: <NotificationsSvg />, text: "Notification", link: "/dashboard/notification" },
	{ icon: <SettingsSvg />, text: "Settings", link: "/dashboard/settings" },
];

const AdminLayout: FC<AdminLayoutProps> = ({ children, window }) => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setIsMobileOpen(!isMobileOpen);
	};

	const drawer = (
		<div>
			{/*<Toolbar />*/}
			<Box sx={{ textAlign: "center", py: 0.8 }}>
				<Link href="/">
					<AppIconSvg sx={{ fontSize: 45 }} />
				</Link>
			</Box>
			<AppDivider sx={{ mb: 1.25, opacity: 0.5 }} />
			<List>
				{drawerItem.map((item, index) => (
					<Link href={item.link} key={index}>
						<ListItem disablePadding>
							<ListItemButton
								sx={{
									px: 1,
									width: "inherit",
									flexDirection: "column",
									"&:hover": { bgcolor: "primary.main", color: "text.primary" },
								}}
							>
								<ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
								<ListItemText
									sx={{ "& > span": { fontSize: 14, fontWeight: 500 } }}
									primary={item.text}
								/>
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* content */}

			<>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<AppBar
						position="fixed"
						sx={{
							width: { sm: `calc(100% - ${drawerWidth}px)` },
							boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
							ml: { sm: `${drawerWidth}px` },
							bgcolor: "common.white",
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Toolbar sx={{ flexGrow: 1 }}>
								<IconButton
									edge="start"
									color="inherit"
									aria-label="open drawer"
									onClick={handleDrawerToggle}
									sx={{ mr: 2, display: { sm: "none" } }}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6" sx={{ fontWeight: 400 }} noWrap>
									Hello <strong>John Doe</strong> 👋
								</Typography>
							</Toolbar>

							<Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 4 }}>
								<Search>
									<SearchIconWrapper>
										<GraySearchIcon sx={{ fontSize: 20 }} />
									</SearchIconWrapper>
									<StyledInputBase placeholder="Search" inputProps={{ "aria-label": "search" }} />
								</Search>

								<IconButton aria-label="cart">
									<Badge badgeContent={1} color="error">
										<NavNotificationsSvg />
									</Badge>
								</IconButton>

								<AppAvatar
									src={IMAGES.AvatarImg}
									alt="avatar"
									objectFit="cover"
									height={40}
									width={40}
								/>
							</Box>
						</Box>
					</AppBar>

					<Box
						component="nav"
						sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
						aria-label="mailbox folders"
					>
						{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
						<Drawer
							container={container}
							variant="temporary"
							open={isMobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
							sx={{
								display: { xs: "block", sm: "none" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawerWidth,
									color: "common.white",
									bgcolor: (theme) => theme.palette.secondary.main,
								},
							}}
						>
							{drawer}
						</Drawer>
						<Drawer
							variant="permanent"
							sx={{
								display: { xs: "none", sm: "block" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawerWidth,
									color: "common.white",
									bgcolor: (theme) => theme.palette.secondary.main,
								},
							}}
							open
						>
							{drawer}
						</Drawer>
					</Box>
					<Box
						component="main"
						sx={{ flexGrow: 1, mt: 8, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
					>
						{/* dashboard content changes here*/}
						{children}
					</Box>
				</Box>
			</>
		</div>
	);
};

export default AdminLayout;
