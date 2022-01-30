const { default: Axios } = require('axios');
//const request = require('request');
//DEFINIR LAS URLS PARA LOS AMBIENTES DE DESARROLLO Y PRODUCCION
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}

const carritoArray = [];
const item = {
    //id: req.params._id
};
//carritoArray.add(item);

const Prod = (req, res) => {
    res.render('carrito', {
        title: 'Modificar un Producto',
        footer: 'FOOTER'
    });
};

const verProd = (req, res) => {
    res.redirect(`/carrito/${req.body.idprod}`);    
};


const verCarrito = (req, res) => {
    Axios.get(`${apiOptions.server}/api/bazar/id/${req.params.idprod}`)
    .then(function (response){
        //renderProductos(req, res, response.data);
        console.log(response.data);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
}

module.exports = {
    verCarrito,
    verProd,
    Prod
};