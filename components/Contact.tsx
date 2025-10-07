'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-section-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="retro-heading text-4xl md:text-5xl text-center mb-6">
          CONTACT ME
        </h2>
        <p className="text-center text-2xl mb-12 max-w-2xl mx-auto text-primary">
          Let&apos;s build something awesome together! 💬
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="pixel-card p-8">
            <h3 className="text-3xl font-bold mb-6 text-[#ff6b35]">
              Send me a message! 📧
            </h3>

            {submitted && (
              <div className="mb-6 bg-green-100 border-4 border-green-500 p-4 text-green-800 text-lg font-bold">
                ✅ Message sent! I&apos;ll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl font-bold mb-2 text-primary">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-4 border-[var(--pixel-border)] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors bg-[var(--card-bg)] text-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xl font-bold mb-2 text-primary">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-4 border-[var(--pixel-border)] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors bg-[var(--card-bg)] text-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xl font-bold mb-2 text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-4 border-[var(--pixel-border)] text-lg focus:outline-none focus:border-[#ff6b35] transition-colors resize-none bg-[var(--card-bg)] text-primary"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full pixel-button px-8 py-4 text-sm"
              >
                SEND MESSAGE →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="pixel-card p-8">
              <h3 className="text-3xl font-bold mb-6 text-[#ff6b35]">
                Connect with me! 🌐
              </h3>
              <div className="space-y-4 text-xl text-primary">
                <p>
                  I&apos;m always excited to connect with fellow developers, 
                  discuss projects, or just chat about code!
                </p>
                <p>
                  Feel free to reach out through any of these platforms:
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="https://github.com/tejuiceB"
                target="_blank"
                rel="noopener noreferrer"
                className="block pixel-card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">💻</div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#ff6b35]">GitHub</h4>
                    <p className="text-lg text-primary">@tejuiceB</p>
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/tejas-bhurbhure-b35b0b218"
                target="_blank"
                rel="noopener noreferrer"
                className="block pixel-card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">💼</div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#ff6b35]">LinkedIn</h4>
                    <p className="text-lg text-primary">Tejas Bhurbhure</p>
                  </div>
                </div>
              </a>

              <a
                href="https://leetcode.com/u/tejuice/"
                target="_blank"
                rel="noopener noreferrer"
                className="block pixel-card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">�</div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#ff6b35]">LeetCode</h4>
                    <p className="text-lg text-primary">@tejuice (300+ solved)</p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:tejasbhurbhure06@gmail.com"
                className="block pixel-card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">📧</div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#ff6b35]">Email</h4>
                    <p className="text-lg text-primary">tejasbhurbhure06@gmail.com</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+919373483034"
                className="block pixel-card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">📞</div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#ff6b35]">Phone</h4>
                    <p className="text-lg text-primary">+91 9373483034</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="pixel-card p-8 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white border-[#ff6b35]">
            <p className="text-2xl mb-4 font-bold">
              Thanks for visiting my portfolio! 🎉
            </p>
            <p className="text-xl mb-4">
              Made with ❤️ for the Codédex Monthly Challenge (October 2025)
            </p>
            <p className="text-lg">
              © 2025 Tejas Bhurbhure. All rights reserved. | Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
