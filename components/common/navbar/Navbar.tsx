import { FC, useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { useStyles } from "./styled";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLogoSvg } from "../../icons";
import Link from "../../ui/Link";

// select
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const pages = ["Men", "Women", "Kids"];
// const settings = ["Profile", "Account"];

const Navbar: FC = () => {
	const classes = useStyles();

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
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

	const [age, setAge] = useState("10");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
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
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						{/* menu for large device */}
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Link href="/" key={page}>
									<Button
										onClick={handleCloseNavMenu}
										sx={{
											fontFamily: "Euclid Circular A",
											color: "#727376",
											my: 2,
											display: "block",
										}}
									>
										{page}
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
							<Box sx={{ display: "flex", gap: 2, mr: 2 }}>
								<IconButton color="primary" size="small">
									<SearchIcon />
								</IconButton>
								<IconButton color="primary" size="small">
									<PersonOutlineIcon />
								</IconButton>
								<IconButton color="primary" size="small">
									<FavoriteBorderIcon />
								</IconButton>
								<Box sx={{ minWidth: 90 }}>
									<FormControl className={classes.currencySelect} fullWidth size="small">
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={age}
											onChange={handleChange}
										>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={10}>
												USD
											</MenuItem>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={20}>
												SAR
											</MenuItem>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={30}>
												CAD
											</MenuItem>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={40}>
												AUD
											</MenuItem>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={50}>
												GBP
											</MenuItem>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={60}>
												EUR
											</MenuItem>
											<MenuItem sx={{ fontFamily: "Euclid Circular A" }} value={70}>
												JPY
											</MenuItem>
										</Select>
									</FormControl>
								</Box>
								<Box sx={{ minWidth: 90, bgcolor: "#E2BC82" }}>
									<Stack
										className={classes.cartButton}
										direction="row"
										divider={<Divider orientation="vertical" flexItem />}
										spacing={2}
										component={Button}
										variant="contained"
									>
										<Box sx={{ display: "flex", alignItems: "center" }}>
											<ShoppingBagOutlinedIcon />
											<Typography sx={{ fontFamily: "Euclid Circular A" }}>Cart</Typography>
										</Box>
										<Typography
											sx={{ fontFamily: "Euclid Circular A" }}
											className={classes.cartBtnBadge}
										>
											1
										</Typography>
									</Stack>
								</Box>
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
		</>
	);
};

export default Navbar;
