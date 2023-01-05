const mongoose = require('mongoose');
require('dotenv').config();

const { NODE_APP_HOSTNAME, NODE_APP_DATABASE} = process.env;

const databaseConection = `mongodb+srv://rewrite11:Helsing1103&@cluster0.rozcwnj.mongodb.net/?retryWrites=true&w=majority`;


mongoose.set("strictQuery", false);


mongoose.connect(databaseConection,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    directConnection: true

})
 .then(db => console.log('Database is connected'))
 .catch(err => console.log(err));
