import SessionsService from "./sessions.service";
import mocks from "./sessions.mocks";

let sessionsService: SessionsService;

describe("Create Session", () => {
  beforeEach(() => {
    sessionsService = new SessionsService();
  });

  it("should be able to create a new session with valid credentials", async () => {
    const token = await sessionsService.create(mocks.validUser);
    expect(token).toBeTruthy();
  });

  it("should not be able to create a new session with invalid username or password", async () => {
    expect(sessionsService.create(mocks.invalidUser)).rejects.toEqual({
      statusCode: 404,
      message: "You have entered an invalid username or password",
    });
  });
});
