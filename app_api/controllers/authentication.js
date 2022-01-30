const passport = require('passport');
const mongoose = require('mongoose');
const Security = mongoose.model('Security');

const Register = (req, res) => {
    if (!req.body.user || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "Todos los campos son obligatorios" });
    }

    const User = new Security();
    User.user = req.body.user;
    User.setPassword(req.body.password);
    User.save((err) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            const token = User.generateJwt();
            res
                .status(200)
                .json({ token });
        }
    })
};

const Login = (req, res) => {
    if (!req.body.user || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "Todos los campos son obligatorios" });
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        } else {
            res
                .status(401)
                .json(info)
        }
    })(req, res);
};

module.exports = {
    Register,
    Login
}