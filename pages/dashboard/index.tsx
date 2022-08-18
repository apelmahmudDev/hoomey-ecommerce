import { NextPage } from "next";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { AppAvatar, AppDivider, Search, SearchIconWrapper, StyledInputBase } from "../../components/styledComponents";

// icons
import {
	BarSvg,
	ReviewsSvg,
	AppIconSvg,
	SettingsSvg,
	CustomersSvg,
	CheckCartSvg,
	DeliveryCarSvg,
	DashboardBagSvg,
	DashboardMenuSvg,
	NotificationsSvg,
	NavNotificationsSvg,
} from "../../components/icons";

import { Link } from "../../components/ui";
import { IMAGES } from "../../uiElements";
import { Dashboard as DashboardComp } from "../../components/dashboard";

const drawerWidth = 100;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const drawerItem = [
	{ icon: <DashboardMenuSvg />, text: "Dashboard", link: "/dashboard" },
	{ icon: <CheckCartSvg />, text: "Orders", link: "/orders" },
	{ icon: <DashboardBagSvg />, text: "Products", link: "/products" },
	{ icon: <CustomersSvg />, text: "Customers", link: "/customers" },
	{ icon: <ReviewsSvg />, text: "Reviews", link: "/reviews" },
	{ icon: <DeliveryCarSvg />, text: "Shipping", link: "/shipping" },
	{ icon: <BarSvg />, text: "Analytics", link: "/analytics" },
	{ icon: <NotificationsSvg />, text: "Notification", link: "/notification" },
	{ icon: <SettingsSvg />, text: "Settings", link: "/settings" },
];

const Dashboard: NextPage = (props: Props) => {
	const { window } = props;
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setIsMobileOpen(!isMobileOpen);
	};

	const drawer = (
		<div>
			{/* <Toolbar /> */}
			<Box sx={{ textAlign: "center", py: 0.8 }}>
				<Link href="/">
					<AppIconSvg sx={{ fontSize: 45 }} />
				</Link>
			</Box>
			<AppDivider sx={{ mb: 1.25, opacity: 0.5 }} />
			<List>
				{drawerItem.map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton
							sx={{
								px: 1,
								width: "inherit",
								flexDirection: "column",
								"&:hover": { bgcolor: "primary.main", color: "text.primary" },
							}}
						>
							<ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
							<ListItemText sx={{ "& > span": { fontSize: 14, fontWeight: 500 } }} primary={item.text} />
						</ListItemButton>
					</ListItem>
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
										<SearchIcon color="primary" />
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
					<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
						<Toolbar />
						<DashboardComp />
					</Box>
				</Box>
			</>
		</div>
	);
};

export default Dashboard;
