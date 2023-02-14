// INTERFACES
import { PodcastListItemType } from "../../interfaces/PodcastListItem.interface";
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "../../interfaces/PodcastDetails.interface";
import { EpisodeDetailsType } from "../../interfaces/EpisodeDetails.interface";

export interface AppContextPropsType {
  setPodcastListStoraged: (podcastList: any) => void;
  podcastListStoraged: {
    content: PodcastListItemType[];
    updatedAt?: string;
  };
  setPodcastDetailStoraged: (podcastDetails: any) => void;
  podcastDetailStoraged: {
    content: {
      details: PodcastDetailsInfoType;
      episodes: PodcastDetailsEpisodeType[];
    };
    updatedAt?: string;
  };
  setEpisodeDetailsStoraged: (episodeDetails: any) => void;
  episodeDetailsStoraged: {
    content: {
      podcastDetails: PodcastDetailsInfoType;
      episodeDetails: EpisodeDetailsType;
    };
    updatedAt?: string;
  };
}
