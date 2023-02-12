// RESOLVERS
import { getPodcastListResolver } from "../resolvers/podcast-list.resolver";
// INTERFACES
import { PodcastListHandlersType, PodcastListHandlersReturnType } from "./interfaces/podcast-list.handlers.interface";
import { GetPodcastListHandlerType } from "./interfaces/get-podcast-list-handler.interface";

const getPodcastListHandler = async ({ setPodcastList, setIsLoading }: GetPodcastListHandlerType): Promise<any> => {
  setIsLoading(true);
  const response = await getPodcastListResolver();
  if (response) {
    const { entry } = response;
    setPodcastList(entry);
  } else {
    // setError();
  }
  setIsLoading(false);
};

const PodcastListHandlers = ({
  setPodcastList,
  setIsLoading,
}: PodcastListHandlersType): PodcastListHandlersReturnType => ({
  handleGetPodcastList: () => getPodcastListHandler({ setPodcastList, setIsLoading }),
});

export default PodcastListHandlers;
