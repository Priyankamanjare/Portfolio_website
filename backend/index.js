import express, { json } from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
app.use(json());

app.post('/contact', async(req, res) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({error: "All fields are required"});
    }

    let transporter = createTransport(
        {
            service : "gmail",
            auth: {
                user : process.env.EMAIL,
                pass : process.env.PASSWORD
            }
        }
    );
    
    let mailOptions = {
        from : email,
        to : process.env.EMAIL_USER,
        subject : "New Contact Form Submission",
        text : `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", process.env.EMAIL_USER);
        res.status(200).json({message: "Email sent successfully"});
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({error: "Failed to send email"});
    }
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
