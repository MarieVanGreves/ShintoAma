const models = require("../models");

const getAllDivinites = (req, res) => {
  models.divinite
    .findAll()
    .then((divinites) => {
      res.json(divinites);
    })
    .catch((err) => {
      console.error("Erreur lors de la récupération des divinites : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des divinites." });
    });
};

const getDiviniteById = (req, res) => {
  const diviniteId = req.params.id;
  models.divinite
    .find(diviniteId)
    .then(([divinite]) => {
      if (divinite == null) {
        res.status(404).json({ error: "Divinite non trouvée." });
      } else {
        res.json(divinite);
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la récupération de la divinite : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de la divinite." });
    });
};

const createDivinite = (req, res) => {
  const divinite = req.body;

  models.divinite
    .insert(divinite)
    .then(([result]) => {
      res.json({ id: result.insertId });
    })
    .catch((err) => {
      console.error("Erreur lors de la création de la divinite : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la création de la divinite." });
    });
};

const updateDivinite = (req, res) => {
  const divinite = req.body;
  divinite.id = parseInt(req.params.id, 10);

  models.divinite
    .update(divinite)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Divinite non trouvée." });
      } else {
        res.json({ message: "Divinite mise à jour avec succès." });
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la mise à jour de la divinite : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la mise à jour de la divinite." });
    });
};

const deleteDivinite = (req, res) => {
  const diviniteId = req.params.id;
  models.divinite
    .delete(diviniteId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Divinite non trouvée." });
      } else {
        res.json({ message: "Divinite supprimée avec succès." });
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la suppression de la divinite : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression de la divinite." });
    });
};

module.exports = {
  getAllDivinites,
  getDiviniteById,
  createDivinite,
  updateDivinite,
  deleteDivinite,
};
