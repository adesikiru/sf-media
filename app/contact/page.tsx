"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    reason: "General Inquiry",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact: ${formData.reason}`);
    const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ceo@sfmedia.ca?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      {/* Navigation */}
      <header className="site-header" style={{ background: 'var(--navy)' }}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <span className="logo-mark">SF</span>
            <span className="logo-text">
              <strong>SF MEDIA</strong>
              <small>MANAGEMENT & MULTIPURPOSE INC.</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#presence">Our Presence</Link>
            <Link href="/contact" className="nav-cta">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="section-heading centered" style={{ marginBottom: '40px' }}>
            <p className="section-label">GET IN TOUCH</p>
            <h2 style={{ marginTop: '10px' }}>
              Contact <span>Us</span>
            </h2>
            <p style={{ marginTop: '15px' }}>Fill out the form below to send a message directly to our CEO.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--off-white)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '15px', fontFamily: 'inherit' }}
                placeholder="Your full name"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="reason" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>Reason for Contact</label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '15px', fontFamily: 'inherit', background: 'white' }}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Media Management">Media Management</option>
                <option value="Strategic Communications">Strategic Communications</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Brand Management">Brand Management</option>
                <option value="Event Coverage">Event Coverage</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '15px', fontFamily: 'inherit', resize: 'vertical' }}
                placeholder="How can we help you?"
              />
            </div>

            <button type="submit" className="button button-primary" style={{ marginTop: '10px', width: '100%', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-bottom" style={{ borderTop: 'none', padding: '40px 0' }}>
          <span>
            © 2022 SF Media Management and Multipurpose Inc. All Rights Reserved.
          </span>
          <span>Canada · Beyond</span>
        </div>
      </footer>
    </main>
  );
}
