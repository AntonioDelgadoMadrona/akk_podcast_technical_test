// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import {
  PodcastDetailsEpisodesContainer,
  EpisodesHeader,
  EpisodesList,
  EpisodesListHeader,
  EpisodesListBody,
  EpisodesListBodyItem,
  Title,
} from "./podcast-details-episodes.styled";
// INTERFACES
import { PodcastDetailsEpisodesPropsType } from "./interfaces/podcast-details-episodes.interface";

const PodcastDetailsEpisodes: React.FC<PodcastDetailsEpisodesPropsType> = ({
  episodes,
  podcastId,
}): React.ReactElement => {
  return (
    <PodcastDetailsEpisodesContainer>
      <EpisodesHeader>
        <span>Episodes: {episodes.length}</span>
      </EpisodesHeader>
      <EpisodesList>
        <EpisodesListHeader>
          <span>Title</span>
          <span>Date</span>
          <span>Duration</span>
        </EpisodesListHeader>
        <EpisodesListBody>
          {episodes.length > 0 &&
            episodes.map(({ trackId, trackName }) => {
              return (
                <EpisodesListBodyItem key={trackId}>
                  <Title to={`/podcast/${podcastId}/episode/${trackId}`}>{trackName}</Title>
                  <span>12/02/2023</span>
                  <span>15:00</span>
                </EpisodesListBodyItem>
              );
            })}
        </EpisodesListBody>
      </EpisodesList>
    </PodcastDetailsEpisodesContainer>
  );
};

export default PodcastDetailsEpisodes;
