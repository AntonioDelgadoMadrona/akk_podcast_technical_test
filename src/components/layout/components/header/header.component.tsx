// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { HeaderContainer, NavMenu, NavItem } from "./header.styled";

const Header = (): React.ReactElement => {
  return (
    <HeaderContainer>
      <NavMenu>
        <NavItem>Inicio</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
