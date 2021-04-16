import React, { useEffect, useReducer } from "react";
import { appState } from "./Context";
import Reducers from "./reducers";

const { AppReducer } = Reducers;

export const AppState = ({ children }) => {
  const { Provider } = appState;

  // Alters app state on load
  useEffect(() => {
    
  }, []);
  const { initialAppState, stateReducer } = AppReducer;
  const [state, dispatch] = useReducer(stateReducer, initialAppState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
