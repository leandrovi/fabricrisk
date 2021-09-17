import { getType } from "typesafe-actions";

import {
  handleRequestStart,
  signInSuccess,
  signInFailure,
  signOut,
} from "./actions";

import { SessionsActions, SessionsState } from "./types";
import { User } from "../../../interfaces";

const initialState: SessionsState = {
  user: {} as User,
  token: "",
  loading: false,
  error: "",
};

export function sessions(
  state = initialState,
  action: SessionsActions
): SessionsState {
  switch (action.type) {
    case getType(handleRequestStart): {
      return {
        ...state,
        loading: true,
      };
    }

    case getType(signInSuccess): {
      const { user, token } = action.payload;

      return {
        ...state,
        user,
        token,
        loading: false,
      };
    }

    case getType(signInFailure): {
      const { message } = action.payload;

      return {
        ...state,
        loading: false,
        error: message,
      };
    }

    case getType(signOut): {
      return {
        ...state,
        user: {} as User,
        token: "",
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
