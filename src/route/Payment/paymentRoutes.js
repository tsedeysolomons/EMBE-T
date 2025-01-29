const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  initiatePayment,
} = require("../../controller/Payment/paymentController");
const router = require("express").Router();

router.post("/create", createPayment);
router.get("/", getPayments);
router.get("/:id", getPaymentById);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);
router.post("/initiate", initiatePayment); 

module.exports = router;
