// DEPENDENCIES
import styled from "styled-components";

export const PodcastDetailsContainer = styled.div.attrs({
  "data-testid": "podcast-details-component",
})`
  margin-top: 30px;
  display: grid;
  grid-template-columns: ${({ isFetching }: { isFetching: boolean }) => (isFetching ? "1fr" : "25% 65%")};
  column-gap: 10%;
  align-items: flex-start;
  justify-content: space-between;
`;
