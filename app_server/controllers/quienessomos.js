const { default: Axios } = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}
/* CONTROLADORES PARA LA COLLETION QUIENES SOMOS*/
/* GET QUIENES SOMOS */
/*const verCarousel = (req, res) => {
    Axios.get(`${apiOptions.server}/api/quienes-somos/carousel`)
    .then(function (response){
        res.render('quienessomos', {
            imgCarousel: response.data          
        })
        //visualizarVideo(req, res, response.data);
        console.log(response.data);     
    })
    .catch(function (error) {
        console.log(error);
    })
};
const verDirectoras = (req, res) => {
    Axios.get(`${apiOptions.server}/api/quienes-somos/directoras`)
    .then(function (response){
        res.render('quienessomos', {
            directoras: response.data
        })
        //visualizarVideo(req, res, response.data);
        console.log(response.data);     
    })
    .catch(function (error) {
        console.log(error);
    })
};*/

const verTodo = (req, res) => {
    Axios.all([
        Axios.get(`${apiOptions.server}/api/quienes-somos/carousel`),
        Axios.get(`${apiOptions.server}/api/quienes-somos/directoras`),
        Axios.get(`${apiOptions.server}/api/quienes-somos/testimoniales`)
    ])
    .then(Axios.spread((obj1, obj2, obj3) => { 
        res.render('quienessomos', {
            imgCarousel: obj1.data,
            directoras: obj2.data,
            testimoniales: obj3.data 
        })
    }))
    .catch(function (error) {
        console.log(error);        
    })
}
module.exports = {
    verTodo
};