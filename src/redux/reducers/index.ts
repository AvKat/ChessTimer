import { combineReducers } from "redux";
import { gameStateReducer } from "./gameStateReducer";

export const mainReducer = combineReducers({
  gameState: gameStateReducer,
});
