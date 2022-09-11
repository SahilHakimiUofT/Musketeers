import React from 'react';
import logo from '../../assets/Bookdtransparent.png'
import classes from "./Navbar.module.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img className={classes.logo__image} src={logo} alt="Bookd Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Search
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Favourites
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Bookings
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;