const nodemailer = require("nodemailer")

module.exports = function sendMail(toMail, subject, text){
  
  var fromMail = '"HenckeBot AS" <henckebot@outlook.com>'
    
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
    //console.log(respone)
    console.log("Mailen funket!")
});
    
}