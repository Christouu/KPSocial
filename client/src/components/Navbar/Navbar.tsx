import "./Navbar.scss";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  return (
    <div className="navbar" data-testid="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span data-testid="leftSideItems">KP Social</span>
        </Link>
        <HomeIcon data-testid="leftSideItems" />
        <AppsIcon data-testid="leftSideItems" />
        <DarkModeIcon data-testid="leftSideItems" />
        <div className="search" data-testid="leftSideItems">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon data-testid="rightSideItems" />
        <EmailIcon data-testid="rightSideItems" />
        <NotificationsActiveIcon data-testid="rightSideItems" />
        <div className="user" data-testid="rightSideItems">
          <img
            src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"}
            alt="default Avatar picture"
          />
          <span>Kristiyan Petkov</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
