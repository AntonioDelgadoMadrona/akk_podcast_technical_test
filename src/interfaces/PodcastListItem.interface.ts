export interface PodcastListItemType {
  category: Object;
  id: {
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
  "im:name": {
    label: string;
  };
}
