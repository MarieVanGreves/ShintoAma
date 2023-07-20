const models = require("../models");

const getAllTemples = (req, res) => {
  models.temple
    .findAll()
    .then((temples) => {
      res.json(temples);
    })
    .catch((err) => {
      console.error("Erreur lors de la récupération des temples : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des temples." });
    });
};

const getTempleById = (req, res) => {
  const templeId = req.params.id;
  models.temple
    .find(templeId)
    .then(([temple]) => {
      if (temple == null) {
        res.status(404).json({ error: "Temple non trouvé." });
      } else {
        res.json(temple);
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la récupération du temple : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du temple." });
    });
};

const createTemple = (req, res) => {
  const temple = req.body;

  models.temple
    .insert(temple)
    .then(([result]) => {
      res.json({ id: result.insertId });
    })
    .catch((err) => {
      console.error("Erreur lors de la création du temple : ", err);
      res.status(500).json({ error: "Erreur lors de la création du temple." });
    });
};

const updateTemple = (req, res) => {
  const temple = req.body;

  temple.id = parseInt(req.params.id, 10);

  models.temple
    .update(temple)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Temple non trouvé." });
      } else {
        res.json({ message: "Temple mis à jour avec succès." });
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la mise à jour du temple : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la mise à jour du temple." });
    });
};

const deleteTemple = (req, res) => {
  const templeId = req.params.id;
  models.temple
    .delete(templeId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Temple non trouvé." });
      } else {
        res.json({ message: "Temple supprimé avec succès." });
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la suppression du temple : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression du temple." });
    });
};

module.exports = {
  getAllTemples,
  getTempleById,
  createTemple,
  updateTemple,
  deleteTemple,
};
