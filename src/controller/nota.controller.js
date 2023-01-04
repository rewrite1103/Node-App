const notactrl = {};
const Nota = require('../models/note');


notactrl.renderaddnota = (req, res) => {  

    res.render('notas/new_nota');
  }

notactrl.createNota = async (req, res) => {
  
    const {Title, Description} =  req.body;
    const newNota = new Nota({title: Title, description: Description});
    newNota.user = req.user.id;
    await newNota.save();
    req.flash('Todo_correcto', 'Nota agregada satisfactoriamente');
    res.redirect('/nota');
  


}
notactrl.allNotas = async (req, res) => { 
    const Notass = await Nota.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
    res.render('notas/notas_all',{Notass});
}

notactrl.editNota = async (req, res) => { 
    const nota = await Nota.findById(req.params.id).lean();
    if (nota.user != req.user.id){
        req.flash('error_msg', 'No autorizado');
        return res.redirect('/nota');
    }

    res.render('notas/edit_nota',{nota});
}
notactrl.updateNota = async (req, res) => {
    const {Title, Description} = req.body;
    await Nota.findByIdAndUpdate(req.params.id,{title: Title , description: Description})
    req.flash('Todo_correcto', 'Nota actualizada satisfactoriamente');
    res.redirect('/nota')
}

notactrl.deleteNota = async(req, res) => {  
  
    await Nota.findByIdAndDelete(req.params.id);
    req.flash('Todo_correcto', 'Nota eliminada satisfactoriamente');
    res.redirect('/nota');
    
 }

module.exports = notactrl;