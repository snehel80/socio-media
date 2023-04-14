import React, { useContext } from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { Email } from "@mui/icons-material";
import { DarkModeContext } from '../../Context/darkModeContext';
import { AuthContext } from '../../Context/authContext';
import "./NavBar.scss"

const NavBar = () => {

  const {toggle,darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>Socio Media</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle}/>}
            <GridViewOutlinedIcon />
            <div className="search">
              <SearchOutlinedIcon />
              <input type="text" placeholder="Search..." />
            </div>
        </div>
        <div className="right">
          <PersonOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
          <div className="user">
            <img src={currentUser.profilePic} alt="img" />
            <span>{currentUser.name}</span>
          </div>
        </div>
    </div>
  )
}

export default NavBar