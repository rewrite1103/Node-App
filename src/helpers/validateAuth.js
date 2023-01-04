const validate = {};

validate.isAuthenticated = (req, res, next) =>{
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg','No estas logeado') 
    res.redirect('/Login');

    
}

module.exports = validate;