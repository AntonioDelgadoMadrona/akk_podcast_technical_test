// DEPENDENCIES
import styled from "styled-components";

export const FooterContainer = styled.footer.attrs({
  "data-testid": "footer-component",
})`
  width: 100%;
  height: 100px;
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
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  & > a {
    cursor: pointer;
    margin-left: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    opacity: 0.8;
    font-style: italic;
  }
  & > a:hover {
    opacity: 1;
  }
`;
