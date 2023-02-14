// DEPENDENCIES
import React, { createContext, useContext } from "react";
// HOOKS
import { useLocalStorage } from "../hooks/useLocalStorage";
// INTERFACES
import { AppContextPropsType } from "./interfaces/app.context.interface";

export const AppContext = createContext<AppContextPropsType>({
  setPodcastListStoraged: () => {},
  podcastListStoraged: { content: [] },
  setPodcastDetailStoraged: () => {},
  // @ts-ignore: I cannot find a way to fix this error
  podcastDetailStoraged: { content: {} },
  setEpisodeDetailsStoraged: () => {},
  // @ts-ignore: I cannot find a way to fix this error
  episodeDetailsStoraged: { content: {} },
});

export const AppContextProvider: React.FC<any> = ({ children }: any) => {
  const [podcastListStoraged, setPodcastListStoraged] = useLocalStorage("podcastList", {});
  const [podcastDetailStoraged, setPodcastDetailStoraged] = useLocalStorage("podcastDetails", {});
  const [episodeDetailsStoraged, setEpisodeDetailsStoraged] = useLocalStorage("episodeDetails", {});

  return (
    <AppContext.Provider
      value={{
        setPodcastListStoraged,
        podcastListStoraged,
        setPodcastDetailStoraged,
        podcastDetailStoraged,
        setEpisodeDetailsStoraged,
        episodeDetailsStoraged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextPropsType => useContext(AppContext);
