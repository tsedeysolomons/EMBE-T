const request = require("supertest");
const app = require("../app");
/*
describe("POST /api/user/auth/login", () => {
  /*
  it("should return 200 OK with a message", async () => {
    const user = { email: "tsedeys@gmail.com", password: "1234qwed!" };

    const response = await request(app).get("/api/user/auth/login").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Login Successfull!" });
  });
  

  it("should return 401 with a message", async () => {
    const user = { email: "tsedeys@gmail.com", password: "1234qwed!" };

    const response = (await request(app).post("/api/user/auth/login")).send(
      user
    );

    expect(response.status).toBe(401);
    // Assertions
    expect(response.body).toHaveProperty("message", "User  Not Found !");
  });
});
*/

describe("POST /api/user/auth/login", () => {
  it("should create a new user and return 201", async () => {
    const newUser = {
      firstName: "Eyu",
      lastName: "Eyuel",
      phone: "09137866",
      email: "eyue@gmail.com",
      password: "1234qwed!",
      role: "user",
    };

    const response = await request(app)
      .post("/api/user/auth/create")
      .send(newUser) // Send JSON data
      .expect(201); // Expect status code 201

    // Assertions
    expect(response.body).toHaveProperty(
      "message",
      "User created successfully"
    );
    //expect(response.body.user).toMatchObject(newUser);
  });

  it("should return 400 if name or email is missing", async () => {
    const incompleteUser = { name: "John Doe" }; // Missing email

    const response = await request(app)
      .post("/api/user/auth/login")
      .send(incompleteUser)
      .expect(400);

    // Assertions
    expect(response.body).toHaveProperty(
      "message",
      "Invalid email,password or role try again"
    );
  });
});
