const {
  createOnlineTransaction,
  getOnlineTransactions,
  getOnlineTransactionById,
  updateOnlineTransaction,
  deleteOnlineTransaction,
} = require("../../controller/OnlineTransaction/onlineTransactionController");
const router = require("express").Router();

router.post("/create", createOnlineTransaction);
router.get("/", getOnlineTransactions);
router.get("/:id", getOnlineTransactionById);
router.put("/:id", updateOnlineTransaction);
router.delete("/:id", deleteOnlineTransaction);

module.exports = router;
