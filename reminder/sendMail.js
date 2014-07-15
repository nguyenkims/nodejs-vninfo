var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "vninfo.demo@gmail.com",
        pass: "demo.vninfo"
    }
});

var send = function(mail, text, time){
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "VN-INFO <vninfo.demo@gmail.com>",
        to: mail,
        subject: "Do not forget to " + text,
        text: "You told us to send this mail on " + time + " and voilà !"        
    }

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
};

exports.send = send;