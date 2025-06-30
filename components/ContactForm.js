'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captcha }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setCaptcha('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
        Contact Me
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="captcha"
        placeholder="What is 3 + 4?"
        value={captcha}
        onChange={e => setCaptcha(e.target.value)}
        required
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded hover:from-blue-700 hover:to-purple-700 transition"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <div className="text-green-600 text-center mt-2">Message sent successfully!</div>
      )}
      {status === 'error' && (
        <div className="text-red-600 text-center mt-2">Failed to send message. Please try again.</div>
      )}
    </form>
  );
}
