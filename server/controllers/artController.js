const router = require("express").Router();
const artManager = require("../managers/artManager");

router.get("/", async (req, res) => {
  const art = await artManager.getAll();

  res.json(art);
});

router.get("/:artId", async (req, res) => {
  const art = await artManager.getOne(req.params.artId);

  res.json(art);
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
