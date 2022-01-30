const express = require('express');
const router = express.Router();
//const jwt = require('express-jwt');
//const auth = jwt({
//secret: process.env.JWT_SECRET,
//userProperty: 'payload'
//});

const ctrlProds = require('../controllers/prods');
//const ctrlPrd = require('../controllers/prd');
const ctrlBazar = require('../controllers/bzr');
const ctrlVideo = require('../controllers/vid');
const ctrlCalendario = require('../controllers/calen');
const ctrlRecetas = require('../controllers/rece');
const ctrlDemostraicones = require('../controllers/demo');
const ctrlVideoproductos = require('../controllers/vidpro');
const ctrlCarousel = require('../controllers/carou');
const ctrlDirectoras = require('../controllers/direc');
const ctrlTestimoniales = require('../controllers/testi');
const ctrlIns = require('../controllers/insc');
const ctrlOpciones = require('../controllers/opc');

const ctrlAuth = require('../controllers/authentication');


//Definir rutas para las acciones definidas para la coleccion prods
router
    .route('/bazar/lista')
    .post(ctrlProds.prodCreate) // CREA UN PRODUCTO
    .get(ctrlProds.prodList); //LEE TODOS LOS USUARIOS
router
    .route('/bazar/id/:prodid')
    .get(ctrlProds.prodRead) // LEE UN PRODUCTO ESPECIFICO
    .put(ctrlProds.prodUpdate) // ACTUALIZA UN PRODUCTO
    .delete(ctrlProds.prodDelete); // BORRA UN PRODUCTO

router
    .route('/search/:name')
    .get(ctrlProds.nomcodRead);


router
    .route('/home/video')
    .get(ctrlVideo.videoList); //LEE TODOS LOS VIDEOS

router
    .route('/que-hacemos')
    .get(ctrlCalendario.calList);
router
    .route('/recetas')
    .get(ctrlRecetas.recList);
router
    .route('/recetas/:recetaid')
    .get(ctrlRecetas.recRead);

router
    .route('/demostraciones')
    .get(ctrlDemostraicones.demList);
router
    .route('/demostraciones/:demostracionesid')
    .get(ctrlDemostraicones.demRead);

router
    .route('/video-productos')
    .get(ctrlVideoproductos.vidpList);
router
    .route('/video-productos/:videoproductosid')
    .get(ctrlVideoproductos.vidpRead);

router
    .route('/quienes-somos/carousel')
    .get(ctrlCarousel.carouselList);

router
    .route('/quienes-somos/directoras')
    .get(ctrlDirectoras.directorasList);

router
    .route('/quienes-somos/testimoniales')
    .get(ctrlTestimoniales.testimonialesList);

router
    .route('/inscribete')
    .post(ctrlIns.insCreate);

router
    .route('/inscribete/opciones')
    .get(ctrlOpciones.opcionesList);

router
    .route('/bazar/pdf')
    .get(ctrlBazar.bazarList);

router.post('/register', ctrlAuth.Register);
router.post('/login', ctrlAuth.Login);

//Definir rutas para las acciones definidas para la coleccion prd
/*router
    .route('/prd')
    .post(ctrlProds.prodCreate) // CREA UN PRODUCTO
    .get(ctrlProds.prodList); //LEE TODOS LOS USUARIOS
router
    .route('/prd/:prodid') 
    .get(ctrlProds.prodRead) // LEE UN PRODUCTO ESPECIFICO
    .put(ctrlProds.prodUpdate) // ACTUALIZA UN PRODUCTO
    .delete(ctrlProds.prodDelete); // BORRA UN PRODUCTO*/

//Definir rutas para las acciones definidas para la coleccion bzr
router
    .route('/bzr')
    .get(ctrlProds.prodList); //LEE TODOS LOS USUARIOS

module.exports = router;