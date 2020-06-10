const nodemailer = require("nodemailer")

module.exports = function sendMail(toMail, subject, text){
  
  var fromMail = '"HenckeBot" <HenckeBot@outlook.com>'
    
  /*
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'HenckeBot@outlook.com',
        pass: process.env.mailPass
    }
});
  */
  var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "henckebot@outlook.com",
        pass: process.env.mailPass
    }
});
  
  let mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: text
};
  
  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log(error);
    }
    console.log(response)
});
    
}