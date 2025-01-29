const express = require("express");
const {
  createTrain,
  getTrains,
  getTrainById,
  updateTrain,
  deleteTrain,
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
} = require("../../controller/Train/trainController");
const router = require("express").Router();

// router.post("/create", createTrain);
// router.get("/", getTrains);
// router.get("/:id", getTrainById);
// router.put("/:id", updateTrain);
// router.delete("/:id", deleteTrain);

router.post("/create", createTrain);
router.get("/", getTrains);
router.get("/:id", getTrainById);
router.put("/:id", updateTrain);
router.delete("/:id", deleteTrain);

module.exports = router;
