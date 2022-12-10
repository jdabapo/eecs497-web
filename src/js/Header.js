import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Tooltip,
  MenuItem,
  Container,
  Avatar,
  Menu,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { app, db } from "./FirebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const auth = getAuth(app);

export default function Header() {
  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/profile");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [profile, setProfile] = useState({});
  const [user, userLoading] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      setProfile(docSnap.data());
      console.log("header fetch")
    };
    fetchData();
  }, [user, userLoading]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/main"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Wolveroommates
          </Typography>

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
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/main"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Wolveroommates
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* TODO: Change the avatar to the person*/}
                  {(profile && profile.picture) && <Avatar
                    alt={profile.name}
                    src={require("../assets/" + profile.picture)}
                  />}
                  {(profile && !profile.picture) && <Avatar alt={profile.name} />}
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
                <MenuItem key="Profile" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem key="Logout" onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}>
                  <Typography textAlign="center">
                    Log Out
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
