// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { FooterContainer, NavMenu, NavItem } from "./footer.styled";

const Footer = (): React.ReactElement => {
  return (
    <FooterContainer>
      <NavMenu>
        <NavItem>
          Prueba de concepto desarrollada por
          <a href="https://www.linkedin.com/in/antonio-delgado-madrona/" target="_blank" rel="noopener noreferrer">
            Antonio Delgado Madrona
          </a>
        </NavItem>
      </NavMenu>
    </FooterContainer>
  );
};

export default Footer;
