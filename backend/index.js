import express from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://portfolio-website-a7u4.vercel.app',
  'https://portfolio-website-2-mnti.onrender.com'
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); 
    if(allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());

// Test endpoint to verify CORS
app.get('/test', (req, res) => {
  res.json({ message: 'CORS is working!', timestamp: new Date().toISOString() });
});

// Contact route
app.post('/contact', async (req, res) => {
  console.log('POST /contact called. Body:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log('Validation failed: missing fields');
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!process.env.EMAIL || !process.env.PASSWORD || !process.env.EMAIL_USER) {
    console.log('Server email configuration missing');
    return res.status(500).json({ error: "Server email configuration missing" });
  }

  try {
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', process.env.EMAIL_USER);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
