// RESOLVERS
import { getPodcastListResolver } from "../resolvers/podcast-list.resolver";
// INTERFACES
import { PodcastListHandlersType, PodcastListHandlersReturnType } from "./interfaces/podcast-list.handlers.interface";
import { GetPodcastListHandlerType } from "./interfaces/get-podcast-list-handler.interface";
import { PodcastListItemType } from "../../../interfaces/PodcastListItem.interface";

const getPodcastListHandler = async ({
  setPodcastListStoraged,
  setPodcastList,
  setIsFetching,
}: GetPodcastListHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getPodcastListResolver();
  if (response) {
    const { entry } = response;
    const filteredEntry: PodcastListItemType[] = entry.map((podcast: any) => {
      const {
        id: {
          attributes: { "im:id": id },
        },
        "im:artist": { label: artistName },
        "im:image": [{ label: image }],
        "im:name": { label: name },
      } = podcast;
      return { id, artistName, image, name };
    });
    setPodcastList(filteredEntry);
    setPodcastListStoraged({ content: [...filteredEntry] });
  } else {
    console.error("Error on getPodcastListHandler()");
  }
  setIsFetching(false);
};

const filterPodcastListHandler = ({ event, setFilteredPodcastList, setIsFiltering, podcastList }: any): void => {
  const { value } = event.target;
  if (value) {
    setIsFiltering(true);
    const filteredPodcastList = podcastList.filter((podcast: PodcastListItemType) => {
      const { name, artistName } = podcast;
      return name.toLowerCase().includes(value.toLowerCase()) || artistName.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredPodcastList(filteredPodcastList);
  } else {
    setIsFiltering(false);
  }
};

const PodcastListHandlers = ({
  setPodcastListStoraged,
  setPodcastList,
  setIsFetching,
  setFilteredPodcastList,
  setIsFiltering,
  podcastList,
}: PodcastListHandlersType): PodcastListHandlersReturnType => ({
  handleGetPodcastList: () => getPodcastListHandler({ setPodcastListStoraged, setPodcastList, setIsFetching }),
  handleFilterPodcastList: (event: React.FormEvent<HTMLInputElement>) =>
    filterPodcastListHandler({ event, setFilteredPodcastList, setIsFiltering, podcastList }),
});

export default PodcastListHandlers;
