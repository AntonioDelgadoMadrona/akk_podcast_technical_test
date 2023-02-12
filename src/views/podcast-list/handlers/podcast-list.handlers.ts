// RESOLVERS
import { getPodcastListResolver } from "../resolvers/podcast-list.resolver";
// INTERFACES
import { PodcastListHandlersType, PodcastListHandlersReturnType } from "./interfaces/podcast-list.handlers.interface";
import { GetPodcastListHandlerType } from "./interfaces/get-podcast-list-handler.interface";
import { PodcastListItemType } from "../../../interfaces/PodcastListItem.interface";

const getPodcastListHandler = async ({ setPodcastList, setIsFetching }: GetPodcastListHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getPodcastListResolver();
  if (response) {
    const { entry } = response;
    setPodcastList(entry);
  } else {
    // setError();
  }
  setIsFetching(false);
};

const filterPodcastListHandler = ({ event, setFilteredPodcastList, setIsFiltering, podcastList }: any): void => {
  const { value } = event.target;
  if (value) {
    setIsFiltering(true);
    const filteredPodcastList = podcastList.filter((podcast: PodcastListItemType) => {
      const {
        "im:name": { label },
      } = podcast;
      return label.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredPodcastList(filteredPodcastList);
  } else {
    setIsFiltering(false);
  }
};

const PodcastListHandlers = ({
  setPodcastList,
  setIsFetching,
  setFilteredPodcastList,
  setIsFiltering,
  podcastList,
}: PodcastListHandlersType): PodcastListHandlersReturnType => ({
  handleGetPodcastList: () => getPodcastListHandler({ setPodcastList, setIsFetching }),
  handleFilterPodcastList: (event: React.FormEvent<HTMLInputElement>) =>
    filterPodcastListHandler({ event, setFilteredPodcastList, setIsFiltering, podcastList }),
});

export default PodcastListHandlers;
