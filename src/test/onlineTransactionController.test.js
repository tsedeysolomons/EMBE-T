const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

describe("OnlineTransaction Controller", () => {
  let onlineTransactionId;

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a new online transaction", async () => {
    const response = await request(app)
      .post("/api/onlineTransaction/create")
      .send({
        ticketId: "12345",
        amount: 100.0,
        status: "Completed",
        date: "2023-11-01T10:00:00Z",
        paymentId: 1,
      })
      .expect(201);

    onlineTransactionId = response.body.onlineTransaction.id;
    expect(response.body).toHaveProperty(
      "message",
      "OnlineTransaction created successfully"
    );
    expect(response.body.onlineTransaction).toHaveProperty("id");
  });

  it("should get all online transactions", async () => {
    const response = await request(app)
      .get("/api/onlineTransaction")
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it("should get an online transaction by ID", async () => {
    const response = await request(app)
      .get(`/api/onlineTransaction/${onlineTransactionId}`)
      .expect(200);

    expect(response.body).toHaveProperty("id", onlineTransactionId);
  });

  it("should update an online transaction", async () => {
    const response = await request(app)
      .put(`/api/onlineTransaction/${onlineTransactionId}`)
      .send({
        ticketId: "12345",
        amount: 150.0,
        status: "Completed",
        date: "2023-11-01T10:00:00Z",
        paymentId: 1,
      })
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "OnlineTransaction updated successfully"
    );
    expect(response.body.onlineTransaction).toHaveProperty("amount", 150.0);
  });

  it("should delete an online transaction", async () => {
    const response = await request(app)
      .delete(`/api/onlineTransaction/${onlineTransactionId}`)
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "OnlineTransaction deleted successfully"
    );
  });
});
