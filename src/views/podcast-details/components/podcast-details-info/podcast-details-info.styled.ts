// DEPENDENCIES
import styled from "styled-components";

export const PodcastDetailsInfoContainer = styled.div`
  display: grid;
  grid-template-rows: max-content auto auto;
  row-gap: 10px;
  padding: 20px 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  max-height: max-content;
`;

export const Img = styled.img`
  width: 150px;
  height: 100%;
  border-radius: 10px;
  margin: 0 auto;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: left;
`;

export const Title = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 10px auto 0 auto;
`;

export const Artist = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  margin-top: 3px;
  font-style: italic;
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: left;
  align-items: center;

  & > p {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    margin: 10px 0;
  }

  & > span {
    font-size: 14px;
    font-style: italic;
  }
`;
