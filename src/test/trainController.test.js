const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");

describe("Train Controller", () => {
  let trainId;
  let reservationId;

  afterAll(async () => {
    await prisma.$disconnect();
  });

  // Train CRUD operations
  it("should create a new train", async () => {
    const response = await request(app)
      .post("/api/train/create")
      .send({
        name: "Express Train 1",
        trainNo: 101,
        startStation: "Addis Ababa",
        endStation: "Dire Dawa",
        stops: JSON.stringify(["Adama", "Awash"]),
        departureTime: "2025-01-05T06:00:00.000Z",
        arrivalTime: "2025-01-05T12:00:00.000Z",
        type: "Express",
        status: "On-Time",
        economyPrice: 500,
        firstPrice: 800,
        capacity: 200,
        adminId: 1,
      })
      .expect(201);

    trainId = response.body.train.id;
    expect(response.body).toHaveProperty(
      "message",
      "Train created successfully"
    );
    expect(response.body.train).toHaveProperty("id");
  });

  it("should get all trains", async () => {
    const response = await request(app).get("/api/train").expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it("should get a train by ID", async () => {
    const response = await request(app)
      .get(`/api/train/${trainId}`)
      .expect(200);

    expect(response.body).toHaveProperty("id", trainId);
  });

  it("should update a train", async () => {
    const response = await request(app)
      .put(`/api/train/${trainId}`)
      .send({
        name: "Express Train 1 Updated",
        trainNo: 101,
        startStation: "Addis Ababa",
        endStation: "Dire Dawa",
        stops: JSON.stringify(["Adama", "Awash"]),
        departureTime: "2025-01-05T06:00:00.000Z",
        arrivalTime: "2025-01-05T12:00:00.000Z",
        type: "Express",
        status: "On-Time",
        economyPrice: 500,
        firstPrice: 800,
        capacity: 200,
        adminId: 1,
      })
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Train updated successfully"
    );
    expect(response.body.train).toHaveProperty(
      "name",
      "Express Train 1 Updated"
    );
  });

  it("should delete a train", async () => {
    const response = await request(app)
      .delete(`/api/train/${trainId}`)
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Train deleted successfully"
    );
  });

  // Reservation CRUD operations
  it("should create a new reservation", async () => {
    const response = await request(app)
      .post("/api/train/create")
      .send({
        trainId: 1,
        passengerId: 1,
        selectFromTo: "Station A - Station B",
        departureDate: "2023-12-01T10:00:00Z",
        arrivalDate: "2023-12-01T14:00:00Z",
        setNo: 12,
        classType: "Economy",
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
    const response = await request(app).get("/api/train").expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });


  it("should delete a reservation", async () => {
    const response = await request(app)
      .delete(`/api/train/${reservationId}`)
      .expect(200);

    expect(response.body).toHaveProperty(
      "message",
      "Reservation deleted successfully"
    );
  });
});
