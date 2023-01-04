const controlador = {};

controlador.renderindex = (req, res) => {
    res.render('index');
}
controlador.renderacerca = (req, res) => {
    res.render('partials/acerca');
}

module.exports = controlador;