import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import { FaMagento } from 'react-icons/fa';

const Nav = styled.nav`
height: 100px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background-color:#145DA0;
`;

const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`;

const Logo = styled(Link)`
${NavLink}
font-style:italic;
color:#fff;
justify-self:flex-start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
`;

const NavIcon = styled(FaMagento)`
margin-right:0.5rem;
`;


const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width:768px){
    display:block;
    background-size:contain;
    height:40px;
    width:40px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    color:#fff;
    transform:translate(-50%, 25%);
}
`;

const NavMenu = styled.div`
align-items:center;
display: flex;
margin-right: -48px;
margin-top:50px;

@media screen and (max-width:768px){
    display:none;
}
`;



const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;
margin-top:50px;
@media screen and (max-width:768px){
    display:none;
`;



const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to="/">
                <NavIcon />
            ADVANTAGE ONE
            </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}

            </NavMenu>
            <NavBtn>
                <Button to='/AIP-Login' primary='true'>AIP Login </Button>
            </NavBtn>

        </Nav>
    )
}

export default Navbar;
