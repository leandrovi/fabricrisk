import { ActionType } from "typesafe-actions";
import { User } from "../../../interfaces";

import * as actions from "./actions";

export type { SessionsState } from "../../types";
export type SessionsActions = ActionType<typeof actions>;

export interface CreateSessionRequest {
  username: string;
  password: string;
}

export interface CreateSessionResponse {
  token: string;
}

export interface ApiError {
  status: number;
  message: string;
}
