import React, { useState } from "react";

const initialState = {
  started: false,
  turn: "",
};

export const TimerContext = React.createContext({
  state: initialState,
  setState: (ns: {}) => {},
  reset: () => {}
});

export const TimerContextProvider: React.FC = ({ children }) => {
  const [state, _setState] = useState(initialState);

  const setState = (ns: {}) => _setState((s) => ({ ...s, ...ns }));
  const reset = () => setState(initialState)

  return (
    <TimerContext.Provider value={{ state, setState, reset }}>
      {children}
    </TimerContext.Provider>
  );
};
