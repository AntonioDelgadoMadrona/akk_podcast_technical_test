// DEPENDENCIES
import React from "react";
// COMPONENTS
import Layout from "./components/layout/layout.component";
import PodcastList from "./views/podcast-list/podcast-list.component";

const App: React.FC<{}> = (): React.ReactElement => {
  return (
    <Layout>
      <PodcastList />
    </Layout>
  );
};

export default App;
