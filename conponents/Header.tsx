import { useState, type FC, type MouseEvent } from "react";
import { useRouter, type NextRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

interface Page {
  name: string;
  url: string;
}

interface Setting {
  name: string;
  url: string;
}

const pages: Page[] = [
  { name: "Info", url: "/info" },
  { name: "Optimization", url: "/optimization" },
  { name: "First trip", url: "/first-trip" },
  { name: "Choose role", url: "/choose-role" },
];

const authSettings: Setting[] = [
  { name: "Log in", url: "/signin" },
  { name: "Sign up", url: "/signup" },
];

const userSettings: Setting[] = [
  { name: "Profile", url: "/profile" },
  { name: "Sign out", url: "/" },
];

const Header: FC = () => {
  const router: NextRouter = useRouter();
  const session = useSession();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url: string): void => {
    setAnchorElNav(null);
    void router.push(url);
  };

  const handleCloseUserMenu = (url: string): void => {
    setAnchorElUser(null);
    if (url === "/") {
      void signOut({ callbackUrl: "/" });
    } else {
      void router.push(url);
    }
  };

  const handleRouterPush = (): void => {
    void router.push("/");
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
                fontFamily: "SF Pro Display",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#323232",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={handleRouterPush}
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
                color="default"
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
                    onClick={() => {
                      handleCloseNavMenu(page.url);
                    }}
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
                fontFamily: "SF Pro Display",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#323232",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={handleRouterPush}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu(page.url);
                  }}
                  sx={{ my: 1, color: "#323232", display: "block" }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Profile"
                    src={`${
                      session?.data != null ? session?.data?.user?.image : ""
                    }`}
                  />
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
                {(session?.data != null ? userSettings : authSettings).map(
                  (setting) => (
                    <MenuItem
                      key={setting.name}
                      onClick={() => {
                        handleCloseUserMenu(setting.url);
                      }}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  ),
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
