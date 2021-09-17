import { Middleware } from "redux";
import { getType } from "typesafe-actions";

import api from "../../../services/api";

import {
  handleRequestStart,
  signInRequest,
  signInSuccess,
  signInFailure,
} from "./actions";
import { SessionsActions, CreateSessionResponse, ApiError } from "./types";

export const sessionsMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  async (action: SessionsActions) => {
    if (action.type === getType(signInRequest)) {
      try {
        dispatch(handleRequestStart());

        const { username, password } = action.payload;

        const { data: session } = await api.post<CreateSessionResponse>(
          "/sessions",
          {
            username,
            password,
          }
        );

        dispatch(
          signInSuccess(session.token, {
            username,
            password,
          })
        );
      } catch (err) {
        dispatch(signInFailure(err as ApiError));
      }
    }

    return next(action);
  };
