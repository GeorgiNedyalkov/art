const router = require("express").Router();

const artistManager = require("../managers/artistManager");

router.post("/", async (req, res) => {
  try {
    const newArtist = await artistManager.create(req.body);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const artists = await artistManager.getAll();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:artistId", async (req, res) => {
  const artistId = req.params.artistId;
  try {
    const artist = await artistManager.getOne(artistId);
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:artistId/edit", async (req, res) => {
  const artistId = req.params.artistId;
  const artistData = req.body;
  try {
    await artistManager.update(artistId, artistData);
    res
      .status(200)
      .json({ msg: `Artist with id: ${artistId} has been updated` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:artistId", async (req, res) => {
  const artistId = req.params.artistId;
  try {
    await artistManager.delete(artistId);
    res
      .status(200)
      .json({ msg: `Artist with id: ${artistId} has been deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
