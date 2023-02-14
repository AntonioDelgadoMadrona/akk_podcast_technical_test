// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { EpisodeDetailsInfoContainer, Title, Description, AudioPlayer } from "./episode-details-info.styled";
// INTERFACES
import { EpisodeDetailsInfoPropsType } from "./interfaces/episode-details-info.interface";

// Check if description is an string or contains html tags
export const isHtml = (description: string): boolean => {
  const doc = new DOMParser().parseFromString(description, "text/html");
  return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
};
const descriptionHtml = (description: string): React.ReactElement => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

const EpisodeDetailsInfo: React.FC<EpisodeDetailsInfoPropsType> = ({ episodeDetails }): React.ReactElement => {
  const { trackName, description, previewUrl } = episodeDetails;
  const desciptionContent = isHtml(description) ? descriptionHtml(description) : description;
  return (
    <EpisodeDetailsInfoContainer>
      <Title>{trackName}</Title>
      <Description>{desciptionContent}</Description>
      <AudioPlayer>
        <audio controls>
          <source src={previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </AudioPlayer>
    </EpisodeDetailsInfoContainer>
  );
};

export default EpisodeDetailsInfo;
