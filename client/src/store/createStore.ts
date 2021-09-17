import { createStore, applyMiddleware, Reducer, Middleware } from "redux";

import { SessionsState } from "./types";
import { SessionsActions } from "./modules/sessions/types";

export interface StoreState {
  sessions: SessionsState;
}

export type StoreAction = SessionsActions;

const store = (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};

export default store;
