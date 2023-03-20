const nodemailer = require("nodemailer");
require('dotenv').config()

// const { META_PASSWORD } = process.env;
const { OUTLOOK_PASSWORD } = process.env;

const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
    host: "smtp.office365.com",
    port: 587,
    secure: true,
    auth:{
        user: "sergvah@outlook.com",
        pass: OUTLOOK_PASSWORD
  }
}

const sendEmail = async(email, verificationToken) => {

const transport = nodemailer.createTransport(nodemailerConfig)

const emailData = {

  to: email,
  // to:"gocam61996@etondy.com",
//   from: "sergvah@meta.ua",
  from: "sergvah@outlook.com",
  subject: "Test email",
  html: `<p>To verify your email:<a href="http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}" target="_blank">
  click here</a></p>`,
}
console.log(email)
await transport.sendMail(emailData)
.then(()=>console.log("Email send success"))
.catch(error=> console.log(error.message))
}
module.exports = sendEmail;