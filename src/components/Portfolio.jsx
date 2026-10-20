import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Dev' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud/DevOps' },
    { id: 'security', name: 'Cyber Sec' }
  ];

  const projects = [
    {
      id: 1,
      title: "OmniChannel E-Commerce",
      category: "web",
      tech: ["React", "Node.js", "GraphQL", "PostgreSQL"],
      desc: "A custom headless e-commerce store with lighting-fast load times and localized payment integrations."
    },
    {
      id: 2,
      title: "Fintech Mobile Wallet",
      category: "mobile",
      tech: ["React Native", "Express", "MongoDB", "BiometricAuth"],
      desc: "Secure peer-to-peer payment mobile application featuring multi-currency wallets and instant bank transfers."
    },
    {
      id: 3,
      title: "Cloud Infrastructure Audit",
      category: "cloud",
      tech: ["AWS", "Terraform", "Docker", "Kubernetes"],
      desc: "Migrated a legacy backend to multi-region cloud setup, automating resource scaling and reducing monthly costs by 40%."
    },
    {
      id: 4,
      title: "FinTech Compliance Scan",
      category: "security",
      tech: ["Kali Linux", "OWASP ZAP", "IDS/IPS", "PenTesting"],
      desc: "End-to-end vulnerability scanning and security penetration audit for a high-volume financial transaction platform."
    },
    {
      id: 5,
      title: "Smart Logistics Portal",
      category: "web",
      tech: ["React", "Django", "PostgreSQL", "Google Maps API"],
      desc: "Real-time dispatch system showing vehicle telematics, route optimizations, and digital proof-of-delivery."
    },
    {
      id: 6,
      title: "Healthcare Wellness App",
      category: "mobile",
      tech: ["Flutter", "Firebase", "WebSockets", "PushNotifications"],
      desc: "An intuitive patient care portal facilitating telehealth consults, symptom tracking, and secure chat."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Our Work</span>
          <h2 className="title">Proven Digital <span className="gradient-text">Success Stories</span></h2>
          <p className="desc">
            Take a look at some of the systems we've delivered. We handle everything from high-security audits to full-scale web platforms.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="portfolio-filters flex-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(proj => (
            <div key={proj.id} className="portfolio-card glass-panel fade-in-up">
              <div className="portfolio-icon-bar">
                <Folder className="folder-icon" size={24} />
                <a href="#contact" className="external-link" aria-label="View Project Case Study">
                  <ExternalLink size={18} />
                </a>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech-tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
