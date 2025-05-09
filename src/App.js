import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function LandingPage() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  }

  const bgStyle = {
    background: `radial-gradient(circle at ${mouse.x * 0.4}% ${mouse.y * 0.4}%, #a259ff 0%, transparent 40%),
                 radial-gradient(circle at ${80 - mouse.x * 0.2}% ${30 + mouse.y * 0.2}%, #00dbde 0%, transparent 40%),
                 radial-gradient(circle at ${60 + mouse.x * 0.2}% ${80 - mouse.y * 0.2}%, #ff6a00 0%, transparent 50%),
                 radial-gradient(circle at ${40 - mouse.x * 0.2}% ${70 + mouse.y * 0.2}%, #ff4ecd 0%, transparent 60%),
                 linear-gradient(120deg, #18181a 0%, #232325 100%)`,
    transition: 'background 0.2s cubic-bezier(.4,0,.2,1)'
  };

  return (
    <div className="landing-page" style={bgStyle} onMouseMove={handleMouseMove}>
      <div className="landing-page-inner">
        <h1 style={{ position: 'relative' }} className="fade-in">
          Your Go-To-Market <span className="machine-inline">Machine<span className="landing-johnny">(Johnny)</span></span>
        </h1>
        <p className="fade-in" style={{ animationDelay: '0.15s' }}>Born to share your product with the world.</p>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Johnny Morris</h1>
        <div className="contact-info">
          <p>📧 jgmorris1999@gmail.com</p>
          <p>📱 (510) 693-2597</p>
          <p>🔗 <a href="https://www.linkedin.com/in/johnnygmorris" target="_blank" rel="noopener noreferrer">Visit me on LinkedIn</a></p>
        </div>
      </header>

      <section className="resume-section">
        <h2>Work Experience</h2>
        <div className="entry">
          <h3>Pegasus</h3>
          <div className="job-header">
            <p className="job-title">Account Executive (Mid-Market / Enterprise)</p>
            <p className="job-duration">March 2024 - Present</p>
          </div>
          <ul>
            <li>Lead full sales cycle for ~50 accounts across Northern and Southern California, managing two SDRs and prioritizing top 25 accounts based on ICP and historical performance</li>
            <li>Drive $4M pipeline growth through strategic account management and Salesforce optimization, collaborating with Operations to leverage existing client relationships for expansion opportunities</li>
            <li>Achieved $8.7M Total Contract Value with 22 new logos, representing 83% of total revenue</li>
            <li>Notable Logos: Amazon, Texas Instruments, Teledyne, AstraZeneca Pharmaceuticals, General Atomics, DPR Construction</li>
          </ul>
          <div className="job-header">
            <p className="job-title">Sales Development Representative</p>
            <p className="job-duration">October 2023 - March 2024</p>
          </div>
          <ul>
            <li>Developed strategic outreach program with executive leadership, generating $2.2M pipeline by targeting large facilities ({'>'}60,000 sq. ft) near existing clients and building relationships with key stakeholders across operations, procurement, and EH&S</li>
            <li>Consistently engaged 10+ new corporate organizations weekly through multi-channel outreach (cold calls, emails, LinkedIn)</li>
            <li>Implemented automated engagement workflows using Salesforce, ZoomInfo, and LinkedIn to drive targeted outreach across specific roles and organizations</li>
            <li>Streamlined job transition process for non-recurring opportunities, successfully managing {'>'}100 transitions while maintaining client satisfaction</li>
          </ul>
        </div>

        <div className="entry">
          <h3>Ryde</h3>
          <div className="job-header">
            <p className="job-title">Co-Founder & CEO → CMO</p>
            <p className="job-duration">January 2022 - September 2023</p>
          </div>
          <ul>
            <li>Spearheaded user acquisition across 10+ channels, growing platform to 4,000 users (1,200 drivers + 2,800 riders) with 31.8% activation rate and 60% increase in seat occupancy</li>
            <li>Built and led team of 5 business development interns, driving 20% of community growth through strategic recruitment and onboarding</li>
            <li>Led product development and support operations, managing 500+ support tickets and designing 350+ mobile/desktop screens in collaboration with early adopters</li>
            <li>Implemented comprehensive Trust & Safety protocols, reducing payment bypassing rate by 75% through enhanced Community Guidelines</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="entry">
          <h3>California Polytechnic State University - San Luis Obispo</h3>
          <div className="job-header">
            <p className="job-title">Bachelor of Science in Recreation, Parks, and Tourism Administration</p>
            <p className="job-duration">Event Planning & Management</p>
          </div>
          <div className="job-header">
            <p className="job-title">Cal Poly Center for Innovation & Entrepreneurship - Summer Accelerator 2022</p>
          </div>
          <ul>
            <li>Earned program acceptance through successful pitch to five Entrepreneurs in Residence, securing strategic mentorship and resources</li>
            <li>Led product development strategy through weekly Early Adopter feedback sessions, culminating in comprehensive Fall launch plan</li>
            <li>Delivered MVP iOS mobile application with 185+ Figma designs in 10-week sprint, demonstrating rapid prototyping and execution capabilities</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills & Interests</h2>
        <div className="skills-subsection">
          <h3>Skills:</h3>
          <div className="hint-container"></div>
          <div className="skills-list">
            <span>SalesForce</span>
            <span>Zoominfo (SalesOS / Engage)</span>
            <span>Notion</span>
            <span>Figma</span>
            <span>Klaviyo</span>
            <span>LinkedIn Sales Nav</span>
            <span>G-suite</span>
            <span>Microsoft Suite</span>
          </div>
        </div>
        <div className="skills-subsection">
          <h3>Interests:</h3>
          <div className="skills-list">
            <span>Backpacking</span>
            <span className="egg-container">
              <div className="egg"></div>
              <a href="https://jgmorris1999.wixsite.com/johnmorris" target="_blank" rel="noopener noreferrer" className="hidden-link">Photography</a>
            </span>
            <span>Fitness</span>
            <span>Cooking</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <div className="nav-content">
            <div className="nav-left">
              <Link to="/" className="nav-logo">Johnny</Link>
            </div>
            <div className="nav-right">
              <Link to="/resume" className="nav-link">Resume</Link>
              <a href="mailto:jgmorris1999@gmail.com" className="nav-link">Contact</a>
              <div className="theme-toggle-container">
                <button
                  className="theme-toggle-btn"
                  onClick={toggleTheme}
                  aria-label="Toggle dark/light mode"
                >
                  <span className="moon" style={{ opacity: theme === 'dark' ? 1 : 0.4 }}>🌚</span>
                  <span className="sun" style={{ opacity: theme === 'light' ? 1 : 0.4 }}>🌝</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<div>About Page Coming Soon</div>} />
          </Routes>
        </div>

        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://www.linkedin.com/in/johnnygmorris" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:jgmorris1999@gmail.com">Email</a>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/resume">Resume</Link>
              <a href="mailto:jgmorris1999@gmail.com">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Location</h4>
              <p>San Francisco Bay Area</p>
              <p>California, USA</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Johnny Morris. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
