const { values, startsWith } = require("lodash");
const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");

// Create a Train
const createTrain = async (req, res) => {
  try {
    const {
      name,
      trainNo,
      startStation,
      endStation,
      stops,
      departureDate,
      arrivalDate,
      type,
      status,
      HardSleepPrice,
      HardSeatPrice,
      capacity,
      adminId,
    } = req.body;

    if (
      !name ||
      !trainNo ||
      !startStation ||
      !endStation ||
      !departureDate ||
      !arrivalDate ||
      !type ||
      !status ||
      !HardSleepPrice ||
      !HardSeatPrice ||
      !capacity ||
      !adminId
    ) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const train = await prisma.train.create({
      data: {
        name,
        trainNo: parseInt(trainNo),
        startStation,
        endStation,
        stops: JSON.parse(stops),
        departureDate: new Date(departureDate),
        arrivalDate: new Date(arrivalDate),
        type,
        status,
        HardSleepPrice: parseFloat(HardSleepPrice),
        HardSeatPrice: parseFloat(HardSeatPrice),
        capacity: parseInt(capacity),
        adminId: parseInt(adminId),
      },
    });

    res.status(201).json({ message: "Train created successfully", train });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

// Get Trains with Filters
const getTrains = async (req, res) => {
  try {
    const { startStation, endStation, departureDate, arrivalDate, type } =
      req.query;

    const query = {};
    if (startStation) query.startStation = { contains: startStation };
    if (endStation) query.endStation = { contains: endStation };
    if (departureDate)
      query.departureDate = { equals: new Date(departureDate) };
    if (arrivalDate) query.arrivalDate = { equals: new Date(arrivalDate) };
    if (type) query.type = { equals: type };

    const trains = await prisma.train.findMany({
      where: query,
    });

    res.status(200).json(trains);
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).json({ message: error.message });
  }
};

// Get Train by ID
const getTrainById = async (req, res) => {
  try {
    const { id } = req.params;
    const train = await prisma.train.findUnique({
      where: { id: parseInt(id) },
    });

    if (!train) {
      return res.status(404).send({ message: "Train not found!" });
    }

    res.status(200).json(train);
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

// Update Train
const updateTrain = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      trainNo,
      startStation,
      endStation,
      stops,
      departureDate,
      arrivalDate,
      type,
      status,
      HardSleepPrice,
      HardSeatPrice,
      capacity,
      adminId,
    } = req.body;

    const data = {
      name,
      trainNo,
      startStation,
      endStation,
      stops: stops ? JSON.parse(stops) : undefined,
      departureDate: departureDate ? new Date(departureDate) : undefined,
      arrivalDate: arrivalDate ? new Date(arrivalDate) : undefined,
      type,
      status,
      HardSleepPrice: HardSleepPrice ? parseFloat(HardSleepPrice) : undefined,
      HardSeatPrice: HardSeatPrice ? parseFloat(HardSeatPrice) : undefined,
      capacity: capacity ? parseInt(capacity) : undefined,
      adminId: adminId ? parseInt(adminId) : undefined,
    };

    const filteredData = filterNotUndefined(data);

    const train = await prisma.train.update({
      where: { id: parseInt(id) },
      data: filteredData,
    });

    res.status(200).json({ message: "Train updated successfully", train });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

// Delete Train
const deleteTrain = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.train.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Train deleted successfully" });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createTrain,
  getTrains,
  getTrainById,
  updateTrain,
  deleteTrain,
};
