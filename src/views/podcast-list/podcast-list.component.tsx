// DEPENDENCIES
import React from "react";
// HOOKS
import usePodcastListHook from "./hooks/podcast-list.hook";
// COMPONENTS
import Loader from "../../components/loader/loader.component";
import PodcastItem from "./components/podcast-item/podcast-item.component";
// STYLED COMPONENTS
import { PodcastListContainer, PodcastListWrapper } from "./podcast-list.styled";

const PodcastList = (): React.ReactElement => {
  const { podcastList, isLoading } = usePodcastListHook();
  console.log(podcastList);
  return (
    <PodcastListContainer>
      {/* Todo: Create BarSearch component */}

      {!isLoading && podcastList.length > 0 ? (
        <PodcastListWrapper>
          {podcastList.map((podcast) => (
            <PodcastItem key={podcast.id.attributes["im:id"]} podcast={podcast} />
          ))}
        </PodcastListWrapper>
      ) : (
        <Loader />
      )}
    </PodcastListContainer>
  );
};

export default PodcastList;
