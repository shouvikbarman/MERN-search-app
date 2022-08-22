const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/search-app');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to mongoDB'));

db.once('open',function(){
    console.log('connected to mongoDB');
});

module.exports = db;