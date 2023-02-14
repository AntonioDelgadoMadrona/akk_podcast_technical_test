// DEPENDENCIES
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header.attrs({
  "data-testid": "header-component",
})`
  width: 100%;
  height: 80px;
  background-color: #1a73e8;
`;

export const NavMenu = styled.div.attrs({
  "data-testid": "nav-menu",
  })`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;
