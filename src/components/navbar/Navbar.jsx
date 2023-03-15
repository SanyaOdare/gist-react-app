import "./navbar.scss"
import brandLogo from "../../assets/gist-logo.png"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            <img className="brandLogo" src={brandLogo} alt="profilePhoto" />
          </span>
        </Link>
        <HomeOutlinedIcon className="leftNavbarIcon" />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="leftNavbarIcon" onClick={toggle}  />
        ) : (
          <DarkModeOutlinedIcon className="leftNavbarIcon" onClick={toggle} /> 
        )}
        <GridViewOutlinedIcon className="leftNavbarIcon" />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="rightNavbarIcon" />
        <EmailOutlinedIcon className="rightNavbarIcon" />
        <NotificationsOutlinedIcon className="rightNavbarIcon" />
        <div className="user">
          <img src={currentUser.profilePicture} alt="profilePhoto" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
