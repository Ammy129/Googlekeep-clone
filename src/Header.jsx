import React, { useEffect, useState } from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ListIcon from "@material-ui/icons/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = ({ showSidebar, setShowSidebar }) => {
  const [showShadow, setShowShadow] = useState(false);

  // const getShadow = () => {
  //   const scroll = window.pageYOffset;
  //   console.log(scroll);
  // };
  // useEffect(() => {
  //   getShadow();
  // }, [getShadow]);

  const toggleSidebar = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);
  };

  return (
    <header className="header">
      <div className="icon-holder" onClick={toggleSidebar}>
        <MenuIcon />
      </div>
      <div className="logo">
        <img src="./logo.png" alt="google-keep logo" /> Keep
      </div>
      <form className="header-form">
        <div className="icon-holder search-icon">
          <SearchIcon />
        </div>
        <input type="search" placeholder="Search" />
      </form>
      <div className="other-icons">
        <div className="icon-holder">
          <RefreshIcon />
        </div>
        <div className="icon-holder">
          <ListIcon />
        </div>
        <div className="icon-holder">
          <SettingsOutlinedIcon />
        </div>
      </div>

      <div className="account-icons">
        <div className="icon-holder">
          <img src="./Apps.svg" alt="App icon" />
        </div>
        <div className="icon-holder">
          <AccountCircleIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
