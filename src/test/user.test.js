const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

describe("User Controller", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("POST /api/user/auth/create", () => {
    it("should create a new user and return 201", async () => {
      const newUser = {
        title: "Mr",
        first_name: "John",
        middle_name: "Doe",
        last_name: "Smith",
        date_of_birth: "1990-01-01",
        country: "USA",
        email: "john.doe@example.com",
        password: "1234qwed!",
        phone: "1234567890",
      };

      const response = await request(app)
        .post("/api/user/auth/create")
        .send(newUser)
        .expect(201);

      expect(response.body).toHaveProperty(
        "message",
        "User created successfully"
      );
    });

    it("should return 400 if any field is missing", async () => {
      const incompleteUser = {
        title: "Mr",
        first_name: "John",
        last_name: "Smith",
        date_of_birth: "1990-01-01",
        country: "USA",
        email: "john.doe@example.com",
        password: "1234qwed!",
        phone: "1234567890",
      };

      const response = await request(app)
        .post("/api/user/auth/create")
        .send(incompleteUser)
        .expect(400);

      expect(response.body).toHaveProperty(
        "message",
        "All fields are required!"
      );
    });

    it("should return 400 if user already exists", async () => {
      const existingUser = {
        title: "Mr",
        first_name: "John",
        middle_name: "Doe",
        last_name: "Smith",
        date_of_birth: "1990-01-01",
        country: "USA",
        email: "john.doe@example.com",
        password: "1234qwed!",
        phone: "1234567890",
      };

      await prisma.passenger.create({ data: existingUser });

      const response = await request(app)
        .post("/api/user/auth/create")
        .send(existingUser)
        .expect(400);

      expect(response.body).toHaveProperty("message", "User already exists!");
    });
  });

  describe("POST /api/user/auth/login", () => {
    it("should login a user and return 200 with accessToken", async () => {
      const user = {
        email: "john.doe@example.com",
        password: "1234qwed!",
      };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(user)
        .expect(200);

      expect(response.body).toHaveProperty("accessToken");
    });

    it("should return 400 if email or password is missing", async () => {
      const incompleteUser = { email: "john.doe@example.com" };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(incompleteUser)
        .expect(400);

      expect(response.body).toHaveProperty(
        "message",
        "Invalid email or password"
      );
    });

    it("should return 401 if user is not found", async () => {
      const nonExistentUser = {
        email: "nonexistent@example.com",
        password: "1234qwed!",
      };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(nonExistentUser)
        .expect(401);

      expect(response.body).toHaveProperty("message", "User not found!");
    });

    it("should return 401 if password is invalid", async () => {
      const user = {
        email: "john.doe@example.com",
        password: "wrongpassword",
      };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(user)
        .expect(401);

      expect(response.body).toHaveProperty("message", "Invalid password");
    });
  });
});
/*
const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

describe("User Controller", () => {
  describe("POST /api/user/auth/create", () => {
    it("should create a new user and return 201", async () => {
      const newUser = {
        title: "Mr",
        first_name: "John",
        middle_name: "Doe",
        last_name: "Smith",
        date_of_birth: "1990-01-01",
        country: "USA",
        email: "john.doe@example.com",
        password: "1234qwed!",
        phone: "1234567890",
      };

      const response = await request(app)
        .post("/api/user/auth/create")
        .send(newUser)
        .expect(201);

      expect(response.body).toHaveProperty(
        "message",
        "User created successfully"
      );
    });

    it("should return 400 if any field is missing", async () => {
      const incompleteUser = {
        title: "Mr",
        first_name: "John",
        last_name: "Smith",
        date_of_birth: "1990-01-01",
        country: "USA",
        email: "john.doe@example.com",
        password: "1234qwed!",
        // phone: "1234567890", // Remove one field to test missing field scenario
      };

      const response = await request(app)
        .post("/api/user/auth/create")
        .send(incompleteUser)
        .expect(400);

      expect(response.body).toHaveProperty(
        "message",
        "All fields are required!"
      );
    });

    it("should return 400 if user already exists", async () => {
      const existingUser = {
        title: "Mr",
        first_name: "John",
        middle_name: "Doe",
        last_name: "Smith",
        date_of_birth: "1990-01-01",
        country: "USA",
        email: "john.doe@example.com", // Using the same email as in the first test
        password: "1234qwed!",
        phone: "1234567890",
      };

      try {
        await prisma.user.create({ data: existingUser }); // Assuming your Prisma model is named 'user'
      } catch (e) {
        console.log(e);
      }

      const response = await request(app)
        .post("/api/user/auth/create")
        .send(existingUser)
        .expect(400);

      expect(response.body).toHaveProperty("message", "User already exists!");
    });
  });

  describe("POST /api/user/auth/login", () => {
    it("should login a user and return 200 with accessToken", async () => {
      const user = {
        email: "john.doe@example.com",
        password: "1234qwed!",
      };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(user)
        .expect(200);

      expect(response.body).toHaveProperty("accessToken");
    });

    it("should return 400 if email or password is missing", async () => {
      const incompleteUser = { email: "john.doe@example.com" };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(incompleteUser)
        .expect(400);

      expect(response.body).toHaveProperty(
        "message",
        "Invalid email or password"
      );
    });

    it("should return 401 if user is not found", async () => {
      const nonExistentUser = {
        email: "nonexistent@example.com",
        password: "1234qwed!",
      };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(nonExistentUser)
        .expect(401);

      expect(response.body).toHaveProperty("message", "User not found!");
    });

    it("should return 401 if password is invalid", async () => {
      const user = {
        email: "john.doe@example.com",
        password: "wrongpassword",
      };

      const response = await request(app)
        .post("/api/user/auth/login")
        .send(user)
        .expect(401);

      expect(response.body).toHaveProperty("message", "Invalid password");
    });
  });
});
*/
