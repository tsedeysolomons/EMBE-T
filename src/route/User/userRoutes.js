const { login, createUse } = require("../../controller/User/userControler");

const router = require("express").Router();

router.post("/auth/create", createUse);
router.post("/auth/login", login);

module.exports = router;
