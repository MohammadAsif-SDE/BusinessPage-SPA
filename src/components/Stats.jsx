import React from 'react';
import { CheckCircle2, Heart, Clock, Cpu } from 'lucide-react';

const Stats = () => {
  const statsList = [
    {
      icon: <CheckCircle2 size={24} />,
      value: "120+",
      label: "Projects Completed"
    },
    {
      icon: <Heart size={24} />,
      value: "99%",
      label: "Client Satisfaction"
    },
    {
      icon: <Clock size={24} />,
      value: "< 15m",
      label: "Avg. Support Response"
    },
    {
      icon: <Cpu size={24} />,
      value: "99.99%",
      label: "System Uptime"
    }
  ];

  return (
    <section className="stats-section section">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <div className="stat-icon-outer">
                {stat.icon}
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
