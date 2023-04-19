const router = require("express").Router();
const artManager = require("../managers/artManager");

router.get("/", async (req, res) => {
  const { name, artist, movement, year } = req.query;
  const query = {};

  if (name) {
    query.name = { $regex: name, $options: "i" };
  }

  if (artist) {
    query.artist = { $regex: artist, $options: "i" };
  }

  if (movement) {
    query.movement = { $regex: movement, $options: "i" };
  }

  const art = await artManager.getAll(query);

  res.status(200).json(art);
});

router.get("/:artId", async (req, res) => {
  try {
    const art = await artManager.getOne(req.params.artId);
    res.status(200).json(art);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  const newArt = await artManager.create(req.body);

  res.json(newArt);
});

router.put("/:artId/edit", async (req, res) => {
  const artUpdatedData = req.body;
  const artId = req.params.artId;
  const updatedArt = await artManager.put(artId, artUpdatedData);

  res.json(updatedArt);
});

router.delete("/:artId", async (req, res) => {
  const artToDelete = await artManager.delete(req.params.artId);

  res.json(artToDelete);
});

module.exports = router;
