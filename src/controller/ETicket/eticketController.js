const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");

const createETicket = async (req, res) => {
  try {
    const { reservationId } = req.body;

    if (!reservationId) {
      return res.status(400).send({ message: "Reservation ID is required!" });
    }

    const reservationExist = await prisma.reservation.findUnique({
      where: {
        id: parseInt(reservationId),
      },
    });

    const paymentExist = await prisma.payment.findUnique({
      where: {
        reservationId: parseInt(reservationId),
      },
    });

    if (!reservationExist || !paymentExist) {
      return res
        .status(404)
        .send({ message: "Reservation or Payment not found!" });
    }

    const {
      ticketNo,
      userId,
      trainId,
      setNo,
      class: ticketClass,
      departureDate: journeyDate,
      status: departureStatus,
      paymentAmount: ticketPrice,
    } = { ...reservationExist, ...paymentExist };

    const bookingInfo = `Reservation ID: ${reservationId}, Train ID: ${trainId}, Seat No: ${setNo}, Class: ${ticketClass}`;

    if (
      !ticketNo ||
      !userId ||
      !trainId ||
      !setNo ||
      !ticketClass ||
      !journeyDate ||
      !departureStatus ||
      !ticketPrice ||
      !bookingInfo
    ) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const ticketExist = await prisma.eTicket.findUnique({
      where: {
        ticketNo: ticketNo,
      },
    });

    if (ticketExist) {
      return res.status(409).send({ message: "E-Ticket already exists!" });
    }

    const eticketData = filterNotUndefined({
      ticketNo,
      userId,
      trainId,
      setNo,
      class: ticketClass,
      journeyDate,
      departureStatus,
      ticketPrice,
      bookingInfo,
      paymentId: paymentExist.id,
    });

    const eticket = await prisma.eTicket.create({
      data: {
        ...eticketData,
      },
    });

    res.status(201).json({ message: "ETicket created successfully", eticket });
    console.log("ETicket created successfully");
  } catch (error) {
    console.error(`Error creating E-Ticket: ${error.message}`);
    res.status(500).send({ message: error.message });
  }
};

const getETickets = async (req, res) => {
  try {
    const etickets = await prisma.eTicket.findMany();
    res.status(200).json(etickets);
  } catch (error) {
    console.error(`Error fetching E-Tickets: ${error.message}`);
    res.status(500).send({ message: error.message });
  }
};

const getETicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const eticket = await prisma.eTicket.findUnique({
      where: { id: parseInt(id) },
    });

    if (!eticket) {
      return res.status(404).send({ message: "ETicket not found!" });
    }

    res.status(200).json(eticket);
  } catch (error) {
    console.error(`Error fetching E-Ticket by ID: ${error.message}`);
    res.status(500).send({ message: error.message });
  }
};

const updateETicket = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      ticketNo,
      userId,
      trainId,
      setNo,
      class: ticketClass,
      journeyDate,
      departureStatus,
      ticketPrice,
      bookingInfo,
      paymentId,
    } = req.body;

    // Fetch existing ticket
    const existingETicket = await prisma.eTicket.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingETicket) {
      return res.status(404).send({ message: "ETicket not found!" });
    }

    // Merge existing values with new values (prioritize new values if provided)
    const updatedData = {
      ticketNo: ticketNo ?? existingETicket.ticketNo,
      userId: userId ?? existingETicket.userId,
      trainId: trainId ?? existingETicket.trainId,
      setNo: setNo ?? existingETicket.setNo,
      class: ticketClass ?? existingETicket.class,
      journeyDate: journeyDate
        ? new Date(journeyDate)
        : existingETicket.journeyDate,
      departureStatus: departureStatus ?? existingETicket.departureStatus,
      ticketPrice: ticketPrice ?? existingETicket.ticketPrice,
      bookingInfo: bookingInfo ?? existingETicket.bookingInfo,
      paymentId: paymentId ?? existingETicket.paymentId,
    };

    // Update the e-ticket in the database
    const updatedETicket = await prisma.eTicket.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });

    res
      .status(200)
      .json({ message: "ETicket updated successfully", updatedETicket });
  } catch (error) {
    console.error(`Error updating E-Ticket: ${error.message}`);
    res.status(500).send({ message: error.message });
  }
};

const deleteETicket = async (req, res) => {
  try {
    const { id } = req.params;
    const eticketExist = await prisma.eTicket.findUnique({
      where: { id: parseInt(id) },
    });

    if (!eticketExist) {
      return res.status(404).send({ message: "ETicket not found!" });
    }

    await prisma.eTicket.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "ETicket deleted successfully" });
  } catch (error) {
    console.error(`Error deleting E-Ticket: ${error.message}`);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createETicket,
  getETickets,
  getETicketById,
  updateETicket,
  deleteETicket,
};
