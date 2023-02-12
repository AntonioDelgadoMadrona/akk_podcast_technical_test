// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { PodcastItemContainer, Img, Title, Author } from "./podcast-item.styled";
// INTERFACES
import { PodcastItemPropsType } from "./interfaces/podcast-item.interface";

const PodcastItem = ({ podcast }: PodcastItemPropsType): React.ReactElement => {
  const { "im:artist": artist, "im:image": image, "im:name": name } = podcast;
  return (
    <PodcastItemContainer>
      <Img src={image[1].label} alt={name.label} />
      <Title>{name.label}</Title>
      <Author>Author: {artist.label}</Author>
    </PodcastItemContainer>
  );
};

export default PodcastItem;
