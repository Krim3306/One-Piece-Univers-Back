const express = require('express')
const { findAllTopics, topicByPk, searchTopics, createTopic, updateByPk, deleteTopic } = require('../controllers/topicControllers')
const { protect, restrictToOwnUser } = require('../middlewares/auth')
const { Topic } = require('../db/sequelizeSetup')
const router = express.Router()

router
    .route('/')
    .get(findAllTopics)
    .post(protect, createTopic)

router
    .route('/find')

router
    .route('/withImg')

router
    .route('/search')
    .get(searchTopics)

router
    .route('/:id')
    .get(topicByPk)
    .put(protect, restrictToOwnUser(Topic), updateByPk)
    .delete(protect, restrictToOwnUser(Topic), deleteTopic)

module.exports = router