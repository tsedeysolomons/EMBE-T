const {
  createETicket,
  getETickets,
  getETicketById,
  updateETicket,
  deleteETicket,
} = require("../../controller/ETicket/eticketController");
const router = require("express").Router();

router.post("/create", createETicket);
router.get("/", getETickets);
router.get("/:id", getETicketById);
router.put("/:id", updateETicket);
router.delete("/:id", deleteETicket);
router.delete("/:${reservationId}", deleteETicket);

module.exports = router;
