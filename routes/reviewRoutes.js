const express = require('express')
const { protect, restrictToOwnUser } = require('../middlewares/auth')
const { Review } = require('../db/sequelizeSetup')
const { findAllReviews, createReview, findReviewByPk, updateReview, deleteReview, findReviewByTopic } = require('../controllers/reviewControllers')
const router = express.Router()

router
    .route('/')
    .get(findAllReviews)
    .post(protect, createReview)

router
    .route('/:TopicId')
    .get(findReviewByTopic)

router
    .route('/:id')
    .get(findReviewByPk)
    .put(protect, restrictToOwnUser(Review), updateReview)
    .delete(protect, restrictToOwnUser(Review), deleteReview)

module.exports = router