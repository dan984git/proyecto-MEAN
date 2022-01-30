const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ctrlhomepage = require('../controllers/homepage');
const ctrlcontacto = require('../controllers/contacto');
const ctrlqueHacemos = require('../controllers/quehacemos');
const ctrlquienesSomos = require('../controllers/quienessomos');
const ctrlproductos = require('../controllers/productos');
const ctrlverprod = require('../controllers/verprodid');
const ctrlverbazar = require('../controllers/verBazar');
const ctrlingresaTupperware = require('../controllers/ingresaatupperware');
const ctrllogin = require('../controllers/login');
const uuidv4 = require('uuid');


//0. Login 
router.get('/login', ctrllogin.login);

/* DEFINIR las rutas de las  páginas. */
/* 1. Locations */
router.get('/', ctrlhomepage.verVideo);

/* 2. CONTACTO */
router.get('/contacto', ctrlcontacto.contacto);
router.post('/send-email', ctrlcontacto.sendEmail);

/* 3. QUE HACEMOS */
router.get('/que-hacemos', ctrlqueHacemos.QH);
router.get('/que-hacemos/recetas/:recetaid', ctrlqueHacemos.verRecetaRed);
router.get('/que-hacemos/recetas/id/:recetaid', ctrlqueHacemos.verReceta);
router.get('/que-hacemos/demostraciones/:demostracionesid', ctrlqueHacemos.verDemostracionRed);
router.get('/que-hacemos/demostraciones/id/:demostracionesid', ctrlqueHacemos.verDemostracion);
router.get('/que-hacemos/video-productos/:videoproductosid', ctrlqueHacemos.verVideoproductoRed);
router.get('/que-hacemos/video-productos/id/:videoproductosid', ctrlqueHacemos.verVideoproducto);

/* 4. QUIENES SOMOS */
//router.get('/quienes-somos', ctrlquienesSomos.verCarousel);
router.get('/quienes-somos', ctrlquienesSomos.verTodo);

/* 4. PRODUCTOS */
router.get('/productos', ctrlproductos.productos);
/* AGREGAR PRODUCTOS */
router.get('/productos/new', ctrlproductos.addProducto);
router.post('/productos/new/add', ctrlproductos.doAddProducto);
/* ACTUALIZAR PRODUCTOS */
router.get('/productos/bazar/id', ctrlproductos.changeProducto);
router.post('/productos/bazar/id', ctrlproductos.verUpdateProducto);
router.get('/productos/bazar/id/:codigoUpdate', ctrlproductos.actualizarProdID);
router.post('/productos/bazar/id/:codigoUpdate', ctrlproductos.doUpdateProducto);
/* ELIMINAR PRODUCTOS */
router.get('/delete/bazar/id/:prodId', ctrlproductos.deleteProducto);
//router.delete('/delete/bazar/id/:prodId', ctrlproductos.deleteProducto);
/* VER PRODUCTOS */
router.get('/productos/bazar/lista', ctrlverbazar.verBazar);
/* VER PRODUCTOS POR ID */
router.post('/productos/bazar/lista', ctrlverprod.verProducto);
router.get('/bazar/id/:codigoId', ctrlverprod.verProdID);



/* 5. PRODUCTOS */
router.get('/ingresa-a-tupperware', ctrlingresaTupperware.verOpciones);
router.post('/ingresa-a-tupperware/add', ctrlingresaTupperware.doAddInscribete);
//router.get('/productos/new', ctrlproductos.addProducto);
//router.post('/productos/new/add', ctrlproductos.doAddProducto);

module.exports = router;
