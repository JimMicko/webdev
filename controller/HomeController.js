// const Category = require("../model/CategoryModel");
// const Customer = require("../model/CustomerModel");
// const { fetchAllProducts, getProductById } = require("../model/Product");
// const Product = require("../model/ProductModel");
const bcrypt = require('bcrypt');

exports.getLandingPage = (req, res) => {
    const viewsData = {
        pageTitle: 'Home',
        login: false
    };
    res.render('landingPage.ejs', viewsData);        
}

exports.getLoginPage = (req, res) => {
    const viewsData = {
        pageTitle: 'Login Page',
        login: true
    };
    res.render('landingPage.ejs', viewsData);        
}

exports.getLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let viewsData = {
        login: true,
        pageTitle: 'Login Page' 
    };

    Customer.findAll({ attributes: ['id', 'name', 'email', 'password']})
    .then((customers) => {
        console.log(customers)  
    })
    .then()
    .catch((error) => {
        console.log(error)
    });    
}
// res.render('/', viewsData)   
exports.postSignUp = (req, res) => {
    const saltRounds = 10;
    // Store hash in your password DB.
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = req.body.password;
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const customer = {
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword
    };
    
    const productObj = Customer.build(customer);
    productObj
        .save()
        .then(() => {
            res.redirect('/home'); 
        })
        .catch((error) => {
        console.log(error)
    });     
}

exports.getHomePage = (req, res) => {
    Product.findAll({include: Category})
        .then((products) => {
            const viewsData = {
                admin: false,
                products,
                pageTitle: 'Home Page - Products List'
            };
            res.render('product_list.ejs', viewsData);        
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.getProductDetailsPage = (req, res) => {
    const productId = req.params.productId;

    Product.findByPk(productId)
        .then((product) => {
            const viewsData = {
                product: product,
                pageTitle: product.product_name
            };
            res.render('ProductDetails', viewsData)    
        })
        .catch((error) => {
            console.log(error)
        });
};