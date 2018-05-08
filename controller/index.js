var smtpConfig = require('../config/smtpConfig');
var nodemailer = require('nodemailer');

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
}

exports.contact = function(req, res){
    console.log(req.body);
    var smtpTransport = nodemailer.createTransport(smtpConfig);
    var mailOptions;
    mailOptions={
        to : 'support@beanystudio.com',
        subject : "New message from "+req.body.name,
        html : req.body.message + '<br>' + 'From ' + req.body.company
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            res.json({isSuccess: false});
        }else{
            res.json({isSuccess: true});
        }
    });
}