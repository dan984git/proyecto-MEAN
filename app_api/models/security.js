const mongoose = require('mongoose');
const crypto = require('crypto');

const jwt = require('jsonwebtoken');

const securitySchema =  new mongoose.Schema({ // Definicion del esquema
    user: {
        type: String,
        unique: true,
        required: true
    },    
    tipo: {
        type: String,
        enum: ['Administrador','Normal']
    },
    hash: String,
    salt: String
});

securitySchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};
securitySchema.methods.validPassword = function(password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
};

securitySchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        user: this.user,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
};

mongoose.model('Security', securitySchema);

