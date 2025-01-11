const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

let server;
let adminId;

describe("Admin Controller", () => {
  beforeAll(() => {
    // Start the app on a dynamic port to prevent port conflicts
    server = app.listen(0);
  });

  afterAll(async () => {
    // Clean up the database
    await prisma.admin.deleteMany();
    await prisma.$disconnect();
    // Close the server
    server.close();
  });

  it("should create a new admin", async () => {
    const response = await request(server)
      .post("/api/admin/create")
      .send({
        name: "Admin Name",
        email: "admin@example.com",
        password: "adminpassword",
        contactNo: "1234567890",
        username: "admin",
      })
      .expect(200);

    adminId = response.body.admin.id;
    expect(response.body.admin).toHaveProperty("id");
    expect(response.body.admin.email).toBe("admin@example.com");
  });

  it("should get all admins", async () => {
    const response = await request(server).get("/api/admin").expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should get admin by id", async () => {
    const response = await request(server)
      .get(`/api/admin/${adminId}`)
      .expect(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toBe(adminId);
  });

  it("should update admin", async () => {
    const response = await request(server)
      .put(`/api/admin/${adminId}`)
      .send({
        name: "Updated Admin Name",
        email: "updatedadmin@example.com",
        password: "newpassword",
      })
      .expect(200);

    expect(response.body.admin).toHaveProperty("id");
    expect(response.body.admin.email).toBe("updatedadmin@example.com");
  });

  it("should delete admin", async () => {
    await request(server).delete(`/api/admin/${adminId}`).expect(200);

    const response = await request(server)
      .get(`/api/admin/${adminId}`)
      .expect(404);

    expect(response.body.message).toBe("Admin not found!");
  });
});
