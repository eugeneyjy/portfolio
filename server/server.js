const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 8000

const transport = {
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASSWORD
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.get('/', (req, res, next) => {
    res.status(200).send({
        msg: "Heroku GET test"
    });
});

app.post('/sendmail', (req, res, next) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message;
    
    const mail = {
        from: `Portfolio-Contact <${process.env.EMAILUSER}>`,
        to: 'eugeneyjy314@gmail.com',
        replyTo: `${name} <${email}>`,
        subject: subject,
        text: message
    };    

    transporter.sendMail(mail, (error, data) => {
        if(error) {
            console.log(error);
            res.status(500).send({
                error: error
            });
        } else {
            res.status(200).send({
                status: 'success'
            });
        }
    });
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("== Server listening on PORT " + port);
    }
});