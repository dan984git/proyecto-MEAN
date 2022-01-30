const { default: Axios } = require('axios');
//LLAMAR AL MODULO PARA USAR MI API REST
//const request = require('request');
//DEFINIR LAS URLS PARA LOS AMBIENTES DE DESARROLLO Y PRODUCCION
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}
/* CONTROLADORES PARA LA COLLETION INGRESA A TUPPERWARE*/
/* GET INGRESA A TUPPERWARE */

const verOpciones = (req, res) => {
    Axios.get(`${apiOptions.server}/api/inscribete/opciones`)
        .then(function (response) {
            res.render("ingresaatupperware", {
                opciones: response.data
            });
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
};

const doAddInscribete = (req, res) => {    
    if (req.body.nombre != '') {
        Axios
            .post(`${apiOptions.server}/api/inscribete`, {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                telefono: req.body.telefono,
                cedula: req.body.cedula,
                ciudad: req.body.ciudad,
                opcioningreso: req.body.opcioningreso
            })
            .then(function (response) {
                res.redirect('/ingresa-a-tupperware');
            })
            .catch(function (error) {
            });
    } else {
        res.redirect("/ingresa-a-tupperware", {
        });
    }

};

module.exports = {
    verOpciones,
    doAddInscribete
};