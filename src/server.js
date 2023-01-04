const express = require('express');
const path = require('path')
require('./database');
const hbss = require('express-handlebars');
const morgan = require('morgan');
const metOverr =  require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// initializations
const app = express();
require('./config/passport');




//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views').toString());
console.log("views", path.join(__dirname,'views'));
app.engine('.hbs', hbss.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

//middleware
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(metOverr('_method'));
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//global variables
app.use((req, res, next) => {
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    res.locals.Todo_correcto = req.flash('Todo_correcto');

    next();
});


//routes
app.use(require('./router/index.routes'));
app.use(require('./router/nota.routes'));
app.use(require('./router/users.routes'));


//static files
app.use(express.static(path.join(__dirname,'public')))



module.exports = app;