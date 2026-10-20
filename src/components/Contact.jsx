import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear specific error as user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Get In Touch</span>
          <h2 className="title">Let's Build Something <span className="gradient-text">Great Together</span></h2>
          <p className="desc">
            Have an IT challenge or custom software requirement? Fill out the form, and our startup team will reach out within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-panel glass-panel">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-subtitle">Feel free to reach out to us directly through any of these channels.</p>
            
            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Us</span>
                  <a href="mailto:info@example.com" className="info-value">info@example.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Call Us</span>
                  <a href="tel:+914431521844" className="info-value">+91 9876543210</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Our Office</span>
                  <span className="info-value">New York, NY 10001</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Business Hours</span>
                  <span className="info-value">Mon - Fri: 8:00 AM - 2:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel glass-panel">
            {isSubmitted ? (
              <div className="form-success-container flex-center">
                <CheckCircle className="success-icon" size={60} />
                <h3 className="success-title">Message Sent Successfully!</h3>
                <p className="success-message">
                  Thank you for reaching out to BMD Global Technologies. We have received your inquiry and our engineering team will contact you shortly.
                </p>
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm" 
                  onClick={() => setIsSubmitted(false)}
                  id="reset-contact-form"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" id="bmd-contact-form" noValidate>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'invalid' : ''}`}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      required
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'invalid' : ''}`}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'invalid' : ''}`}
                    placeholder="Project Inquiry / Consultation"
                    disabled={isSubmitting}
                    required
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`form-input form-textarea ${errors.message ? 'invalid' : ''}`}
                    placeholder="Tell us about your project, technology needs, or consulting questions..."
                    disabled={isSubmitting}
                    required
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100" 
                  disabled={isSubmitting}
                  id="submit-contact"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'} 
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
