import UsersService from "./users.service";

let usersService: UsersService;

describe("Show User", () => {
  beforeEach(() => {
    usersService = new UsersService();
  });

  it("should be able to create return a valid user", async () => {
    const user = await usersService.show();

    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("datetime");
    expect(user).toHaveProperty("dirname");
  });
});
