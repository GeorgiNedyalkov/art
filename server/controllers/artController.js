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

  if (year) {
    query.year = Number(year);
  }

  try {
    const art = await artManager.getAll(query);
    res.status(200).json(art);
  } catch (error) {
    res.status(400).json(error);
  }
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
  try {
    const newArt = await artManager.create(req.body);

    res.status(201).json(newArt);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:artId/edit", async (req, res) => {
  const artUpdatedData = req.body;
  const artId = req.params.artId;

  try {
    const updatedArt = await artManager.put(artId, artUpdatedData);
    res.status(200).json(updatedArt);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:artId", async (req, res) => {
  const artId = req.params.artId;
  try {
    await artManager.delete(artId);
    res.status(200).json({ msg: `Art with id: ${artId}` });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/:artId/comments", async (req, res) => {
  const comment = req.body;
  const artId = req.params.artId;

  try {
    const newComment = await artManager.addComment(artId, comment);
    console.log(newComment);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
