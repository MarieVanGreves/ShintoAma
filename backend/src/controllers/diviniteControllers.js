const Divinite = require("../models/DiviniteModel");

const getAllDivinites = (req, res) => {
  Divinite.getAllDivinites((err, divinites) => {
    if (err) {
      console.error("Erreur lors de la récupération des divinités : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des divinités." });
      return;
    }
    res.json(divinites);
  });
};

const getDiviniteById = (req, res) => {
  const diviniteId = req.params.id;
  Divinite.getDiviniteById(diviniteId, (err, divinite) => {
    if (err) {
      console.error("Erreur lors de la récupération de la divinité : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de la divinité." });
      return;
    }
    if (!divinite) {
      res.status(404).json({ error: "Divinité non trouvée." });
      return;
    }
    res.json(divinite);
  });
};

const createDivinite = (req, res) => {
  const { nom, description } = req.body;
  Divinite.createDivinite(nom, description, (err, newDiviniteId) => {
    if (err) {
      console.error("Erreur lors de la création de la divinité : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la création de la divinité." });
      return;
    }
    res.json({ id: newDiviniteId });
  });
};

const updateDivinite = (req, res) => {
  const diviniteId = req.params.id;
  const { nom, description } = req.body;
  Divinite.updateDivinite(diviniteId, nom, description, (err) => {
    if (err) {
      console.error("Erreur lors de la mise à jour de la divinité : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la mise à jour de la divinité." });
      return;
    }
    res.json({ message: "Divinité mise à jour avec succès." });
  });
};

const deleteDivinite = (req, res) => {
  const diviniteId = req.params.id;
  Divinite.deleteDivinite(diviniteId, (err) => {
    if (err) {
      console.error("Erreur lors de la suppression de la divinité : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression de la divinité." });
      return;
    }
    res.json({ message: "Divinité supprimée avec succès." });
  });
};

module.exports = {
  getAllDivinites,
  getDiviniteById,
  createDivinite,
  updateDivinite,
  deleteDivinite,
};
