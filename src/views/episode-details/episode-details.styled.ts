// DEPENDENCIES
import styled from "styled-components";

export const EpisodeDetailsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: ${({ isFetching }: { isFetching: boolean }) => (isFetching ? "1fr" : "25% 65%")};
  column-gap: 10%;
  align-items: flex-start;
  justify-content: space-between;
`;
