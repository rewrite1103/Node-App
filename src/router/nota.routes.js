const {Router} = require('express');
const router = Router();
const {renderaddnota, createNota, allNotas, editNota, updateNota, deleteNota} = require('../controller/nota.controller');
const {isAuthenticated} = require('../helpers/validateAuth')

//Agregar nota
router.get('/nota/add' , isAuthenticated , renderaddnota);
router.post('/nota/add' , isAuthenticated, createNota);

//Listar notas
router.get('/nota' , isAuthenticated ,allNotas)

//Editar nota
router.get('/nota/editar/:id' , isAuthenticated, editNota);
router.put('/nota/editar/:id' , isAuthenticated, updateNota);

//Elininar nota 
router.delete('/nota/delete/:id', isAuthenticated , deleteNota);


module.exports = router;