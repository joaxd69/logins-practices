const { Router } = require("express");

const router = Router();
const { validateauth } = require("../../middlewares");

router.use("/users", validateauth, require("./users"));


module.exports = router;
