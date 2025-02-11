const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  initiatePayment,
} = require("../../controller/Payment/paymentController");
const { paymentWebhook } = require("../../webhook/paymen/payment");
const router = require("express").Router();

router.post("/create", createPayment);
router.get("/", getPayments);
router.get("/:id", getPaymentById);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);
router.post("/initiate", initiatePayment);

router.post("/webhook", paymentWebhook);

module.exports = router;
