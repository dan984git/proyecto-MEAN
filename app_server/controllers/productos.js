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
/* CONTROLADORES PARA LA COLLETION PRODUCTOS*/
/* GET PRODUCTOS */
const productos = (req, res) => {
    res.render('productos', { title: 'PRODUCTOS', footer: 'FOOTER' });
}

/* GET Añadir PRODUCTOS. */
const addProducto = (req, res) => {
    res.render('nuevo-producto', {
        title: 'Agregar un Producto',
        footer: 'FOOTER'
    });
};

const doAddProducto = (req, res) => {
    Axios
        .post(`${apiOptions.server}/api/bazar/lista`, {
            nombre: req.body.nombre,
            codigo: req.body.codigo,
            precioNormal: parseFloat(req.body.precioNormal),
            precioDescuento: parseFloat(req.body.precioDescuento),
            capacidad: req.body.capacidad,
            medida: req.body.medida,
            imagen: req.body.imagen,
            semana: req.body.semana,
            stock: req.body.stock,
        })
        .then(function (response) {
            res.redirect('/productos/bazar/lista');
        })
        .catch(function (error) {
            console.log(error);
        });
};
/* POST Añadir Usuarios - Llamada a la API REST */
/*const doAddProducto = (req, res) => {
    const path = '/api/bazar/lista';
    const postdata = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        precioNormal: req.body.precioNormal,
        precioDescuento: req.body.precioDescuento,
        capacidad: req.body.capacidad,
        medida: req.body.medida,
        descuento: req.body.descuento,
        semana: req.body.semana,
        stock: req.body.stock,
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (statusCode === 201) { //HTTP response status 201 : Creado exitoso
                console.log(body);
                //volvemos a mostrar la vista new_user para ingreso de mas documentos
                //y el mensaje de exito en la creación del documento
                res.redirect('/productos/bazar/lista');
                /*res.render('nuevo-producto', {
                    title: 'Crear un nuevo Usuario',
                    mensaje: 'Usuario Creado Exitosamente'
                })
            } else {
                console.log(body);
            }
        }
    );
};*/

/* GET Modificar PRODUCTOS. */
const changeProducto = (req, res) => {
    res.render('updateProd', {
        title: 'Modificar un Producto',
        footer: 'FOOTER'
    });
};
const verUpdateProducto = (req, res) => {
    res.redirect(`/productos/bazar/id/${req.body.codigoUpdate}`);
};

const actualizarProdID = (req, res) => {
    Axios.get(`${apiOptions.server}/api/bazar/id/${req.params.codigoUpdate}`)
        .then(function (response) {
            updateProductos(req, res, response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });
};
/*const actualizarProdID = (req, res) => {
    const path = `/api/bazar/id/${req.params.codigoUpdate}`;
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
            if (err) {
                console.log(err);
            } else if (response.statusCode === 200 && body) {
                console.log(body);
                updateProductos(req, res, body);
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
const updateProductos = (req, res, objRespuesta) => {
    res.render('updateProd', {
        title: `Actualizar ${objRespuesta.nombre}`,
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
        prodId: objRespuesta._id,
    });
};

const doUpdateProducto = (req, res) => {
    if (req.body.nombre != '') {
        Axios
            .put(`${apiOptions.server}/api/bazar/id/${req.params.codigoUpdate}`, {
                nombre: req.body.nombre,
                codigo: req.body.codigo,
                precioNormal: parseFloat(req.body.precioNormal),
                precioDescuento: parseFloat(req.body.precioDescuento),
                capacidad: req.body.capacidad,
                medida: req.body.medida,
                imagen: req.body.imagen,
                semana: req.body.semana,
                stock: req.body.stock,
            })
            .then(function (response) {
                res.redirect('/productos/bazar/lista');
            })
            .catch(function (error) {
            });
    } else {
        res.render("updateProd", {
            errorNombre: 'Nombre vacío'
        });
    }
};

/*const doUpdateProducto = (req, res) => {
    const path = `/api/bazar/id/${req.params.codigoUpdate}`;
    const putdata = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        precioNormal: req.body.precioNormal,
        precioDescuento: req.body.precioDescuento,
        capacidad: req.body.capacidad,
        medida: req.body.medida,
        descuento: req.body.descuento,
        semana: req.body.semana,
        stock: req.body.stock,
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'PUT',
        json: putdata
    };
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (statusCode === 200) { //HTTP response status 201 : Creado exitoso
                console.log(body);
                //volvemos a mostrar la vista new_user para ingreso de mas documentos
                //y el mensaje de exito en la creación del documento
                res.redirect('/productos/bazar/id');
            } else {
                console.log(body);
            }
        }
    );
};*/
const deleteProducto = (req, res) => {
    //console.log(`${apiOptions.server}/api/bazar/id/${req.params.prodId}`);
    Axios.delete(`${apiOptions.server}/api/bazar/id/${req.params.prodId}`)
        .then(function () {
            res.redirect('/productos/bazar/lista');
        })
};
/*const deleteProducto = (req, res) => {
    const path = `/api/bazar/id/${req.params.prodid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'DELETE',
        json: ''
    };
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (statusCode === 201) { //HTTP response status 201 : Creado exitoso
                console.log(body);
                //volvemos a mostrar la vista new_user para ingreso de mas documentos
                //y el mensaje de exito en la creación del documento
                res.redirect('/productos/bazar/lista');
                /*res.render('updateProd', {title: 'Se actualizo'})*/
/*res.render('nuevo-producto', {
    title: 'Crear un nuevo Usuario',
    mensaje: 'Usuario Creado Exitosamente'
})
} else {
console.log(body);
}
}
);
};*/

module.exports = {
    productos,
    addProducto,
    doAddProducto,
    updateProductos,
    actualizarProdID,
    doUpdateProducto,
    deleteProducto,
    changeProducto,
    verUpdateProducto
};