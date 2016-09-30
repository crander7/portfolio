const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('./config.js');

const app = express();
const EMAIL_ACCOUNT_USER = config.email;
const EMAIL_ACCOUNT_PASSWORD = config.password;
const YOUR_NAME = config.name;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_ACCOUNT_USER,
    pass: EMAIL_ACCOUNT_PASSWORD
  }
});

app.post('/email', (req, res, next) => {
    smtpTransport.sendMail({
      from: `${YOUR_NAME} ${EMAIL_ACCOUNT_USER}`,
      to: 'andersen.craigm@gmail.com',
      subject: 'Message from Portfolio Site',
      text: `From: ${req.body.name} at ${req.body.email}. ${req.body.message}, and their phone is ${req.body.phone}`
    }, function(error, response) {
      if (error) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
      smtpTransport.close();
    });
});

app.listen(config.port, () => {
  console.log("Listening on port:", config.port);
});
