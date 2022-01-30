const nodemailer = require('nodemailer');
const { compileClientWithDependenciesTracked } = require('pug');
const { body, validationResult } = require('express-validator');
const contacto = (req, res) => {
    res.render('contacto', { title: 'CONTACTO', footer: 'FOOTER' });
};

const sendEmail = async (req, res) => {
    const { nombre, asunto, celular, mensaje } = req.body;
        contentHTML = `
        <h1>Información de usuario</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Asunto: ${asunto}</li>
            <li>Celular: ${celular}</li>
            <li>Mensaje: ${mensaje}</li>
        </ul>
    `;
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 587,
            secure: false,
            auth: {
                user: 'contacto@tupperwaredistribuidoraenergia.com',
                pass: 'Contacto1998?'
            },
            /*tls: {
                rejectUnauthorized: false
            }*/
        });
        const info = await transporter.sendMail({
            from: "'Página de Energía' <contacto@tupperwaredistribuidoraenergia.com>",
            to: 'burbanopozo.sb@gmail.com',
            subject: 'Página de Contacto Energía',
            html: contentHTML
        });
        console.log('Mensaje enviado', info)

        res.redirect('/contacto');
};

module.exports = {
    sendEmail,
    contacto
};