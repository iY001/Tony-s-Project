const { PrismaClient } = require('@prisma/client')
const transporter = require('./mailConfigration')
const jwt = require("jsonwebtoken")

const sendMail = async (email, token) => {
    transporter.sendMail({
        from: 'tonysproject12@gmail.com',
        to: email,
        subject: "Password Reset",
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forgot Password</title>
        <style>
          /* Reset styles */
          body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
        
          /* Container styles */
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
        
          /* Header styles */
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
        
          /* Form styles */
          form {
            text-align: center;
          }
        
          /* Button styles */
          .btn {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }
        
          /* Link styles */
          .link {
            color: #007bff;
            text-decoration: none;
          }
        
        </style>
        </head>
        <body>
        <div class="container">
          <div class="header">
            <h2>Forgot Password</h2>
          </div>
          <a href="${process.env.CLIENT}/auth/resetpassword?token=${token}&email=${email}" class="btn">Reset Password</a>
          <p>If you remember your password, <a href="#" class="link">click here to log in</a>.</p>
        </div>
        </body>
        </html>`,
    })
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.query
        if (!email) {
            return res.status(400).send({
                message: "Email Required"
            })
        }
        const prisma = new PrismaClient()
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(404).send({
                message: "User Not Found"
            })
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '3m' })
        sendMail(email, token)
        res.status(200).send({
            message: "Email Sent"
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Error Sending Email",
            error: err.message
        })
    }
}



module.exports = forgotPassword