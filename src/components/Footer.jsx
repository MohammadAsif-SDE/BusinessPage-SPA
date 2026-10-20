import React, { useState } from 'react';
import { Cpu, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <a href="#home" className="footer-logo">
            <Cpu className="logo-icon" size={24} />
            <span className="logo-text">BMD <span className="logo-text-accent">Global</span></span>
          </a>
          <p className="footer-brand-text">
            Nimble IT solutions and enterprise-grade software development engineered by a passionate, fast-growing startup.
          </p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="BMD Github Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="BMD LinkedIn Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="BMD Twitter Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links-list">
            <li><a href="#services">Custom Software</a></li>
            <li><a href="#services">Cloud & DevOps</a></li>
            <li><a href="#services">Cyber Security</a></li>
            <li><a href="#services">IT Consulting</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#portfolio">Our Portfolio</a></li>
            <li><a href="#testimonials">Reviews</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-newsletter-col">
          <h4 className="footer-heading">Subscribe</h4>
          <p className="newsletter-text">Stay updated with our latest technology articles and insights.</p>
          
          {isSubscribed ? (
            <p className="newsletter-success">✓ Subscribed successfully!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form" id="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter" id="newsletter-submit">
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-container flex-center">
          <p className="copyright-text">
            © {new Date().getFullYear()} BMD Global Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
