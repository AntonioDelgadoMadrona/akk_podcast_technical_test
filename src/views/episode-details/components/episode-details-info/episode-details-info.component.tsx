// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { EpisodeDetailsInfoContainer, Title, Description, AudioPlayer } from "./episode-details-info.styled";
// INTERFACES
import { EpisodeDetailsInfoPropsType } from "./interfaces/episode-details-info.interface";

const EpisodeDetailsInfo: React.FC<EpisodeDetailsInfoPropsType> = ({ episodeDetails }): React.ReactElement => {
  return (
    <EpisodeDetailsInfoContainer>
      <Title>{episodeDetails?.trackName}</Title>
      <Description>{episodeDetails?.description}</Description>
      <AudioPlayer>
        <audio controls>
          <source src={episodeDetails?.previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </AudioPlayer>
    </EpisodeDetailsInfoContainer>
  );
};

export default EpisodeDetailsInfo;
