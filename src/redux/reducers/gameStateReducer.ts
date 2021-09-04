import { GameStateActionObjectTypes } from "../actions/gameStateActions";
import { GameStateObjectType } from "../types";

const initialState = {started: false, turn: ""}

export const gameStateReducer: (
  state: GameStateObjectType,
  action: GameStateActionObjectTypes
) => GameStateObjectType = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STARTED":
      return { ...state, started: !state.started };
    case "SET_TURN":
      return { ...state, turn: action.payload };
    case "RESET_GAME_STATE":
      return initialState
    default:
      return state;
  }
};
