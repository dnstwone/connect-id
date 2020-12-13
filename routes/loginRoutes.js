const express = require('express');
const app = express();
const router = express.Router();

// set template engine views
app.set('view engine', 'pug');
app.set('views', 'views');

// routes
router.get('/', (req, res, next) => {

    let payload = {
        'webTitle': 'Login Account'
    };

    res.status (200).render('login', payload);
});

module.exports = router;