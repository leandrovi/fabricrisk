import { NextFunction, Request, Response } from "express";

import HttpException from "../exceptions/http-exception";
 
function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.statusCode || 500;
  const message = error.message || "Sorry, something went wrong";

  response
    .status(status)
    .json({
      status,
      message,
    });
}
 
export default errorMiddleware;