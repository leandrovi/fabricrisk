import { User } from "./users.types";

class UsersService {
  public async show(): Promise<Omit<User, "password">> {
    return {
      username: "Talagent",
      datetime: new Date().toLocaleString(),
      dirname: __dirname,
    };
  }
}

export default UsersService;
