import React from "react";
import { Main } from "./src/Main";
import { TimerContextProvider } from "./src/TimerContext";

const App = () => {
  return (
    <TimerContextProvider>
      <Main />
    </TimerContextProvider>
  );
};

export default App;
