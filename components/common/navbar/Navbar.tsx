import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Box, ListItemIcon } from "@mui/material";
import { paperPropsStyles, useStyles } from "./styled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import CartDetails from "./CartDetails";
import CartButton from "../../ui/CartButton";
import { DarkBagSvg, DarkPersonSvg, NavLogoSvg, OpenSvg, TrackSvg } from "../../icons";
import Link from "../../ui/Link";

// import Tooltip from "@mui/material/Tooltip";

// select
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// icons
import { FavoriteBorderIcon, PersonOutlineIcon, SearchIcon } from "../../../uiElements/icons";
import AppDrawer from "../AppDrawer";
import HoverMenu from "./HoverMenu";
import SearchDropdwon from "../SearchDropdwon";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import TrackOrder from "../TrackOrder";

const menuItems = [
	{ currency: "USD", value: 1 },
	{ currency: "SAR", value: 2 },
	{ currency: "CAD", value: 3 },
	{ currency: "AUD", value: 4 },
	{ currency: "GBP", value: 5 },
	{ currency: "EUR", value: 6 },
	{ currency: "JPY", value: 7 },
];
const pages = [
	{ name: "Women", link: "/women" },
	{ name: "Kids", link: "/kids" },
];
// const settings = ["Profile", "Account"];

const Navbar: FC = () => {
	const classes = useStyles();

	const router = useRouter();

	const [currency, setCurrency] = useState("1");
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
	const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUserDropdown, setAnchorElUserDropdown] = useState<null | HTMLElement>(null);
	// const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
	// 	setAnchorElUser(event.currentTarget);
	// };

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	// const handleCloseUserMenu = () => {
	// 	setAnchorElUser(null);
	// };

	const handleCurrencyChange = (event: SelectChangeEvent) => {
		setCurrency(event.target.value as string);
	};

	// cart drawer view
	const toggleCartDrawer = (open: boolean) => {
		setIsCartDrawerOpen(open);
	};

	// handle search
	const handleSearchClose = () => {
		setIsOpenSearch(false);
	};
	const handleSearchToggle = () => {
		setIsOpenSearch(!isOpenSearch);
	};

	// handle user dropdown
	const isUserDropdownOpen = Boolean(anchorElUserDropdown);

	const handleUserDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUserDropdown(event.currentTarget);
	};

	const handleUserDropdownClose = () => {
		setAnchorElUserDropdown(null);
	};

	const handleTogglePopup = (boolean: boolean) => {
		setIsTrackOrderOpen(boolean);
	};

	return (
		<>
			<AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white", color: "#727376" }}>
				<Container maxWidth="lg">
					<Toolbar disableGutters>
						{/* menu for small device */}
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<Link href={page.link} key={page.name}>
										<MenuItem onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page.name}</Typography>
										</MenuItem>
									</Link>
								))}
							</Menu>
						</Box>

						{/* menu for large device */}
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{/* hover menu*/}
							<Box component="span" className={classes.dropdown}>
								<Button
									sx={{
										fontFamily: "Euclid Circular A",
										color: "#727376",
										my: 2,
										display: "block",
									}}
								>
									Men
								</Button>
								<Box className="dropdownContent">
									<HoverMenu />
								</Box>
							</Box>

							{pages.map((page) => (
								<Link href={page.link} key={page.name}>
									<Button
										onClick={handleCloseNavMenu}
										sx={{
											fontFamily: "Euclid Circular A",
											color: "#727376",
											my: 2,
											display: "block",
										}}
									>
										{page.name}
									</Button>
								</Link>
							))}
						</Box>

						{/* logo */}
						<Box sx={{ mr: 2, display: "flex", flexGrow: 1 }}>
							<Link href="/">
								<NavLogoSvg />
							</Link>
						</Box>

						{/* right side menu */}
						<Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
							<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
								<IconButton onClick={handleSearchToggle} color="primary" size="small">
									<SearchIcon />
								</IconButton>

								<IconButton
									onClick={handleUserDropdownClick}
									color="primary"
									size="small"
									aria-controls={isUserDropdownOpen ? "settings-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={isUserDropdownOpen ? "true" : undefined}
								>
									<PersonOutlineIcon />
								</IconButton>

								{/* user dropdown menu */}
								<Menu
									anchorEl={anchorElUserDropdown}
									id="settings-menu"
									open={isUserDropdownOpen}
									onClose={handleUserDropdownClose}
									PaperProps={{
										elevation: 0,
										sx: { ...paperPropsStyles },
									}}
									transformOrigin={{
										horizontal: "right",
										vertical: "top",
									}}
									anchorOrigin={{
										horizontal: "right",
										vertical: "bottom",
									}}
								>
									<MenuItem>
										<Link href={ROUTING_TREE.ACCOUNT_SETTINGS.ROOT}>
											<ListItemIcon>
												<DarkPersonSvg />
											</ListItemIcon>
											My Profile
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											href={
												ROUTING_TREE.ACCOUNT_SETTINGS.ROOT +
												ROUTING_TREE.ACCOUNT_SETTINGS.MY_ORDERS
											}
										>
											<ListItemIcon>
												<DarkBagSvg />
											</ListItemIcon>
											My Orders
										</Link>
									</MenuItem>
									<MenuItem onClick={() => handleTogglePopup(true)}>
										<ListItemIcon>
											<TrackSvg />
										</ListItemIcon>
										Track Order
									</MenuItem>
									<MenuItem>
										<ListItemIcon>
											<OpenSvg />
										</ListItemIcon>
										Sign Out
									</MenuItem>
								</Menu>

								<IconButton
									onClick={() => router.push(ROUTING_TREE.FAVOURITES)}
									color="primary"
									size="small"
								>
									<FavoriteBorderIcon />
								</IconButton>

								{/* currency - dropdown */}
								<Box sx={{ minWidth: 90 }}>
									<FormControl className={classes.currencySelect} fullWidth size="small">
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={currency}
											onChange={handleCurrencyChange}
										>
											{menuItems.map((item) => (
												<MenuItem
													key={item.value}
													sx={{ fontFamily: "Euclid Circular A" }}
													value={item.value}
												>
													{item.currency}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>
								<CartButton badgeContent={1} onClick={() => toggleCartDrawer(true)} />
							</Box>

							{/* settings for small device */}
							{/* <Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu> */}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar />

			{/* card details - drawer */}
			<AppDrawer isDrawerOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer}>
				<CartDetails />
			</AppDrawer>

			{/* search dropdown - section */}
			<Box
				sx={{
					"& .MuiBackdrop-root": {
						width: "100%",
						pt: 10,
						alignItems: "flex-start",
					},
				}}
			>
				<Dialog
					maxWidth="lg"
					sx={{
						"& .MuiDialog-container": { pt: 10, alignItems: "flex-start" },
						"& .MuiPaper-root": { width: "95%", boxShadow: 0 },
					}}
					open={isOpenSearch}
					onClose={handleSearchClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<SearchDropdwon />
				</Dialog>
			</Box>
			{/* track order - popup */}
			<TrackOrder isOpen={isTrackOrderOpen} handleToggle={handleTogglePopup} />
		</>
	);
};

export default Navbar;
