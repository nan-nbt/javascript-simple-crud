const express = require('express');
const router = express.Router();
const GroupmController = require('../controller/groupm_controller');

router.get('/', GroupmController.getAll);
router.get('/:id', GroupmController.getOne);
router.post('/', GroupmController.create);
router.put('/:id', GroupmController.update);
router.delete('/:id', GroupmController.delete);

module.exports = router;