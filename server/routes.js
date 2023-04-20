const router = require("express").Router();

const artController = require("./controllers/artController");
const userController = require("./controllers/userController");
const artistController = require("./controllers/artistController");

router.use("/art-pieces", artController);
router.use("/users", userController);
router.use("/artists", artistController);

module.exports = router;
