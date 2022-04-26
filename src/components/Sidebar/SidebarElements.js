import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  left: 0;
  top: ${({isOpen}) => isOpen ? '0' : '-110%'};
  
  width: 100%;
  height: 100%;
  
  display: grid;
  align-items: center;
  
  background: #0d0d0d;
  transition: all 0.3s ease-in-out;
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
`

export const CloseIcon = styled(FaTimes)`
  color: white;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: white
`
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px)
  }
`
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    color: #01bf71;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
  padding: 16px 64px;
  border-radius: 50px;
  border:none;
  
  outline: none;
  background: #01bf71;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: white;
    color: #010606;
  }
`
