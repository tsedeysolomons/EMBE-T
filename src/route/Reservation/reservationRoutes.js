const {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  getSetsAvailability,
} = require("../../controller/Reservation/reservationController");
const router = require("express").Router();

router.post("/create", createReservation);
router.get("/", getReservations);
router.get("/:id", getReservationById);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);
router.get("/sets-availability/:trainId", getSetsAvailability);

module.exports = router;
