// require modules
const express = require('express');
const app = express();
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./database');
const port = 4000;

// server listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));

// set template engine views
app.set('view engine', 'pug');
app.set('views', 'views');

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */

// Login
const loginRoute = require('./routes/loginRoutes');
app.use('/login', loginRoute);

// Register
const registerRoute = require('./routes/registerRoutes');
app.use('/register', registerRoute);

// routes
app.get('/', middleware.requireLogin, (req, res, next) => {

    let payload = {
        pageTitle: 'Home'
    }
    res.status (200).render('home', payload);
});