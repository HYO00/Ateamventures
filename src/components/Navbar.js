import React from 'react';
import styled from "styled-components";

const Nav = styled.nav`
    background: #1565C0;
    display: flex;
    justify-content: center;
    height: 70px;
    `
const NavContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    padding:  0 24px;
    max-width: 1440px
`
const NavLogo = styled.h1`
    display:flex;
    align-items:center;
    color:white;
    cursor:pointer;
`

const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    color:white;
    cursor:pointer;
    list-style:none;
`

const NavItem= styled.li`
    margin:12px; 
`
const NavIcon= styled.li`
    margin:0; 
`

const Navbar = () => {
    
    return(
        <Nav>
        <NavContainer>
            <NavLogo>
                CAPA 파트너스
            </NavLogo>
            <NavMenu>
                <NavIcon>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6666 10.5H11.9999V12.1667H13.6666V10.5ZM13.6666 7.16667H11.9999V8.83333H13.6666V7.16667ZM15.3333 13.8333H8.66659V12.1667H10.3333V10.5H8.66659V8.83333H10.3333V7.16667H8.66659V5.5H15.3333V13.8333ZM6.99992 3.83333H5.33325V2.16667H6.99992V3.83333ZM6.99992 7.16667H5.33325V5.5H6.99992V7.16667ZM6.99992 10.5H5.33325V8.83333H6.99992V10.5ZM6.99992 13.8333H5.33325V12.1667H6.99992V13.8333ZM3.66659 3.83333H1.99992V2.16667H3.66659V3.83333ZM3.66659 7.16667H1.99992V5.5H3.66659V7.16667ZM3.66659 10.5H1.99992V8.83333H3.66659V10.5ZM3.66659 13.8333H1.99992V12.1667H3.66659V13.8333ZM8.66659 3.83333V0.5H0.333252V15.5H16.9999V3.83333H8.66659Z" fill="white"/>
</svg>
                </NavIcon>
                <NavItem>
                    
                    A 가공 업체 
                </NavItem>
                <NavItem>
                   |
                </NavItem>
                <NavItem>
                   로그아웃
                </NavItem>
            </NavMenu>
        </NavContainer>
        </Nav>
    )
}

export default Navbar;