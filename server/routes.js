const router = require("express").Router();

const artController = require("./controllers/artController");
const userController = require("./controllers/userController");
const artistController = require("./controllers/artistController");
const homeController = require("./controllers/homeController");

router.get("/api/", homeController);
router.use("/api/art-pieces", artController);
router.use("api/users", userController);
router.use("api/artists", artistController);

module.exports = router;
