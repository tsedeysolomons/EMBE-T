const request = require("supertest");
const app = require("../app");
const prisma = require("../service/db");
const bcrypt = require("bcrypt");

let eticketId;

describe("ETicket Controller", () => {
  beforeAll(async () => {
    // Create necessary data for the tests
    await prisma.passenger.create({
      data: {
        id: 1,
        title: "Mr",
        firstName: "John",
        middleName: "Doe",
        lastName: "Smith",
        dateOfBirth: new Date("1990-01-01"),
        country: "USA",
        email: "john.doe@example.com",
        password: await bcrypt.hash("1234qwed!", 10),
        phone: "1234567890",
      },
    });

    await prisma.train.create({
      data: {
        id: 1,
        name: "Express Train 1",
        trainNo: 101,
        startStation: "Addis Ababa",
        endStation: "Dire Dawa",
        stops: JSON.stringify(["Adama", "Awash"]),
        departureTime: new Date("2025-01-05T06:00:00.000Z"),
        arrivalTime: new Date("2025-01-05T12:00:00.000Z"),
        type: "Express",
        status: "On-Time",
        economyPrice: 500,
        firstPrice: 800,
        capacity: 200,
        adminId: 1,
      },
    });

    await prisma.payment.create({
      data: {
        id: 1,
        paymentType: "Credit Card",
        paymentAmount: 100.0,
        paymentDate: new Date("2023-11-01T10:00:00Z"),
        currency: "ETB",
        status: "Completed",
        reservationId: 1,
      },
    });
  });

  afterAll(async () => {
    await prisma.eTicket.deleteMany();
    await prisma.train.deleteMany();
    await prisma.payment.deleteMany();
    await prisma.passenger.deleteMany();
    await prisma.$disconnect();
  });

  it("should create a new ETicket", async () => {
    const response = await request(app)
      .post("/api/eticket/create")
      .send({
        ticketNo: 12345,
        passengerId: 1,
        trainId: 1,
        setNo: 12,
        class: "Economy",
        journeyDate: "2023-12-01T10:00:00Z",
        departureStatus: "On-Time",
        ticketPrice: 100,
        bookingInfo: "Booking Info",
        paymentId: 1,
      })
      .expect(201);

    eticketId = response.body.eticket.id;
    expect(response.body.eticket).toHaveProperty("id");
    expect(response.body.eticket.ticketNo).toBe(12345);
  });

  it("should get all ETickets", async () => {
    const response = await request(app).get("/api/eticket").expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it("should get an ETicket by ID", async () => {
    const response = await request(app)
      .get(`/api/eticket/${eticketId}`)
      .expect(200);

    expect(response.body).toHaveProperty("id", eticketId);
  });

  it("should update an ETicket", async () => {
    const response = await request(app)
      .put(`/api/eticket/${eticketId}`)
      .send({
        ticketNo: 12345,
        passengerId: 1,
        trainId: 1,
        setNo: 12,
        class: "Economy",
        journeyDate: "2023-12-01T10:00:00Z",
        departureStatus: "Delayed",
        ticketPrice: 100,
        bookingInfo: "Booking Info Updated",
        paymentId: 1,
      })
      .expect(200);

    expect(response.body.eticket).toHaveProperty("id");
    expect(response.body.eticket.departureStatus).toBe("Delayed");
  });

  it("should delete an ETicket", async () => {
    await request(app)
      .delete(`/api/eticket/${eticketId}`)
      .expect(200);

    const response = await request(app)
      .get(`/api/eticket/${eticketId}`)
      .expect(404);

    expect(response.body.message).toBe("ETicket not found!");
  });
});
