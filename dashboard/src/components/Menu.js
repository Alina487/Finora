import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu as MuiMenu,
  MenuItem,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const isDropdownOpen = Boolean(profileAnchorEl);

  const [userEmail, setUserEmail] = useState("hello@finora.com");
  useEffect(() => {
    let storedEmail  = localStorage.getItem("userEmail");
    if(!storedEmail){
      const urlParams = new URLSearchParams(window.location.search);
      const urlEmail = urlParams.get("email");
      if(urlEmail){
        storedEmail = urlEmail;
        localStorage.setItem("userEmail", urlEmail);
      }
    }
    if(storedEmail){
      setUserEmail(storedEmail);
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileClose();
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("userEmail");
    window.location.href = "https://finora-frontend-33rx.onrender.com";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="" style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        <MuiMenu
          id="profile-dropdown-menu"
          anchorEl={profileAnchorEl}
          open={isDropdownOpen}
          onClose={handleProfileClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          slotProps={{
            paper: {
              sx: {
                width: 220,
                mt: 1,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                borderRadius: "4px",
              }
            }
          }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#333" }}
            >
              Finora User
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {userEmail}
            </Typography>
          </Box>

          <Divider sx={{ my: 0.5 }} />

          <MenuItem
            onClick={handleProfileClose}
            sx={{ fontSize: 13, color: "#555" }}
          >
            My Profile
          </MenuItem>
          <MenuItem
            onClick={handleProfileClose}
            sx={{ fontSize: 13, color: "#555" }}
          >
            Settings
          </MenuItem>
          <MenuItem
            onClick={handleProfileClose}
            sx={{ fontSize: 13, color: "#555" }}
          >
            Console
          </MenuItem>

          <Divider sx={{ my: 0.5 }} />

          <MenuItem
            onClick={handleLogout}
            sx={{
              fontSize: 13,
              color: "#d32f2f",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              "&:hover": { backgroundColor: "#ffebee" },
            }}
          >
            <LogoutIcon sx={{ fontSize: 16 }} />
            Logout
          </MenuItem>
        </MuiMenu>
      </div>
    </div>
  );
};

export default Menu;
