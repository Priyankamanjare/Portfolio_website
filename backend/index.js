
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Resend } from 'resend';

dotenv.config();

const app = express();
// ... (CORS setup remains the same)
app.use(cors({
  origin: 'https://portfolio-website-a7u4.vercel.app',
  credentials: true
}));

app.use(express.json());

// Initialize Resend (use the API key from environment variables)
const resend = new Resend(process.env.RESEND_API_KEY); // ⬅️ NEW INITIALIZATION

// Contact route
app.post('/contact', async (req, res) => {
    console.log('POST /contact called. Body:', req.body);
    const { name, email, message } = req.body;

    // ... (Your validation checks remain the same)

    try {
        // ⬅️ NEW EMAIL SENDING LOGIC (Simple and reliable)
        await resend.emails.send({
            from: 'Your Verified Email <onboarding@resend.dev>', // ⬅️ Use a verified Resend sender/domain
            to: process.env.EMAIL_USER, // Your recipient email
            subject: 'New Portfolio Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        console.log('Email sent successfully via Resend');
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (err) {
        // Resend errors are usually clear and informative
        console.error('Error sending email with Resend:', err);
        res.status(500).json({ error: 'Failed to send email', details: err.message });
    }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
