const nodemailer = require('nodemailer');
const info = require('../../resources/email.information.json');
const { sendResponse } = require('../common/response');

const transporter = nodemailer.createTransport({
    host: 'gsmtp',
    service: 'gmail',
    port: 587,
    auth: {
      user: info.email,
      pass: info.app_password
    }
});

const options = {
    from: '',
    to: '',
    subject: '',
    html: ''
}

const sendEmail = (emailOptions, html, res) => {
    options.from = info.email;
    options.to = emailOptions.to
    options.subject = emailOptions.subject
    options.html = html

    transporter.sendMail(options, function(error){
        if (error) {
          sendResponse(500, emailOptions.onError,{},res);
        } else {
          sendResponse(200, emailOptions.onSuccess,{},res);
        }
    });
}

module.exports = {
  sendEmail
}