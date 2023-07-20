const express = require("express");

const router = express.Router();

const templeControllers = require("./controllers/templeControllers");
const diviniteControllers = require("./controllers/diviniteControllers");

router.get("/temples", templeControllers.getAllTemples);
router.get("/temples/:id", templeControllers.getTempleById);
router.post("/temples", templeControllers.createTemple);
router.put("/temples/:id", templeControllers.updateTemple);
router.delete("/temples/:id", templeControllers.deleteTemple);

router.get("/divinites", diviniteControllers.getAllDivinites);
router.get("/divinites/:id", diviniteControllers.getDiviniteById);
router.post("/divinites", diviniteControllers.createDivinite);
router.put("/divinites/:id", diviniteControllers.updateDivinite);
router.delete("/divinites/:id", diviniteControllers.deleteDivinite);

module.exports = router;
