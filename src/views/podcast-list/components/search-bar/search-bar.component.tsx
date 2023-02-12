// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { SearchBarContainer, SearchBarLabel, SearchBarInput } from "./search-bar.styled";
// INTERFACES
import { SearchBarPropsType } from "./interfaces/search-bar.interface";

const SearchBar: React.FC<SearchBarPropsType> = ({
  handleFilterPodcastList,
  podcastListLength,
}): React.ReactElement => {
  return (
    <SearchBarContainer>
      <SearchBarLabel>{podcastListLength}</SearchBarLabel>
      <SearchBarInput type="text" placeholder="Filter podcasts..." onChange={handleFilterPodcastList} />
    </SearchBarContainer>
  );
};

export default SearchBar;
