import { TurnTypes } from "../../types";

export enum GameStateActionTypes {
  ToggleStartedType = "TOGGLE_STARTED",
  SetTurnType = "SET_TURN",
  ResetGameStateType = "RESET_GAME_STATE",
}

type ToggleStartedObjectType = { type: GameStateActionTypes.ToggleStartedType };
type SetTurnObjectType = {
  type: GameStateActionTypes.SetTurnType;
  payload: TurnTypes;
};
type ResetGameStateObjectType = {
  type: GameStateActionTypes.ResetGameStateType;
};
export type GameStateActionObjectTypes =
  | ToggleStartedObjectType
  | SetTurnObjectType
  | ResetGameStateObjectType;

export const ToggleStarted: () => ToggleStartedObjectType = () => ({
  type: GameStateActionTypes.ToggleStartedType,
});

export const SetTurn: (turn: TurnTypes) => SetTurnObjectType = (
  turn: TurnTypes
) => ({
  type: GameStateActionTypes.SetTurnType,
  payload: turn,
});

export const ResetGameState: () => ResetGameStateObjectType = () => ({
  type: GameStateActionTypes.ResetGameStateType,
});
