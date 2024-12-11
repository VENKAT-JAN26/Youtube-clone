import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-dev">


      {/* Left section of the navbar: Includes menu and logo */}
      <div className="nav-left flex-div">
        <img className="menu-icon"  onClick={ ()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
       <Link to='/'><img className="logo" src={logo} alt="" /> </Link> 
      </div>


      {/* Middle section of the navbar: Includes the search box */}
      <div>
        <div className="nav-middle flex-div ">
          <div className="search-box  flex-div">
            <input type="text" placeholder="search" />
            <img src={search_icon} alt="" />
          </div>
        </div>
      </div>


      {/* Right section of the navbar: Includes icons for user actions */}
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};


// Add propTypes validation
Navbar.propTypes = {
  setSidebar: PropTypes.func.isRequired, // Validate that setSidebar is a required function
};

export default Navbar;
