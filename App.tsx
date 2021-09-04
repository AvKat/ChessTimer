import React from "react";
import { Provider } from "react-redux";
import { Main } from "./src/Main";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
