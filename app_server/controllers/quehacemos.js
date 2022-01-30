const { default: Axios } = require('axios');
//DEFINIR LAS URLS PARA LOS AMBIENTES DE DESARROLLO Y PRODUCCION
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}
/* CONTROLADORES PARA LA COLLETION QUE HACEMOS*/
/* GET QUE HACEMOS */
const QH = (req, res) => {
    res.render('quehacemos', { title: 'QUE HACEMOS', footer: 'FOOTER' });    
};

const verRecetaRed = (req, res) => {
    res.redirect(`/que-hacemos/recetas/id/${req.params.recetaid}`);
};
const verReceta = (req, res) => {    
    Axios.get(`${apiOptions.server}/api/recetas/${req.params.recetaid}`)
    .then(function (response){
        renderRecetas(req, res, response.data);
        console.log(response.data);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};

const renderRecetas = (req, res, objRespuesta) => {
    res.render('recetas', {
        title: objRespuesta.nombre,
        imagen: objRespuesta.imagen,
        descripcion: objRespuesta.descripcion,
        video: objRespuesta.video
    });
};


const verDemostracionRed = (req, res) => {
    res.redirect(`/que-hacemos/demostraciones/id/${req.params.demostracionesid}`);
};
const verDemostracion = (req, res) => {    
    Axios.get(`${apiOptions.server}/api/demostraciones/${req.params.demostracionesid}`)
    .then(function (response){
        renderDemostracion(req, res, response.data);
        console.log(response.data);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};
const renderDemostracion = (req, res, objRespuesta) => {
    res.render('recetas', {
        title: objRespuesta.nombre,
        imagen: objRespuesta.imagen,
        descripcion: objRespuesta.descripcion,
        video: objRespuesta.video
    });
};

const verVideoproductoRed = (req, res) => {
    res.redirect(`/que-hacemos/video-productos/id/${req.params.videoproductosid}`);
};
const verVideoproducto = (req, res) => {    
    Axios.get(`${apiOptions.server}/api/video-productos/${req.params.videoproductosid}`)
    .then(function (response){
        renderVideoproducto(req, res, response.data);
        console.log(response.data);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};
const renderVideoproducto = (req, res, objRespuesta) => {
    res.render('recetas', {
        title: objRespuesta.nombre,
        imagen: objRespuesta.imagen,
        descripcion: objRespuesta.descripcion,
        video: objRespuesta.video
    });
};
module.exports = {
    QH,
    verReceta,
    verRecetaRed,
    verDemostracionRed,
    verDemostracion,
    verVideoproductoRed,
    verVideoproducto
};