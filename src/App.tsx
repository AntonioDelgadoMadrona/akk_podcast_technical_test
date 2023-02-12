// DEPENDENCIES
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Layout from "./components/layout/layout.component";
import PodcastList from "./views/podcast-list/podcast-list.component";
import PodcastDetails from "./views/podcast-details/podcast-details.component";
import EpisodeDetails from "./views/episode-details/episode-details.component";

const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:id" element={<PodcastDetails />} />
          <Route path="/podcast/:id/episode/:episodeId" element={<EpisodeDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
