const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

describe("Reservation Controller", () => {
  let reservationId;

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a new reservation", async () => {
    const response = await request(app)
      .post("/api/reservation/create")
      .send({
        trainId: 1,
        passengerId: 1,
        ticketNo: 12345,
        selectFromTo: "Station A - Station B",
        departureDate: "2023-12-01T10:00:00Z",
        arrivalDate: "2023-12-01T14:00:00Z",
        dateOfReservation: "2023-11-01T10:00:00Z",
        setNo: 12,
        class: "Economy",
        status: "Pending",
        referenceCode: "ABC123",
      })
      .expect(201);

    reservationId = response.body.reservation.id;
    expect(response.body).toHaveProperty(
      "message",
      "Reservation created successfully"
    );
    expect(response.body.reservation).toHaveProperty("id");
  });

  it("should get all reservations", async () => {
    const response = await request(app).get("/api/reservation").expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it("should get a reservation by ID", async () => {
    const response = await request(app)
      .get(`/api/reservation/${reservationId}`)
      .expect(200);

    expect(response.body).toHaveProperty("id", reservationId);
  });

  it("should update a reservation", async () => {
    const response = await request(app)
      .put(`/api/reservation/${reservationId}`)
      .send({
        trainId: 1,
        passengerId: 1,
        ticketNo: 12345,
        selectFromTo: "Station A - Station B",
        departureDate: "2023-12-01T10:00:00Z",
        arrivalDate: "2023-12-01T14:00:00Z",
        dateOfReservation: "2023-11-01T10:00:00Z",
        setNo: 12,
        class: "Economy",
        status: "Confirmed",
        referenceCode: "ABC123",
      })
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Reservation updated successfully"
    );
    expect(response.body.reservation).toHaveProperty("status", "Confirmed");
  });

  it("should delete a reservation", async () => {
    const response = await request(app)
      .delete(`/api/reservation/${reservationId}`)
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Reservation deleted successfully"
    );
  });
});
