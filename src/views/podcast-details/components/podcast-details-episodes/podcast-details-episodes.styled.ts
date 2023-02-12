// DEPENDENCIES
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PodcastDetailsEpisodesContainer = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  row-gap: 20px;
`;

export const EpisodesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  padding: 8px 10px;

  & > span {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
`;

export const EpisodesList = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  padding: 20px 10px;
  display: grid;
  grid-template-rows: auto auto;
`;

export const EpisodesListHeader = styled.div`
  display: grid;
  grid-template-columns: 60% 15% 15%;
  column-gap: 10px;
  border-bottom: 2px solid #e0e0e0;
  justify-content: space-between;
  margin-bottom: 8px;

  & > span {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    margin-bottom: 5px;
  }
`;

export const EpisodesListBody = styled.div`
  & > :nth-child(odd) {
    background-color: #f5f5f5;
  }
`;

export const EpisodesListBodyItem = styled.div`
  display: grid;
  grid-template-columns: 60% 15% 15%;
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: #000;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Title = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  color: #1a73e8;
`;
