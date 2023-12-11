const express = require('express');
const router = express.Router();
const programController = require("../controllers/programController");

// Récupérer tous les programmes
router.get('/', programController.getAllPrograms);

// Récuperer un programme par son id
/*router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM programs WHERE id = ?';

    db.get(query, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Programme non trouvé' });
        }
        res.json(row);
    });
});*/

module.exports = router;