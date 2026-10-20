import React from 'react';
import { Code, Cloud, Shield, Lightbulb, Smartphone, BarChart3, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Code size={30} />,
      title: "Custom Software",
      desc: "Tailored software applications built to fit your unique business operations, maximizing efficiency and scale."
    },
    {
      icon: <Cloud size={30} />,
      title: "Cloud & DevOps",
      desc: "Modern, secure cloud architecture migrations on AWS/GCP, coupled with automated CI/CD deployment pipelines."
    },
    {
      icon: <Shield size={30} />,
      title: "Cyber Security",
      desc: "Vulnerability analysis, threat mitigation, system hardening, and secure coding audits to keep operations safe."
    },
    {
      icon: <Lightbulb size={30} />,
      title: "IT Consulting",
      desc: "Strategic guidance on selecting, implementing, and optimizing technologies to achieve your business goals."
    },
    {
      icon: <Smartphone size={30} />,
      title: "Web & Mobile Apps",
      desc: "Stunning, high-performance responsive web and native iOS/Android applications built for stellar user experiences."
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Data Systems",
      desc: "Intelligent database design, warehousing setups, and analytics tools to turn operations data into action."
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Our Expertise</span>
          <h2 className="title">IT Services Tailored <span className="gradient-text">For Your Growth</span></h2>
          <p className="desc">
            We deliver state-of-the-art tech engineering. Whatever your digital needs, our small startup executes it with enterprise precision.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((svc, idx) => (
            <div key={idx} className="service-card glass-panel">
              <div className="service-icon-wrapper">
                {svc.icon}
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <a href="#contact" className="service-link">
                Discuss Project <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
