// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { PodcastItemContainer, Img, Title, Author } from "./podcast-item.styled";
// INTERFACES
import { PodcastItemPropsType } from "./interfaces/podcast-item.interface";

const PodcastItem: React.FC<PodcastItemPropsType> = ({ podcast }): React.ReactElement => {
  const { id, artistName, image, name } = podcast;
  return (
    <PodcastItemContainer to={`/podcast/${id}`}>
      <Img src={image} alt={name} />
      <Title>{name}</Title>
      <Author>Author: {artistName}</Author>
    </PodcastItemContainer>
  );
};

export default PodcastItem;
