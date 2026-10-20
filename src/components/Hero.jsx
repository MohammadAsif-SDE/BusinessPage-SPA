import React from 'react';
import { ArrowRight, Activity, Database, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      {/* Decorative Orbs */}
      <div className="glow-orb" style={{ top: '10%', left: '15%', width: '400px', height: '400px', background: 'var(--color-primary)' }}></div>
      <div className="glow-orb" style={{ bottom: '20%', right: '10%', width: '350px', height: '350px', background: 'var(--color-secondary)' }}></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Next-Generation IT Solutions</span>
          </div>
          <h1 className="hero-title">
            Architecting <span className="gradient-text">Digital Frontiers</span> For Modern Enterprises
          </h1>
          <p className="hero-description">
            BMD Global Technologies designs, builds, and deploys high-performance software systems. 
            From cloud engineering and custom software development to cybersecurity and IT strategy.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="hero-cta-primary">
              Launch Your Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary" id="hero-cta-secondary">
              Our Services
            </a>
          </div>

          <div className="hero-trust">
            <p className="trust-text">Pioneering solutions in:</p>
            <div className="trust-icons">
              <span className="trust-badge" title="High Performance Systems"><Zap size={16} /> Speed</span>
              <span className="trust-badge" title="Data Security"><Shield size={16} /> Security</span>
              <span className="trust-badge" title="Cloud Systems"><Database size={16} /> Cloud</span>
              <span className="trust-badge" title="AI and Automation"><Activity size={16} /> Systems</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-wrapper glass-panel">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">bmd-system-core.sh</div>
            </div>
            <div className="terminal-body">
              <p className="terminal-line"><span className="text-accent">$</span> init bmd-global-tech --version 1.0.0</p>
              <p className="terminal-line text-success">✓ Initializing BMD Global core modules...</p>
              <p className="terminal-line text-success">✓ Establishing secure database handshakes...</p>
              <p className="terminal-line"><span className="text-accent">$</span> status --detailed</p>
              <div className="terminal-output">
                <p>🚀 Systems: <span className="text-glow">ONLINE</span></p>
                <p>⚙️ IT Services: <span className="text-success">ACTIVE</span></p>
                <p>🛡️ Cyber Security: <span className="text-success">SECURED</span></p>
                <p>⚡ Latency: <span className="text-success">0.8ms</span></p>
              </div>
              <p className="terminal-line"><span className="text-accent">$</span> run services-delivery --target=client-growth</p>
              <p className="terminal-loading">⌛ Delivering innovative software custom pipelines...</p>
            </div>
          </div>
          <div className="visual-background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
