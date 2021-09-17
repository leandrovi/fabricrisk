import jwt from "jsonwebtoken";

import HttpException from "../../exceptions/http-exception";
import { User } from "../users/users.types";

import { CreateSessionRequest } from "./sessions.dtos";

class SessionsService {
  private tokenExpiration = "15d";

  public async create(fields: CreateSessionRequest): Promise<string> {
    const isValid = this.validateCredentials(fields);

    if (!isValid) {
      throw new HttpException(
        401,
        "You have entered an invalid username or password"
      );
    }

    const { username } = fields;
    const token = jwt.sign({ id: username }, "fabricriskcodechallenge", {
      expiresIn: this.tokenExpiration,
    });

    return token;
  }

  private validateCredentials(user: User): boolean {
    return user.username === "Talagent" && user.password === "password1";
  }
}

export default SessionsService;