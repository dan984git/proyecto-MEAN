const mongoose = require('mongoose');
const Inscribete = mongoose.model('ins');

// CONTROLADORES
//Crear un nuevo documento
const insCreate = (req, res) => {
    Inscribete.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        cedula: req.body.cedula,
        ciudad: req.body.ciudad,
        opcioningreso: req.body.opcioningreso
    }, (err, objetoInscribete) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json({ objetoInscribete });
        }
    });

};

module.exports = {
    insCreate
};