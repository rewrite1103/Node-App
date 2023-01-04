const user = require ('../models/user')
const ctrlUser = {}
const passport = require('passport')


ctrlUser.RendersignUp = (req, res)=>{
     res.render('users/signUp')
}

ctrlUser.signUp = async (req, res) =>{
    const errores = [];
    const {nombre, email, password, password_confir} = req.body

    if (password != password_confir){
        errores.push({text: 'Las contraseñas no coinciden'})
    }
    if (password.length < 8){
        errores.push({text: 'La contraseña no puede ser menor de 8 caracteres'})
    }
    if (nombre.length == 0 || password.length == 0 || email.length ==0 || password_confir.length==0){
        errores.push({text: 'Por favor llenar todos los campos'})   
     }

    if(errores.length > 0){
        res.render('users/signUp',{errores, email, nombre, password, password_confir})
        
    }
    else
    {
       const Use = await user.findOne({email: email})
       if(Use){
         req.flash('error_msg','El usuario ya existe');
         res.redirect('/Register')
       } else{
        const user_new = new user({username: nombre, email: email, password: password})
        user_new.password = await user_new.encripPassword(password);
        await user_new.save();
        req.flash('Todo_correcto','Usuario registrado satisfactoriamente');
        res.redirect('/Login')
       }
       
    }

}

ctrlUser.RendersignIn = (req, res)=> {
    res.render('users/signIn')
}

ctrlUser.signIn = passport.authenticate('local', {
    successRedirect: '/nota',
    failureRedirect: '/Login',
    failureFlash: true
})

ctrlUser.logOut = (req, res)=>{
    req.logout( (err)=>{} );
    req.flash('Todo_correcto', 'Sesion cerrada satisfactoriamente');
    res.redirect('/');
}

module.exports = ctrlUser;