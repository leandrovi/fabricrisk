import express from "express";
import cors from "cors";

import errorMiddleware from "./middlewares/error.middleware";

import SessionsController from "./modules/sessions/sessions.controller";
import UsersController from "./modules/users/users.controller";

const sessionsController = new SessionsController();
const usersController = new UsersController();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/sessions", sessionsController.create);
app.get("/users", usersController.show);

app.use(errorMiddleware);

export default app;
