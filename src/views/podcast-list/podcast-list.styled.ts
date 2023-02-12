// DEPENDENCIES
import styled from "styled-components";

export const PodcastListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PodcastListWrapper = styled.div`
  width: 100%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 50px;
  align-items: flex-start;
`;
