const nodemailer = require("nodemailer")

module.exports = function sendMail(toMail, subject, text){
  
  var fromMail = "HenckeBot@outlook.com"
    
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'HenckeBot@outlook.com',
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