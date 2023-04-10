const router = require("express").Router();

const artController = require("./controllers/artController");
const userController = require("./controllers/userController");

router.use("/art-pieces", artController);
router.use("/users", userController);

module.exports = router;
