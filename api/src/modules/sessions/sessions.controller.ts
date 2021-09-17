import { NextFunction, Request, Response } from "express";

import SessionsService from "./sessions.service";

class SessionsController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const service = new SessionsService();

      const token = await service.create(request.body);

      return response.json({ token });
    } catch (err) {
      return next(err);
    }
  }
}

export default SessionsController;
