// DEPENDENCIES
import React from "react";
// HOOKS
import usePodcastDetailsHook from "./hooks/podcast-details.hook";
// COMPONENTS
import Loader from "../../components/loader/loader.component";
import SummaryPodcast from "../../components/summary-podcast/summary-podcast.component";
import PodcastDetailsEpisodes from "./components/podcast-details-episodes/podcast-details-episodes.component";
// STYLED COMPONENTS
import { PodcastDetailsContainer } from "./podcast-details.styled";

const PodcastDetails: React.FC = (): React.ReactElement => {
  const { podcastDetails, episodeList, isFetching, podcastId } = usePodcastDetailsHook();
  return (
    <PodcastDetailsContainer isFetching={isFetching}>
      {isFetching && <Loader />}
      {!isFetching && podcastDetails && <SummaryPodcast details={podcastDetails} />}
      {!isFetching && episodeList?.length && <PodcastDetailsEpisodes episodes={episodeList} podcastId={podcastId} />}
    </PodcastDetailsContainer>
  );
};

export default PodcastDetails;
