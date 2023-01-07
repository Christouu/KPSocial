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
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>KP Social</span>
        </Link>
        <HomeIcon />
        <AppsIcon />
        <DarkModeIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon />
        <EmailIcon />
        <NotificationsActiveIcon />
        <div className="user">
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
