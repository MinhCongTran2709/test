const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminControllers')

router.get('/create', adminController.create);
router.post('/store', adminController.store);
router.post('/handle-form-actions', adminController.handleFormActions);
router.post('/handle-form-trash-actions', adminController.handleFormTrashActions)
router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.update);
router.patch('/:id/restore', adminController.restore);
router.delete('/:id', adminController.delete);
router.delete('/:id/force', adminController.forcedelete);
router.get('/stored-pizzas', adminController.storedPizzas);
router.get('/trash-pizzas', adminController.trashPizza);

module.exports = router;