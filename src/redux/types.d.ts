import { Action } from "redux";
import { store } from "./store";

interface CustomActionType<T> extends Action {
  type: string;
  payload: T;
}

interface GameStateObjectType {
  started: boolean;
  turn: TurnTypes;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
