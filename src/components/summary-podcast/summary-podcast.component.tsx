// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import {
  SummaryPodcastContainer,
  ImgLinkContainer,
  Img,
  DetailsContainer,
  Title,
  Artist,
  DescriptionContainer,
} from "./summary-podcast.styled";
// TYPES
import { SummaryPodcastPropsType } from "./interfaces/summary-podcast.interface";

const SummaryPodcast: React.FC<SummaryPodcastPropsType> = ({
  details: { artistName, collectionId, collectionName, artworkUrl100 },
}): React.ReactElement => {
  return (
    <SummaryPodcastContainer key={collectionId}>
      <ImgLinkContainer to={`/podcast/${collectionId}`}>
        <Img src={artworkUrl100} alt={collectionName} />
      </ImgLinkContainer>
      <DetailsContainer to={`/podcast/${collectionId}`}>
        <Title>{collectionName}</Title>
        <Artist>by {artistName}</Artist>
      </DetailsContainer>
      <DescriptionContainer>
        <p>Description:</p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </DescriptionContainer>
    </SummaryPodcastContainer>
  );
};

export default SummaryPodcast;
