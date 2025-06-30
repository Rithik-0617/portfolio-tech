import nodemailer from 'nodemailer';

function sanitize(str) {
  return String(str)
    .replace(/[<>&"'`]/g, c => ({
      '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;', '`': '&#96;'
    }[c]));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let { name, email, message, captcha } = req.body;

  // Simple math captcha check (e.g., pass "captcha": "7" for 3+4)
  if (captcha !== '7') {
    return res.status(400).json({ error: 'Captcha failed' });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  name = sanitize(name);
  email = sanitize(email);
  message = sanitize(message);

  // Sender credentials from environment variables
  const EMAIL_USER = process.env.EMAIL_USER; // rithikenginner1706@gmail.com
  const EMAIL_PASS = process.env.EMAIL_PASS; // ignlyynfakllfppi

  // Receiver credentials (use as recipient only, do not use password)
  const RECIPIENT_EMAIL = 'rithikve90250@gmail.com';

  if (!EMAIL_USER || !EMAIL_PASS || !RECIPIENT_EMAIL) {
    return res.status(500).json({ error: 'Email configuration missing' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${EMAIL_USER}>`,
    to: RECIPIENT_EMAIL,
    subject: `📩 Portfolio Contact from ${name}`,
    html: `
      <h2>📬 New Contact Form Submission</h2>
      <p><strong>🧑 Name:</strong> ${name}</p>
      <p><strong>📧 Email:</strong> ${email}</p>
      <p><strong>💬 Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Failed to send email.', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
