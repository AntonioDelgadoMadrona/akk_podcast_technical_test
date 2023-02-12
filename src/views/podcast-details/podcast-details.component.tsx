// DEPENDENCIES
import React from "react";
// HOOKS
import usePodcastDetailsHook from "./hooks/podcast-details.hook";
// COMPONENTS
import Loader from "../../components/loader/loader.component";
import PodcastDetailInfo from "./components/podcast-details-info/podcast-details-info.component";
import PodcastDetailsEpisodes from "./components/podcast-details-episodes/podcast-details-episodes.component";
// STYLED COMPONENTS
import { PodcastDetailsContainer } from "./podcast-details.styled";

const PodcastDetails: React.FC = (): React.ReactElement => {
  const { podcastDetails, isFetching } = usePodcastDetailsHook();
  return (
    <PodcastDetailsContainer isFetching={isFetching}>
      {isFetching && <Loader />}
      {!isFetching && podcastDetails?.details && <PodcastDetailInfo details={podcastDetails.details} />}
      {!isFetching && podcastDetails?.episodes && <PodcastDetailsEpisodes episodes={podcastDetails.episodes} />}
    </PodcastDetailsContainer>
  );
};

export default PodcastDetails;
