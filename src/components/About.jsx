import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Zap className="value-icon" size={24} />,
      title: "Agile & Fast",
      desc: "As a nimble startup, we pivot rapidly and deliver solutions without typical corporate overhead."
    },
    {
      icon: <Target className="value-icon" size={24} />,
      title: "Result-Driven",
      desc: "We focus on real-world business outcomes, ensuring every line of code adds business value."
    },
    {
      icon: <Users className="value-icon" size={24} />,
      title: "Client-Centric",
      desc: "We operate as your extended team, communicating transparently throughout the development cycle."
    },
    {
      icon: <Award className="value-icon" size={24} />,
      title: "All-Round Experts",
      desc: "From basic web setups to complex system design, we do all kinds of IT projects."
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Who We Are</span>
          <h2 className="title">A Small Startup with <span className="gradient-text">Massive Capabilities</span></h2>
          <p className="desc">
            At BMD Global Technologies, we break down complex digital barriers. We are a agile, passionate team 
            of engineers and IT specialists dedicated to building the future.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative glass-panel">
            <h3 className="about-subtitle">Our Story & Approach</h3>
            <p className="about-text">
              We started BMD Global Technologies with a simple vision: to make premier IT solutions accessible to businesses of all sizes. 
              As a young, hungry startup, we don't believe in boilerplate services. We dive deep into your workflow to build systems that perfectly fit your goals.
            </p>
            <p className="about-text">
              Whether you need a simple responsive website, a full-scale mobile app, security hardening, or cloud integrations, we've got you covered. 
              <strong> We do IT services and all kinds of technology projects.</strong> No task is too small for our attention, and no architecture is too complex for our capabilities.
            </p>
            <div className="about-stats-mini">
              <div className="mini-stat">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Agile Delivery</span>
              </div>
              <div className="mini-stat">
                <span className="stat-num">24/7</span>
                <span className="stat-lbl">Direct Support</span>
              </div>
              <div className="mini-stat">
                <span className="stat-num">Flexible</span>
                <span className="stat-lbl">Pricing Plans</span>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3 className="about-subtitle text-center-mobile">Why Partner With Us?</h3>
            <div className="values-grid">
              {values.map((val, idx) => (
                <div key={idx} className="value-card glass-panel">
                  <div className="value-icon-container">
                    {val.icon}
                  </div>
                  <h4 className="value-title">{val.title}</h4>
                  <p className="value-desc">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
