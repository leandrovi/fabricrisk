import { combineReducers } from "redux";

import { StoreState } from "../createStore";
import { sessions } from "./sessions/reducer";

export default combineReducers<StoreState>({
  sessions,
});
