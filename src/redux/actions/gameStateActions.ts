import { TurnTypes } from "../../types";

export enum GameStateActionTypes {
  SetTurnType = "SET_TURN",
  ResetGameStateType = "RESET_GAME_STATE",
  SetStartedType = "SET_STARTED",
}

type SetTurnObjectType = {
  type: GameStateActionTypes.SetTurnType;
  payload: TurnTypes;
};
type ResetGameStateObjectType = {
  type: GameStateActionTypes.ResetGameStateType;
};
type SetStartedObjectType = {
  type: GameStateActionTypes.SetStartedType;
  payload: boolean;
};
export type GameStateActionObjectTypes =
  | SetTurnObjectType
  | ResetGameStateObjectType
  | SetStartedObjectType;

export const SetTurn: (turn: TurnTypes) => SetTurnObjectType = (
  turn: TurnTypes
) => ({
  type: GameStateActionTypes.SetTurnType,
  payload: turn,
});

export const ResetGameState: () => ResetGameStateObjectType = () => ({
  type: GameStateActionTypes.ResetGameStateType,
});

export const SetStarted: (s: boolean) => SetStartedObjectType = (s) => ({
  type: GameStateActionTypes.SetStartedType,
  payload: s,
});
