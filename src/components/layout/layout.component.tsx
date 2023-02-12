// DEPENDENCIES
import React from "react";
// COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
// STYLED COMPONENTS
import { LayoutContainer, ChildrenContainer, ChildrenHeader } from "./layout.styled";
// INTERFACES
import { LayoutPropsType } from "./interfaces/layout.component.interface";

const Layout: React.FC<LayoutPropsType> = ({ children }): React.ReactElement => {
  return (
    <LayoutContainer>
      <Header />
      <ChildrenContainer>
        <ChildrenHeader>
          <h4>Podcaster</h4>
        </ChildrenHeader>
        {children}
      </ChildrenContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
