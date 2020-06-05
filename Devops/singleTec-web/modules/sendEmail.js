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
            user: "32ac5b09cb77c4", // generated ethereal user
            pass: "0860f2bc029a2b" // generated ethereal password
        }
    });

    return await transporter.sendMail({
        from: remetente, // sender address
        to: "singletecgrupo3@gmail.com", // list of receivers
        subject: titulo, // Subject line
        text: mensagem, // plain text body
        // html: '<b>Hello world?</b>' // html body
    });
}

module.exports = main;