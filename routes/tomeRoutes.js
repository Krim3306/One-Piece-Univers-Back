const express = require('express')
const { Tome } = require('../db/sequelizeSetup')
const { findAllTomes, tomeByPk, updateByPk, deleteTome, createTome } = require('../controllers/tomeControllers')
const { protect, restrictToOwnUser } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(findAllTomes)
    .post(protect, createTome)

router
    .route('/:id')
    .get(tomeByPk)
    .put(protect, restrictToOwnUser(Tome), updateByPk)
    .delete(protect, restrictToOwnUser(Tome), deleteTome)
module.exports = router