import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { NavbarContainer } from "../styles/NavBarStyled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to='/'>
        {" "}

        <div className="logo">
          <img src={`${logo}`} alt="logo" />
          Shareable
        </div>
      </NavLink>
      <div className='nav-bar'>
        <nav>

          <NavLink to="/login">
            <span>Log in</span>
          </NavLink>
          <NavLink to="/signup">
            <span>Sign up</span>
          </NavLink>
          <NavLink to="/profile">
            <span>Profile</span>
          </NavLink>
          <div id='indicator'></div>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
