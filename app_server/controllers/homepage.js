const { default: Axios } = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tupperware-dw3.herokuapp.com';
}
/* CONTROLADORES PARA LA COLLETION HOME PAGE*/
/* GET HOME PAGE */
const homepage = (req, res, objRes) => {
    res.render('index', {
        video: objRes.video
    });
};

/*const verVideo = (req, res) => {
    Axios.get(`${apiOptions.server}/api/home/video`)
    .then(function (response){
        res.render("index", {
            video: response.data            
        });
        console.log(response.data);        
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};*/
const verVideo = (req, res, objRes) => {
    Axios.get(`${apiOptions.server}/api/home/video`)
    .then(function (response){
        res.render('index', {
            video: response.data
        })/*visualizarVideo(req, res, response.data);*/    
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (){

    });
};
/*const visualizarVideo = (req, res, objRes) => {
    res.render('index', {
        title: 'VideoEntro',
        video: objRes.data  
    });
    console.log(`Video: ${objRes.video}`);
};*/
module.exports = {
    verVideo
};