const mongoose = require('mongoose');

// mongo-db must method
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

class Database {
    db_admin = '';
    db_password = '';
    db_name = '';

    constructor() {
        this.connect();
    }
    
    // connect to mongo-db
    connect() {
        mongoose.connect(`mongodb+srv://${this.db_admin}:${this.db_password}@connectid.zngui.mongodb.net/${this.db_name}?retryWrites=true&w=majority`)
        .then(() => {
            console.log('database connect successfully');
        })
        .catch((err) => {
            console.log('database connect failed err ===>', err);
        });
    }
}

module.exports = new Database();