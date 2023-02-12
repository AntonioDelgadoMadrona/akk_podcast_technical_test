// DEPENDENCIES
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: #1a73e8;
`;

export const NavMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;
