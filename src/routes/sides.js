const express = require('express');
const router = express.Router();

const sideController = require('../app/controllers/SideControllers')

router.get('/:slug', sideController.detail)
router.get('/', sideController.index)

module.exports = router;