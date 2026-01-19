import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Error verifying transporter:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Email to Admin (You)
    const mailOptions = {
        from: `"${name}" <${email}>`, 
        to: process.env.ADMIN_EMAIL,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject}`,
        text: `
        Nuevo mensaje de contacto del portafolio:
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No inidicado'}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
        `,
        html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No inidicado'}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ status: 'success', message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: 'error', message: 'Failed to send email' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
