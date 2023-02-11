// DEPENDENCIES
import React from "react";
// STYLED COMPONENTS
import { AppContainer } from "./App.styled";
// COMPONENTS
import PodcastList from "./podcast-list/podcast-list.component";

function App() {
  return (
    <AppContainer>
      <h1>Hello World!</h1>
      <PodcastList />
    </AppContainer>
  );
}

export default App;
