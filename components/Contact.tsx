'use client';

import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
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
    <section id="contact" className="py-[8vh] sm:py-[10vh] lg:py-[12vh] relative bg-white px-[2vw] sm:px-[3vw] lg:px-[4vw]">
      <div ref={ref} className="container mx-auto relative z-10 max-w-[95vw]">
        <div className={`transition-all duration-1000 ${inView ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-[8vh] sm:mb-[10vh]">
            <h2 className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] 2xl:text-[2.5vw] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-[2vh]">
              Get In Touch
            </h2>
            <div className="w-[8vw] sm:w-[6vw] lg:w-[4vw] xl:w-[3vw] 2xl:w-[2.5vw] h-[0.5vh] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-[3vh]"></div>
            <p className="text-gray-700 text-[2.5vw] sm:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1vw] max-w-[60vw] mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="max-w-[90vw] mx-auto grid md:grid-cols-2 gap-[4vw] sm:gap-[6vw]">
            {/* Contact Info */}
            <div className="space-y-[3vh] sm:space-y-[4vh]">
              <h3 className="text-[3.5vw] sm:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] 2xl:text-[1.8vw] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-[2vh]">
                Let's Connect
              </h3>
              
              <div className="space-y-[2vh] sm:space-y-[3vh]">
                <a 
                  href="mailto:rithikve90250@gmail.com"
                  className="flex items-center gap-[2vw] p-[2vw] sm:p-[1.5vw] lg:p-[1.2vw] xl:p-[1vw] 2xl:p-[0.8vw] glass-effect rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="p-[1.5vw] sm:p-[1.2vw] lg:p-[1vw] xl:p-[0.8vw] 2xl:p-[0.6vw] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                  </div>
                  <div>
                    <p className="text-blue-700 font-semibold text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]">Email</p>
                    <p className="text-gray-700 text-[2vw] sm:text-[1.6vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw] break-all">rithikve90250@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-[2vw] p-[2vw] sm:p-[1.5vw] lg:p-[1.2vw] xl:p-[1vw] 2xl:p-[0.8vw] glass-effect rounded-xl">
                  <div className="p-[1.5vw] sm:p-[1.2vw] lg:p-[1vw] xl:p-[0.8vw] 2xl:p-[0.6vw] bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Phone className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                  </div>
                  <div>
                    <p className="text-blue-700 font-semibold text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]">Phone</p>
                    <p className="text-gray-700 text-[2vw] sm:text-[1.6vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">+91 9025016516</p>
                  </div>
                </div>

                <div className="flex items-center gap-[2vw] p-[2vw] sm:p-[1.5vw] lg:p-[1.2vw] xl:p-[1vw] 2xl:p-[0.8vw] glass-effect rounded-xl">
                  <div className="p-[1.5vw] sm:p-[1.2vw] lg:p-[1vw] xl:p-[0.8vw] 2xl:p-[0.6vw] bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <MapPin className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                  </div>
                  <div>
                    <p className="text-blue-700 font-semibold text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]">Location</p>
                    <p className="text-gray-700 text-[2vw] sm:text-[1.6vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect rounded-xl p-[3vw] sm:p-[2.5vw] lg:p-[2vw] xl:p-[1.5vw] 2xl:p-[1.2vw]">
              <h3 className="text-[3.5vw] sm:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] 2xl:text-[1.8vw] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-[3vh]">
                Send a Message
              </h3>
              
              <form className="space-y-[2vh] sm:space-y-[3vh]" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-[2vw] sm:px-[1.5vw] lg:px-[1.2vw] xl:px-[1vw] 2xl:px-[0.8vw] py-[1.5vh] sm:py-[2vh] lg:py-[2.5vh] bg-blue-50 border border-blue-100 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-colors text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-[2vw] sm:px-[1.5vw] lg:px-[1.2vw] xl:px-[1vw] 2xl:px-[0.8vw] py-[1.5vh] sm:py-[2vh] lg:py-[2.5vh] bg-blue-50 border border-blue-100 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-colors text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-[2vw] sm:px-[1.5vw] lg:px-[1.2vw] xl:px-[1vw] 2xl:px-[0.8vw] py-[1.5vh] sm:py-[2vh] lg:py-[2.5vh] bg-blue-50 border border-blue-100 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-colors resize-none text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-[1vw] px-[2vw] sm:px-[1.5vw] lg:px-[1.2vw] xl:px-[1vw] 2xl:px-[0.8vw] py-[1.5vh] sm:py-[2vh] lg:py-[2.5vh] bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]"
                >
                  <Send className="w-[2.5vw] h-[2.5vw] sm:w-[2vw] sm:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] 2xl:w-[1vw] 2xl:h-[1vw]" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'success' && (
                  <div className="text-green-600 mt-2 text-center text-[1.2vw]">Message sent successfully!</div>
                )}
                
                {status === 'error' && (
                  <div className="text-red-600 mt-2 text-center text-[1.2vw]">Failed to send message. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;