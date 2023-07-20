const express = require("express");

const router = express.Router();

const templeControllers = require("./controllers/templeControllers");
const diviniteControllers = require("./controllers/diviniteControllers");

router.get("api/temples", templeControllers.getAllTemples);
router.get("api/temples/:id", templeControllers.getTempleById);
router.post("api/temples", templeControllers.createTemple);
router.put("api/temples/:id", templeControllers.updateTemple);
router.delete("api/temples/:id", templeControllers.deleteTemple);

router.get("/divinites", diviniteControllers.getAllDivinites);
router.get("/divinites/:id", diviniteControllers.getDiviniteById);
router.post("/divinites", diviniteControllers.createDivinite);
router.put("/divinites/:id", diviniteControllers.updateDivinite);
router.delete("/divinites/:id", diviniteControllers.deleteDivinite);

module.exports = router;
