// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import {
  PodcastDetailsInfoContainer,
  Img,
  DetailsContainer,
  Title,
  Artist,
  DescriptionContainer,
} from "./podcast-details-info.styled";
// TYPES
import { PodcastDetailsInfoPropsType } from "./interfaces/podcast-details-info.interface";

const PodcastDetailsInfo: React.FC<PodcastDetailsInfoPropsType> = ({
  details: { artistName, collectionId, collectionName, artworkUrl100 },
}): React.ReactElement => {
  return (
    <PodcastDetailsInfoContainer key={collectionId}>
      <Img src={artworkUrl100} alt={collectionName} />
      <DetailsContainer>
        <Title>{collectionName}</Title>
        <Artist>by {artistName}</Artist>
      </DetailsContainer>
      <DescriptionContainer>
        <p>Description:</p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </DescriptionContainer>
    </PodcastDetailsInfoContainer>
  );
};

export default PodcastDetailsInfo;
