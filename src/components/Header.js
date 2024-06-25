import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from '../components/logo.jpg'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <div className="logo-div">
      <img src={logo} alt="logo" className="logo" />
      <h3 className="shopper">SHOPPER</h3>
      <h3> STOP</h3>
      </div>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo-div{
  display: flex;}
  .logo {
    height: 2rem;
    width: 10px;
  }
`;
export default Header;
