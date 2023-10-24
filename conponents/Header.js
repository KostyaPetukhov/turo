import { useState } from "react";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
	{ name: "Info", url: "/info" },
	{ name: "Optimization", url: "/optimization" },
];

const settings = [{ name: "Login", url: "/login" }];

const Header = () => {
	const router = useRouter();

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (url) => {
		setAnchorElNav(null);
		router.push(url);
	};

	const handleCloseUserMenu = (url) => {
		setAnchorElUser(null);
		router.push(url);
	};

	return (
		<header>
			<AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "San Francisco Pro Display",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "#323232",
								textDecoration: "none",
								cursor: "pointer",
							}}
							onClick={() => router.push("/")}
						>
							LOGO
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								backgroundColor: "primary",
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="#323232"
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
									backgroundColor: "primary",
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.name}
										onClick={() => handleCloseNavMenu(page.url)}
									>
										<Typography textAlign="center">{page.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography
							variant="h5"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "San Francisco Pro Display",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "#323232",
								textDecoration: "none",
								cursor: "pointer",
							}}
							onClick={() => router.push("/")}
						>
							LOGO
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Button
									key={page.name}
									onClick={() => handleCloseNavMenu(page.url)}
									sx={{ my: 2, color: "#323232", display: "block" }}
								>
									{page.name}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="Profile" src="/static/images/avatar/2.jpg" />
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
									<MenuItem
										key={setting.name}
										onClick={() => handleCloseUserMenu(setting.url)}
									>
										<Typography textAlign="center">{setting.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};

export default Header;
