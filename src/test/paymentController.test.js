const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

describe("Payment Controller", () => {
  let paymentId;

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a new payment", async () => {
    const response = await request(app)
      .post("/api/payment/create")
      .send({
        paymentType: "Credit Card",
        paymentAmount: 100.0,
        paymentDate: "2023-11-01T10:00:00Z",
        currency: "ETB",
        status: "Completed",
        reservationId: 1,
        onlineTransactionId: 1,
      })
      .expect(201);

    paymentId = response.body.payment.id;
    expect(response.body).toHaveProperty(
      "message",
      "Payment created successfully"
    );
    expect(response.body.payment).toHaveProperty("id");
  });

  it("should get all payments", async () => {
    const response = await request(app).get("/api/payment").expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it("should get a payment by ID", async () => {
    const response = await request(app)
      .get(`/api/payment/${paymentId}`)
      .expect(200);

    expect(response.body).toHaveProperty("id", paymentId);
  });

  it("should update a payment", async () => {
    const response = await request(app)
      .put(`/api/payment/${paymentId}`)
      .send({
        paymentType: "Credit Card",
        paymentAmount: 150.0,
        paymentDate: "2023-11-01T10:00:00Z",
        currency: "ETB",
        status: "Completed",
        reservationId: 1,
        onlineTransactionId: 1,
      })
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Payment updated successfully"
    );
    expect(response.body.payment).toHaveProperty("paymentAmount", 150.0);
  });

  it("should delete a payment", async () => {
    const response = await request(app)
      .delete(`/api/payment/${paymentId}`)
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Payment deleted successfully"
    );
  });
});
