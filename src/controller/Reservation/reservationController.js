const { v4: uuidv4 } = require("uuid");

const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");

const createReservation = async (req, res) => {
  try {
    const {
      passengerId,
      trainId,
      setNo,
      classType: reservationClass,
    } = req.body;

    if (!trainId || !passengerId || !setNo || !reservationClass) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    // Check if the seat is already reserved
    const existingReservation = await prisma.reservation.findFirst({
      where: {
        trainId: parseInt(trainId),
        setNo: parseInt(setNo),
      },
    });

    if (existingReservation) {
      return res.status(400).send({ message: "Seat is already reserved!" });
    }

    const { startStation, endStation, departureDate, arrivalDate } =
      await prisma.train.findUnique({
        where: { id: parseInt(trainId) },
      });

    const reservation = await prisma.reservation.create({
      data: {
        trainId,
        ticketNo: uuidv4(),
        userId: parseInt(passengerId),
        startStation,
        endStation,
        departureDate,
        arrivalDate,
        dateOfReservation: new Date(),
        setNo,
        class: reservationClass,
        referenceCode: uuidv4(),
      },
    });

    res
      .status(201)
      .json({ message: "Reservation created successfully", reservation });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await prisma.reservation.findUnique({
      where: { id: parseInt(id) },
    });

    if (!reservation) {
      return res.status(404).send({ message: "Reservation not found!" });
    }

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      trainId,
      passengerId,
      ticketNo,
      startStation,
      endStation,
      departureDate,
      arrivalDate,
      dateOfReservation,
      setNo,
      class: reservationClass,
      status,
      referenceCode,
      relatedTo,
      relatedId,
    } = req.body;

    const reservation = await prisma.reservation.update({
      where: { id: parseInt(id) },
      data: {
        ...filterNotUndefined({
          trainId,
          passengerId,
          ticketNo,
          startStation,
          endStation,
          departureDate: new Date(departureDate),
          arrivalDate: new Date(arrivalDate),
          dateOfReservation: new Date(dateOfReservation),
          setNo,
          class: reservationClass,
          status,
          referenceCode,
          relatedTo,
          relatedId,
        }),
      },
    });

    res
      .status(200)
      .json({ message: "Reservation updated successfully", reservation });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.reservation.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSetsAvailability = async (req, res) => {
  try {
    const { trainId } = req.params;

    // Query the train's capacity
    const train = await prisma.train.findUnique({
      where: { id: parseInt(trainId) },
      select: { capacity: true },
    });

    if (!train) {
      return res.status(404).send({ message: "Train not found!" });
    }

    const totalSets = train.capacity;

    // Query the taken sets
    const takenSets = await prisma.reservation.findMany({
      where: { trainId: parseInt(trainId) },
      select: { setNo: true },
    });

    const takenSetNumbers = takenSets.map((reservation) => reservation.setNo);

    const availableSets = Array.from(
      { length: totalSets },
      (_, i) => i + 1
    ).filter((setNo) => !takenSetNumbers.includes(setNo));

    res.status(200).json({ takenSets: takenSetNumbers, availableSets });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  getSetsAvailability,
};
