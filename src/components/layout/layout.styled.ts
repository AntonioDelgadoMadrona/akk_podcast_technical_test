// DEPENDENCIES
import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  max-width: 850px;
  min-height: 80vh;
  margin: 0 auto;
`;

export const ChildrenHeader = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #BDBDBD;

  & > h4 {
    color: #1a73e8;
  }
`;
