const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
const main = async function (remetente, titulo, mensagem) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        tls: {
            rejectUnauthorized: false
        },
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "bfdf2026ef64a2", // generated ethereal user
            pass: "6d8114650714d4" // generated ethereal password
        }
    });

    await transporter.sendMail({
        from: remetente, // sender address
        to: "viniciussobral077@gmail.com", // list of receivers
        subject: titulo, // Subject line
        text: mensagem, // plain text body
        // html: '<b>Hello world?</b>' // html body
    });
}

module.exports = main;