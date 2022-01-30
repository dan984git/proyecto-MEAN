const { default: Axios } = require('axios');
//const request = require('request');
//DEFINIR LAS URLS PARA LOS AMBIENTES DE DESARROLLO Y PRODUCCION
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}

/*const verBazar = (req, res) => {
    Axios.get(`${apiOptions.server}/api/bazar/lista`)
    .then(function (response){
        res.render("bazar", {
            title: "Bazar",
            footer: "FOOTER",
            productos: response.data            
        });
        console.log(response.data);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};*/

const verBazar = (req, res) => {
    Axios.all([
        Axios.get(`${apiOptions.server}/api/bazar/lista`),
        Axios.get(`${apiOptions.server}/api/bazar/pdf`)
    ])
    .then(Axios.spread((obj1, obj2) => { 
        res.render('bazar', {
            productos: obj1.data,
            pdf: obj2.data
        })
    }))
    .catch(function (error) {
        console.log(error);        
    })
}
/*const verBazar = (req, res) => {
    const path = `/api/bazar/lista`;
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
                     codigo: '',
                     mensaje: 'Algo fallo'
                 });                
             }            
        }
    );
};
/*const renderProductos = (req, res, objRespuesta) => {
    res.render('bazar', {
        title: 'Bazar',
        footer: 'FOOTER',
        productos: objRespuesta.body
        /*nombre: objRespuesta.nombre,
        codigo: objRespuesta.codigo,
        semana: objRespuesta.semana, 
        precioNormal: objRespuesta.precioNormal,
        precioDescuento: objRespuesta.precioDescuento,
        descuento: objRespuesta.descuento,       
        capacidad: objRespuesta.capacidad,
        medida: objRespuesta.medida, 
        stock: objRespuesta.stock  
    });
};*/

module.exports = {
    verBazar
};