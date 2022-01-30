const request = require('request');
const { default: Axios } = require('axios');
//DEFINIR LAS URLS PARA LOS AMBIENTES DE DESARROLLO Y PRODUCCION
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}
/* CONTROLADORES PARA LA COLLETION PRODUCTOS*/
/* GET PRODUCTOS */

const verProducto = (req, res) => {
    res.redirect(`/bazar/id/${req.body.codigoId}`);    
};

const verProdID = (req, res) => {
    //Axios.get(`${apiOptions.server}/api/bazar/id/${req.params.codigoId}`)
    Axios.get(`${apiOptions.server}/api/search/${req.params.codigoId}`)
    .then(function (response){
        renderProductos(req, res, response.data[0]);
        console.log(response.data[0]);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};
/*const verProdID = (req, res) => {
    const path = `/api/bazar/id/${req.params.codigoId}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {}
    };
    request( //modulo request para llamar a la API REST
        requestOptions,
        (err, response, body) => { // callback con sus 3 partes: err, response, body
            // err - objeto con el detalle del error
            //responde - respuesta completa (incluye status code)
            //body - cuerpo de la respuesta
            if (err){
                console.log(err);
             } else if (response.statusCode === 200 && body) {
                console.log(body);
                renderProductos(req, res, body);
             } else { // en caso de error, hacer render de una vista para el manejo de errores.
                 console.log(response.statusCode);
                 res.render('error', {
                     error: 'Error',
                     codigo: req.params.prodid,
                     mensaje: 'No existe. Ingrese uno válido.'
                 });                
             }            
        }
    );
};*/
const renderProductos = (req, res, objRespuesta) => {
    res.render('prodbyid', {
        title: 'Producto',
        footer: 'FOOTER',
        nombre: objRespuesta.nombre,
        codigo: objRespuesta.codigo,
        semana: objRespuesta.semana, 
        precioNormal: objRespuesta.precioNormal,
        precioDescuento: objRespuesta.precioDescuento,
        imagen: objRespuesta.imagen,       
        capacidad: objRespuesta.capacidad,
        medida: objRespuesta.medida, 
        stock: objRespuesta.stock,
        id: objRespuesta._id   
    });
};
module.exports = {
    verProdID,
    verProducto
};