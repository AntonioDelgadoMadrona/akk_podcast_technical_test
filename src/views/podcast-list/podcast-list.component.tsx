// DEPENDENCIES
import React from "react";
// HOOKS
import usePodcastListHook from "./hooks/podcast-list.hook";
// COMPONENTS
import SearchBar from "./components/search-bar/search-bar.component";
import Loader from "../../components/loader/loader.component";
import PodcastItem from "./components/podcast-item/podcast-item.component";
// STYLED COMPONENTS
import { PodcastListContainer, PodcastListWrapper } from "./podcast-list.styled";

const PodcastList: React.FC = (): React.ReactElement => {
  const { handleFilterPodcastList, podcastList, isFetching, filteredPodcastList, isFiltering } = usePodcastListHook();
  return (
    <PodcastListContainer>
      <SearchBar
        podcastListLength={isFiltering ? filteredPodcastList?.length : podcastList?.length}
        handleFilterPodcastList={handleFilterPodcastList}
      />

      {!isFetching && podcastList.length > 0 ? (
        <PodcastListWrapper>
          {isFiltering
            ? filteredPodcastList.map((podcast) => <PodcastItem key={podcast.id} podcast={podcast} />)
            : podcastList.map((podcast) => <PodcastItem key={podcast.id} podcast={podcast} />)}
        </PodcastListWrapper>
      ) : (
        <Loader />
      )}
    </PodcastListContainer>
  );
};

export default PodcastList;
