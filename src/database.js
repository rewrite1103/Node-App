const mongoose = require('mongoose');
require('dotenv').config();

const { NODE_APP_HOSTNAME, NODE_APP_DATABASE} = process.env;

const databaseConection = `mongodb://rewrite1103:NgsbDIqCF3YPLDyDELbETpbEnXAZcR0ebdeVS07630CXrNTs3seKIrKCd5k3yHcHDYnBWKI4mZW6ACDb0l0JfA==@rewrite1103.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@rewrite1103@`;


mongoose.set("strictQuery", false);


mongoose.connect(databaseConection,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    directConnection: true

})
 .then(db => console.log('Database is connected'))
 .catch(err => console.log(err));
