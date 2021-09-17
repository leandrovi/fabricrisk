import { createAction } from "typesafe-actions";

import { User } from "../../../interfaces";
import { ApiError, CreateSessionRequest } from "./types";

export const handleRequestStart = createAction(
  "@sessions/handleRequestStart",
  () => null
)<null>();

export const signInRequest = createAction(
  "@sessions/signInRequest",
  (data: CreateSessionRequest) => data
)<CreateSessionRequest>();

export const signInSuccess = createAction(
  "@sessions/signInSuccess",
  (token: string, user: User) => ({
    token,
    user,
  })
)<{ token: string; user: User }>();

export const signInFailure = createAction(
  "@sessions/signInFailure",
  (error: ApiError) => error
)<ApiError>();

export const signOut = createAction("@sessions/signOut", () => null)<null>();
