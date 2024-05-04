import React from "react";
import "./header.css";
import NetflixLogo from '../../Assets/Images/logo.png'
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header-left">
            <ul>
                <li className="logo"><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        {/* <div className="header-right">
            <ul>
                <li>SearchIcon</li>
                <li>NotificationIcon</li>
                <li>AccountBoxIcon</li>
                <li>ArrowDropDownIcon</li>

            </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
