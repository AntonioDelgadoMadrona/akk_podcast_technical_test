// DEPENDENCIES
import React from "react";
// COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
// STYLED COMPONENTS
import { LayoutContainer, ChildrenContainer } from "./layout.styled";
// INTERFACES
import { LayoutPropsType } from "./interfaces/layout.component.interface";

const Layout = ({ children }: LayoutPropsType): React.ReactElement => {
  return (
    <LayoutContainer>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
