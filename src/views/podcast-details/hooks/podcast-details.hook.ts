// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import PodcastDetailsHandlers from "../handlers/podcast-details.handlers";
// INTERFACES
import { PodcastDetailsHookReturnType } from "./interfaces/podcast-details-hook.interface";
import { PodcastDetailsType } from "../../../interfaces/PodcastDetails.interface";

// create an array of 10 different episodes
const episodes = Array.from({ length: 10 }, (_, i) => ({
  episodeGuid: `${i}`,
  releaseDate: '2020-01-01',
  trackName: `Episode ${i}`,
  duration: 123456789,
}));

const usePodcastDetailsHook = (): PodcastDetailsHookReturnType => {
  const { id = "" } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetailsType>({
    details: {
      artistName: 'Antonio Delgado',
      artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7b/7b/7b/7b7b7b7b-7b7b-7b7b-7b7b-7b7b7b7b7b7b/mza_14600000000000000000.jpg/600x600bb.jpg',
      collectionId: 123456789,
      collectionName: 'The Antonio Delgado Podcast',
    },
    episodes: episodes,
  });
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { handleGetPodcastDetails } = PodcastDetailsHandlers({
    setPodcastDetails,
    setIsFetching,
  });

  useEffect(() => {
    handleGetPodcastDetails(id);
    setTimeout(() => {
      setIsFetching(false);
    }, 3000);
  }, []);

  return {
    podcastDetails,
    isFetching,
  };
};

export default usePodcastDetailsHook;
