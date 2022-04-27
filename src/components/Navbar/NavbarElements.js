import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -80px;
  
  display: flex;
  justify-content: center;
  
  height: 80px;
  
  background: black;
  font-size: 1rem;
  
  @media screen and (max-width: 960px) {
     transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  max-width: 1100px;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    
    font-size: 1.8rem;
    
    color: white;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  margin-right: -20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  list-style: none;
  
  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLink = styled(LinkS)`
  height: 100%;
  padding: 0 1rem;
  
  display: flex;
  align-items: center;
  
  color: white;
  text-decoration: none;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const NavBtn = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const NavBtnLink = styled(LinkR)`
  padding: 10px 22px;
  border-radius: 50px;
  border: none;
  
  background: #01bf71;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: white;
    color: #010606;
  }
`
