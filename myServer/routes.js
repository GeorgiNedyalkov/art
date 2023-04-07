const router = require("express").Router();

const artController = require("./controllers/artController");

router.use("/art-pieces", artController);

module.exports = router;
