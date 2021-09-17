import { User } from "../interfaces";

export interface SessionsState {
  token: string;
  user: User;
  loading: boolean;
  error: string;
}
