import React from 'react';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu
} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            dolla
          </NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem >
              <NavLink className='active' to='about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='discover'>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='services'>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='signup'>Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
