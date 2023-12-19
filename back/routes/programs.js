const express = require('express');
const router = express.Router();
const programController = require("../controllers/programController");

// Récupérer tous les programmes
router.get('/', programController.getAllPrograms);



module.exports = router;