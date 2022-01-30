/* CONTROLADORES PARA LA COLLETION LOGIN*/
/* GET LOGIN */
const login = (req, res) => {
    res.render('login', { title: 'Log in', footer: 'FOOTER' });
};

module.exports = {
    login,
};