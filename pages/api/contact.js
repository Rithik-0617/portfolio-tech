import nodemailer from 'nodemailer';

function sanitize(str) {
  return String(str).replace(/[<>&"'`]/g, (c) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;',
  }[c]));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const sanitizedName = sanitize(name);
  const sanitizedEmail = sanitize(email);
  const sanitizedMessage = sanitize(message);

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

  if (!EMAIL_USER || !EMAIL_PASS || !RECIPIENT_EMAIL) {
    return res.status(500).json({ error: 'Server email configuration missing' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${sanitizedName}" <${EMAIL_USER}>`,
    to: RECIPIENT_EMAIL,
    subject: `📩 Portfolio Contact from ${sanitizedName}`,
    html: `
      <h2>📬 New Contact Submission</h2>
      <p><strong>Name:</strong> ${sanitizedName}</p>
      <p><strong>Email:</strong> ${sanitizedEmail}</p>
      <p><strong>Message:</strong><br/>${sanitizedMessage.replace(/\n/g, '<br/>')}</p>
    `,
    replyTo: sanitizedEmail,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Email send failed:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
