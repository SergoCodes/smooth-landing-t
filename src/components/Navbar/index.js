import React, {useEffect, useState} from 'react';
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
import {animateScroll} from 'react-scroll'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)
  
  const changeNav = () => setScrollNav(window.scrollY >= 80)
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  const toggleHome = () => {
    animateScroll.scrollToTop()
  }
  
  return (
    <>
      <Nav scrollNav={scrollNav} onClick={toggleHome}>
        <NavbarContainer>
          <NavLogo to='/'>
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Sign Up</NavLink>
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
