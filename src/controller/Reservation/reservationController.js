const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");

const createReservation = async (req, res) => {
  try {
    const {
      trainId,
      passengerId,
      ticketNo,
      selectFromTo,
      departureDate,
      arrivalDate,
      dateOfReservation,
      setNo,
      class: reservationClass,
      status,
      referenceCode,
    } = req.body;

    if (
      !trainId ||
      !passengerId ||
      !ticketNo ||
      !selectFromTo ||
      !departureDate ||
      !arrivalDate ||
      !dateOfReservation ||
      !setNo ||
      !reservationClass ||
      !referenceCode
    ) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const reservation = await prisma.reservation.create({
      data: {
        trainId,
        passengerId,
        ticketNo,
        selectFromTo,
        departureDate: new Date(departureDate),
        arrivalDate: new Date(arrivalDate),
        dateOfReservation: new Date(dateOfReservation),
        setNo,
        class: reservationClass,
        status,
        referenceCode,
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
      selectFromTo,
      departureDate,
      arrivalDate,
      dateOfReservation,
      setNo,
      class: reservationClass,
      status,
      referenceCode,
    } = req.body;

    const reservation = await prisma.reservation.update({
      where: { id: parseInt(id) },
      data: {
        ...filterNotUndefined({
          trainId,
          passengerId,
          ticketNo,
          selectFromTo,
          departureDate: new Date(departureDate),
          arrivalDate: new Date(arrivalDate),
          dateOfReservation: new Date(dateOfReservation),
          setNo,
          class: reservationClass,
          status,
          referenceCode,
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

module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
};
