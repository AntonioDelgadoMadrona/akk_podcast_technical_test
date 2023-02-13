// DEPENDENCIES
import React from "react";
// HOOKS
import useEpisodeDetailsHook from "./hooks/episode-details.hook";
// COMPONENTS
import Loader from "../../components/loader/loader.component";
import SummaryPodcast from "../../components/summary-podcast/summary-podcast.component";
import EpisodeDetailsInfo from "./components/episode-details-info/episode-details-info.component";
// STYLED COMPONENTS
import { EpisodeDetailsContainer } from "./episode-details.styled";

const EpisodeDetails: React.FC = (): React.ReactElement => {
  const { podcastDetails, episodeDetails, isFetching } = useEpisodeDetailsHook();
  return (
    <EpisodeDetailsContainer isFetching={isFetching}>
      {isFetching && <Loader />}
      {!isFetching && podcastDetails && <SummaryPodcast details={podcastDetails} />}
      {!isFetching && episodeDetails && <EpisodeDetailsInfo episodeDetails={episodeDetails} />}
    </EpisodeDetailsContainer>
  );
};

export default EpisodeDetails;
