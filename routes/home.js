const express = require('express');
const { getHomePage, getProductDetailsPage, getLandingPage, postSignUp, getLoginPage, getLogin } = require('../controller/HomeController');
// const { postCartPage, getCartPage, deleteCartItem } = require('../controller/CartController');

const router = express.Router();


router.get('/', getLandingPage);
// router.get('/loginPage', getLoginPage);
// router.get('/login', getLogin);
// router.post('/login', postSignUp);
// router.get('/home', getHomePage);
// router.get('/product/details/:productId', getProductDetailsPage)

// router.post('/cart', postCartPage);
// router.get('/cart', getCartPage)
// router.post('/cart/delete-item', deleteCartItem)

module.exports = router