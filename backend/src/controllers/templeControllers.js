const Temple = require("../models/TempleModel");

const getAllTemples = async (req, res) => {
  try {
    const temples = await Temple.getAllTemples();
    res.json(temples);
  } catch (error) {
    console.error("Erreur lors de la récupération des temples : ", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des temples." });
  }
};

const getTempleById = (req, res) => {
  const templeId = req.params.id;
  Temple.getTempleById(templeId, (err, temple) => {
    if (err) {
      console.error("Erreur lors de la récupération du temple : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du temple." });
      return;
    }
    if (!temple) {
      res.status(404).json({ error: "Temple non trouvé." });
      return;
    }
    res.json(temple);
  });
};

const createTemple = (req, res) => {
  const {
    nom,
    ville,
    prefecture,
    description,
    dateFondation,
    adresse,
    imageUrl,
  } = req.body;
  Temple.createTemple(
    nom,
    ville,
    prefecture,
    description,
    dateFondation,
    adresse,
    imageUrl,
    (err, newTempleId) => {
      if (err) {
        console.error("Erreur lors de la création du temple : ", err);
        res
          .status(500)
          .json({ error: "Erreur lors de la création du temple." });
        return;
      }
      res.json({ id: newTempleId });
    }
  );
};

const updateTemple = (req, res) => {
  const templeId = req.params.id;
  const {
    nom,
    ville,
    prefecture,
    description,
    dateFondation,
    adresse,
    imageUrl,
  } = req.body;
  Temple.updateTemple(
    templeId,
    nom,
    ville,
    prefecture,
    description,
    dateFondation,
    adresse,
    imageUrl,
    (err) => {
      if (err) {
        console.error("Erreur lors de la mise à jour du temple : ", err);
        res
          .status(500)
          .json({ error: "Erreur lors de la mise à jour du temple." });
        return;
      }
      res.json({ message: "Temple mis à jour avec succès." });
    }
  );
};

const deleteTemple = (req, res) => {
  const templeId = req.params.id;
  Temple.deleteTemple(templeId, (err) => {
    if (err) {
      console.error("Erreur lors de la suppression du temple : ", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression du temple." });
      return;
    }
    res.json({ message: "Temple supprimé avec succès." });
  });
};

module.exports = {
  getAllTemples,
  getTempleById,
  createTemple,
  updateTemple,
  deleteTemple,
};
