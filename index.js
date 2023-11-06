const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');
const PORT = 8000;

const homeRoutes = require('./routes/home');
const sequelize = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Static Files
app.use(express.static(path.join(rootDir, 'public')));
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(homeRoutes);
app.use((req, res) => {
    const viewsData = {
        pageTitle: 'Page Not Found' 
    }
    res.status(404).render('404', viewsData);
});

// sequelize
//     .sync({force:true})
//     .then((result) => {
//         // console.log(result);
//     }).catch((error) => {
//         console.log(error);
// }); 

//setup the server
app.listen(PORT, () => {
    console.log('Server is running at port ' + PORT);
});