const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

// set template engine views
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

// routes
router.get('/', (req, res, next) => {
    let payload = {
        'webTitle': 'Register Account'
    };

    res.status (200).render('register', payload);
});

router.post('/', (req, res, next) => {

    console.log('data register', req.body);
    const payload = req.body;
    let firstName = payload.firstName.trim();
    let lastName = payload.lastName.trim();
    let username = payload.userName.trim();
    let email = payload.email.trim();
    let password = payload.password;

    if (firstName && lastName && username && email && password) {
        console.log('success');
    } else {
        payload.errMsg = 'please make sure each field has a valid value';
        payload.errNum = '1';
        res.status (200).render('register', payload);
    }
});

module.exports = router;