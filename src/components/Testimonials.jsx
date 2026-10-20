import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Working with BMD Global Technologies was a game changer for our operations. As a startup, they brought extreme agility and focus. They completely refactored our legacy data systems in under a month.",
      name: "Sarah Jenkins",
      role: "CTO, RetailFlow Systems",
      rating: 5
    },
    {
      quote: "Their team built our primary client portal. The design is absolutely beautiful, fully responsive, and works flawlessly. They handle all our ongoing IT services and minor tweaks with speed and ease.",
      name: "Marcus Vance",
      role: "Founder, Peak Health App",
      rating: 5
    },
    {
      quote: "BMD Global Technologies conducted a deep penetration audit on our API endpoints. Their findings and remediation reports saved us from potential critical compliance failures. Highly professional startup!",
      name: "David Chen",
      role: "Director of Security, LedgerEdge",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Client Reviews</span>
          <h2 className="title">What People Say <span className="gradient-text">About BMD</span></h2>
          <p className="desc">
            We measure our success by the satisfaction of our clients. Here is what they say about our startup engineering capabilities.
          </p>
        </div>

        <div className="testimonials-slider-container">
          <div className="testimonial-slide glass-panel">
            <Quote className="quote-icon" size={48} />
            <div className="testimonial-rating">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="star-icon" size={16} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-quote">
              "{testimonials[activeIndex].quote}"
            </p>
            <div className="testimonial-author">
              <h4 className="author-name">{testimonials[activeIndex].name}</h4>
              <span className="author-role">{testimonials[activeIndex].role}</span>
            </div>
          </div>

          <div className="slider-controls flex-center">
            <button 
              type="button" 
              className="slider-control-btn" 
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              id="prev-testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="slider-indicator">
              {activeIndex + 1} / {testimonials.length}
            </span>
            <button 
              type="button" 
              className="slider-control-btn" 
              onClick={handleNext}
              aria-label="Next Testimonial"
              id="next-testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
