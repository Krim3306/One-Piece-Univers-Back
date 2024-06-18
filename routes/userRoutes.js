const express = require('express')
const { findAllUsers, findUserByPk, createUser, updateProfil, deleteProfil, updateUser, deleteUser, findProfile } = require('../controllers/userControllers')
const { login, logout } = require('../controllers/authController')
const { protect, restrictToOwnUser, restrictTo } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(
        protect,
        restrictTo('admin'),
        findAllUsers)

router
    .route('/signup')
    .post(createUser)

router
    .route('/admin/create')
    .post(protect, restrictTo("admin"), createUser)

router
    .route('/profile')
    .get(protect, findProfile)
    .put(protect, updateProfil)
    .delete(protect, deleteProfil)

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .post(logout)

router
    .route('/:id')
    .get(
        protect, 
        restrictTo('admin'), 
        findUserByPk)
    .put(
        protect,
        restrictTo('admin'), 
        updateUser)
    .delete(
        protect, 
        restrictTo('admin'), 
        deleteUser)

module.exports = router