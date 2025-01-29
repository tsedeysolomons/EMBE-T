const {
  login,
  createUse,
  getUser,
  refresh,
  registerGust,
} = require("../../controller/User/userControler");
const verifyJWT = require("../../middleware/verifyJWT");

const router = require("express").Router();

router.get("/auth/user", verifyJWT, getUser);
router.post("/auth/create", createUse);
router.post("/auth/login", login);
router.get("/auth/refresh", refresh);
router.post("/auth/register-gust", registerGust);

module.exports = router;
