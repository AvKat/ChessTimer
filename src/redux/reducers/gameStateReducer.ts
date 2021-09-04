import {
  GameStateActionObjectTypes,
  GameStateActionTypes,
} from "../actions/gameStateActions";
import { GameStateObjectType } from "../types";

const initialState = { started: false, turn: "" };

export const gameStateReducer: (
  state: GameStateObjectType,
  action: GameStateActionObjectTypes
) => GameStateObjectType = (state = initialState, action) => {
  switch (action.type) {
    case GameStateActionTypes.SetTurnType:
      return { ...state, turn: action.payload };
    case GameStateActionTypes.ResetGameStateType:
      return initialState;
    case GameStateActionTypes.SetStartedType:
      return { ...state, started: action.payload };
    default:
      return state;
  }
};
