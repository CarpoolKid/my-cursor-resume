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
            <li>2025 Quota Attainment (YTD): 112% | 2024 Quota Attainment: 120%</li>
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

function RydePortfolio() {
  return (
    <div className="ryde-portfolio">
      <div className="quick-access">
        <h4>Quick Access</h4>
        <ul>
          <li><a href="#beginning">The Beginning</a></li>
          <li><a href="#my-role">My Role</a></li>
          <li><a href="#challenges">Challenges</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#kpis">KPIs</a></li>
          <li><a href="#learned">What We Learned</a></li>
        </ul>
      </div>
      <h2>🚀 Ryde</h2>
      <h3><strong>Co-Founder & CMO</strong></h3>
      <p>A peer-to-peer ride-sharing platform built exclusively for students—connecting student drivers with student riders quickly, affordably, and safely.</p>
      <p><strong>Highlight:</strong> In just 9 months, Ryde grew from zero to over <strong>$65,000 paid out to drivers</strong>, building a trusted community.</p>
      <h3 id="beginning">🌱 The Beginning</h3>
      <hr />
      <h4>The Problem</h4>
      <p>Long-distance travel options for students were inefficient, unreliable, or chaotic. Whether it was <strong>multi-hour train delays</strong> or the <strong>disorganized chaos of Facebook Rideshare groups</strong>, nothing truly met students' needs. There was no platform built <em>by students, for students</em>—and it showed.</p>
      <h4>The Spark</h4>
      <p>The idea for Ryde came from a personal experience during my freshman year. Heading home to Berkeley for Thanksgiving, I took the Amtrak—what should have been a few hours turned into an 8-hour ordeal. Determined not to repeat that, I turned to our university's Facebook Rideshare group, which <em>technically</em> worked, but left a lot to be desired: no filters, no structure, no accountability.</p>
      <p>That's when the insight hit—there was a better way to move students, and more importantly, a better way to build <strong>community-driven, trusted travel</strong>.</p>
      <h4>Why Us</h4>
      <p>We weren't outsiders looking in—we <strong>lived this problem daily</strong>. As students ourselves, we had a direct line to our initial users and knew the nuances of campus culture. I focused on <strong>customer experience and community building</strong>, while my co-founders Josh and Emily, both highly technical, led the charge on <strong>engineering and product development</strong>. Together, we had the skills and insight to build, launch, and scale Ryde <em>within our own student community</em>.</p>
      <h3 id="my-role">👤 My Role</h3>
      <hr />
      <p>As <strong>Co-Founder & CMO</strong>, my primary focus was on <strong>customer acquisition, engagement, and retention</strong>, while also helping shape the product, community, and team from day one. I wasn't just the marketer—I was the matchmaker, the community builder, and the relentless connector who ensured that <strong>our marketplace didn't just exist—it worked</strong>.</p>
      <h4>🧱 Founding the Team</h4>
      <p>Before we could build a product, I had to build the team. I posted on r/CalPoly, the CSSE newsletter, and even pitched in classrooms to find the right technical cofounders. When I met <strong>Josh and Emily</strong>, I knew they were the ones. Together, we launched Ryde and wore every hat imaginable to make it real.</p>
      <h4>📣 Growth, Acquisition & Retention</h4>
      <p>I developed and deployed roughly <strong>10 unique campus-wide marketing strategies</strong> to acquire users and keep them engaged. These included:</p>
      <ul>
        <li>Word-of-mouth campaigns</li>
        <li>Facebook Rideshare Group posting & engagement</li>
        <li>Snapchat Class Group outreach</li>
        <li>Shareable trip links for viral growth</li>
        <li>A referral program</li>
        <li>Incentive programs for both sides of the marketplace</li>
        <li>Physical marketing (campus booths, flyers, car flyers, door-to-door knocking)</li>
        <li>Collaborations with clubs, departments, and even music festivals</li>
        <li>Guest appearances on campus podcasts</li>
      </ul>
      <p>These strategies—executed <strong>consistently and iteratively</strong>—helped Ryde go from zero to <strong>thousands of bookings and a 4,000+ member community</strong> within months.</p>
      <h4>🧠 Key Decisions</h4>
      <p>I helped shape many of our early product and strategy choices, including:</p>
      <ul>
        <li>Assembling the founding team</li>
        <li>Designing our MVP feature set</li>
        <li>Prioritizing iOS and Android app features</li>
        <li>Creating and leading our outreach and support team</li>
        <li>Drafting community guidelines and trust policies</li>
        <li>Designing our acquisition, engagement, and retention funnels</li>
        <li>Co-leading Figma design sprints for both the web and mobile experiences</li>
      </ul>
      <h3 id="challenges">🔧 Challenges I Tackled Personally</h3>
      <hr />
      <h4>🔹 Community Guidelines & Trust</h4>
      <p>We had to create a safe, respectful, and easy-to-use platform—without adding friction. I led the design of our <strong>community moderation systems</strong>, and personally responded to incidents such as speeding, inappropriate comments, or unusual users (yes, even professors).</p>
      <p>We used proactive messaging, account flags, and guideline reminders to build a <strong>self-aware, respectful community</strong> without alienating users.</p>
      <h4>🔹 Solving the Cold Start Problem</h4>
      <p>As with any marketplace, growth was hard early on. Drivers needed riders, and riders needed drivers—neither were on Ryde yet. I focused on the <strong>supply side (drivers)</strong> and manually found them riders through Facebook, Snapchat, and other campus channels.</p>
      <p>This helped us reach a <strong>critical mass</strong> of activity that unlocked our first wave of organic growth.</p>
      <h4>🔹 Reducing Payment Bypassing</h4>
      <p>Off-platform payments were a serious issue. To protect our revenue and community integrity, I:</p>
      <ul>
        <li>Implemented <strong>natural language processing (NLP)</strong> to detect messages with payment or contact intent (e.g., Venmo, phone numbers)</li>
        <li>Educated users on <strong>pre-paying</strong> via the app, aligning with familiar behaviors like booking a train or flight</li>
        <li>Recreated the <strong>Venmo UX inside Ryde</strong>, to build trust</li>
        <li>Built a system to <strong>automatically hide phone numbers</strong> until a trip was booked in-app</li>
      </ul>
      <p>These efforts reduced bypassing from <strong>&gt;20% to &lt;5%</strong>, while bookings continued to grow.</p>
      <h4>🔹 Increasing Trip Occupancy</h4>
      <p>To avoid the risk of drivers offering rides and getting no bookings, I led multiple solutions:</p>
      <ol>
        <li><strong>Push notifications</strong> to alert matched riders of new trips</li>
        <li><strong>Manual matching</strong> via social channels and direct outreach</li>
        <li><strong>In-app matching tools</strong> that let drivers invite riders immediately after posting</li>
        <li><strong>Shareable links</strong> to promote trips off-platform—used by me hundreds of times to create the illusion of social proof and urgency (e.g., "Hey this is my friend's ride, others have responded—grab a spot before it's gone!")</li>
      </ol>
      <h4>🔹 Fixing Booking Fee Perception</h4>
      <p>Early users saw the booking fee as a negative. I shifted perception by:</p>
      <ul>
        <li>Educating users on how the fee helped us grow the community and improve their experience</li>
        <li>Updating pricing to show <strong>all-in costs up front</strong>, so there were no surprises at checkout</li>
      </ul>
      <h4>🔹 Learning to Delegate</h4>
      <p>At first, I did everything myself. But as we grew, I had to learn how to <strong>delegate outreach, support, and growth</strong> to new team members. This meant creating systems, setting expectations, and most importantly—<strong>learning to trust others</strong> with key parts of my role.</p>
      <p>It was one of the most difficult, but ultimately rewarding transitions I made as a founder.</p>
      <h3 id="timeline">⏳ Timeline</h3>
      <hr />
      <h4>Q1 – Q4 2022</h4>
      <ul>
        <li><strong>Team Founded</strong> – Formed with two technical cofounders.</li>
        <li><strong>MVP Launched (Web)</strong> – Initial version built and launched to early users.</li>
        <li><strong>Accepted into Summer Accelerator</strong> – Secured $10,000 in non-dilutive funding.</li>
        <li><strong>iOS App Built</strong> – Developed in preparation for broader launch.</li>
        <li><strong>Waitlist Strategy Implemented</strong> – Built anticipation and gathered early interest.</li>
        <li><strong>Advisory Board Formed</strong> – Recruited experienced advisors (Ex-Airbnb, former CTO, former CMO).</li>
      </ul>
      <h4>Q4 2022</h4>
      <ul>
        <li><strong>iOS App Launch</strong> – First mobile version released.</li>
        <li><strong>Traction Achieved</strong> – Over <strong>400 bookings</strong> and <strong>125,000+ miles</strong> traveled cumulatively.</li>
      </ul>
      <h4>Q1 2023</h4>
      <ul>
        <li><strong>Continued Growth</strong> – Surpassed <strong>600 bookings</strong> and <strong>370,000+ miles</strong> traveled.</li>
        <li><strong>Revenue Milestone</strong> – Hit <strong>$2,000 MRR</strong>.</li>
        <li><strong>Referral Program Launched</strong> – Boosted signups by <strong>68%</strong>.</li>
        <li><strong>Android App Released</strong> – Expanded reach to a wider user base.</li>
      </ul>
      <h4>Q2 2023</h4>
      <ul>
        <li><strong>User & Revenue Growth</strong> – <strong>1,100+ bookings</strong>, <strong>650,000+ miles</strong>, and <strong>$2,800 MRR</strong>.</li>
        <li><strong>Funding Secured</strong> – Raised <strong>$125,000</strong> through investment and grants.</li>
      </ul>
      <h4>Q3 2023</h4>
      <ul>
        <li><strong>Operations Concluded</strong> – Startup shut down in <strong>July 2023</strong> after final growth phase.</li>
      </ul>
      <h3 id="kpis">📈 Key Performance Indicators (KPIs)</h3>
      <hr />
      <h4>🔹 Monthly Bookings</h4>
      <ul>
        <li><strong>What it measured:</strong> Total number of completed bookings per month.</li>
        <li><strong>Why it mattered:</strong> A core indicator of traction and market demand.</li>
        <li><strong>Impact:</strong> Increased average monthly bookings from <strong>100/month to 500/month</strong> in just 9 months, a 5x growth driven by product improvements, platform reliability, and demand-side marketing.</li>
      </ul>
      <h4>🔹 Payment Bypassing Rate</h4>
      <ul>
        <li><strong>What it measured:</strong> Percentage of users who completed their transaction off-platform (e.g., via Venmo or cash), bypassing in-app payment systems.</li>
        <li><strong>Why it mattered:</strong> Off-platform payments reduced revenue, limited our ability to enforce safety policies, and hurt retention data.</li>
        <li><strong>Impact:</strong> Reduced bypassing rate from <strong>over 20% to under 5%</strong>, while total bookings grew <strong>4x</strong>—demonstrating platform trust, feature effectiveness, and UX improvements.</li>
      </ul>
      <h4>🔹 Seat Occupancy Rate</h4>
      <ul>
        <li><strong>What it measured:</strong> Percentage of available driver seats that were actually booked.</li>
        <li><strong>Why it mattered:</strong> Higher occupancy translated to more efficient trips, higher driver earnings, and better rider experience.</li>
        <li><strong>Impact:</strong> Increased seat occupancy from <strong>37% to over 55%</strong>, optimizing both supply-side logistics and route efficiency as volume scaled.</li>
      </ul>
      <h3 id="learned">🎓 What We Learned</h3>
      <hr />
      <h4>Customers, Customers, Customers</h4>
      <p>As a community-centered platform, we had to be relentlessly focused on the customer experience. When students are sharing long rides—sometimes hundreds of miles—it's not just a transaction, it's a social and emotional experience. We learned that "customer experience" meant much more than just good UX. It meant:</p>
      <ul>
        <li>Limiting to <strong>students only</strong> to build trust</li>
        <li>Offering <strong>affordable rates</strong></li>
        <li>Giving both drivers and riders <strong>choice and flexibility</strong></li>
        <li>Providing <strong>responsive support</strong></li>
        <li>Designing <strong>automated matching</strong> to reduce friction</li>
        <li>Cultivating <strong>accountability</strong> across the platform</li>
      </ul>
      <p>Every touchpoint—from booking to post-trip—was a chance to make or break trust.</p>
      <h4>Power Users Are Your Best Resource</h4>
      <p>One of our most valuable insights came from identifying and engaging with our <strong>power users</strong>—those who posted and booked most frequently, made referrals, and regularly engaged with the product. Using internal KPIs, we pinpointed these users and invited them to <strong>roundtables</strong> where we discussed their pain points and ideas.</p>
      <p>Their feedback directly shaped product decisions, marketing tactics, and even messaging strategies. Lesson: your best users will build your product with you—if you listen.</p>
      <h4>Be Coachable</h4>
      <p>We made it a priority to stay open to learning—from our users, our advisors, and each other. This meant listening more than assuming, and being willing to test, adjust, and even abandon our original ideas when the data or community said otherwise.</p>
      <h4>Focus on Supply First</h4>
      <p>As a two-sided marketplace, we learned early on that <strong>drivers were the linchpin</strong>. Without them, nothing worked. That realization shifted our early strategy dramatically—we funneled time, resources, and features into driver success. From matching riders to giving them visibility tools, we treated our drivers like partners. If they had a good experience, riders followed.</p>
      <h4>Trust Your Team</h4>
      <p>There were times when I disagreed with my cofounders, but I trusted them enough to say: <em>"I don't  agree, but I trust you—let's try it."</em> I learned that if I couldn't persuade them, it wasn't a reflection of their understanding, but of my own ability to communicate clearly and build conviction. That mindset helped us stay aligned, open, and fast-moving—even when we saw things differently.</p>
      <h4>The Tarpit Idea</h4>
      <p>There's a concept called the "tarpit idea"—where a startup becomes stuck solving incredibly hard problems because the idea is deceptively attractive. It's worth watching <a href="https://www.youtube.com/watch?v=GMIawSAygO4&t=16s" target="_blank" rel="noopener noreferrer">this video</a> for context. Ryde had elements of this, especially with trust, safety, and payment enforcement across a semi-anonymous student population. Looking back, we gained an enormous amount by grappling with complexity—but we also learned to ask: <em>is this solvable at scale, or are we stuck in a tarpit?</em></p>
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
              <Link to="/ryde-portfolio" className="nav-link">Ryde Portfolio</Link>
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
            <Route path="/ryde-portfolio" element={<RydePortfolio />} />
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
