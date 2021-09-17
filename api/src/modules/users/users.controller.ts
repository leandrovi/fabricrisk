import { NextFunction, Request, Response } from "express";

import UsersService from "./users.service";

class UsersController {
  public async show(request: Request, response: Response, next: NextFunction) {
    try {
      const service = new UsersService();

      const user = await service.show();

      return response.json(user);
    } catch (err) {
      return next(err);
    }
  }
}

export default UsersController;
