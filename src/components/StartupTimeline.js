import { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function StartupTimeline() {
  const [activeTab, setActiveTab] = useState("timeline");
  
  const milestones = [
    { year: "2022", quarter: "Q1-Q3", event: "Team Founded", description: "Formed with two technical cofounders" },
    { year: "2022", quarter: "Q1-Q3", event: "MVP Launched (Web)", description: "Initial version built and launched to early users" },
    { year: "2022", quarter: "Q1-Q3", event: "Accepted into Summer Accelerator", description: "Secured $35,000 in non-dilutive funding" },
    { year: "2022", quarter: "Q1-Q3", event: "iOS App Built", description: "Developed in preparation for broader launch" },
    { year: "2022", quarter: "Q1-Q3", event: "Waitlist Strategy Implemented", description: "Built anticipation and gathered early interest" },
    { year: "2022", quarter: "Q1-Q3", event: "Advisory Board Formed", description: "Recruited experienced advisors (Ex-Airbnb, former CTO, former CMO)" },
    { year: "2022", quarter: "Q4", event: "iOS App Launch", description: "First mobile version released" },
    { year: "2022", quarter: "Q4", event: "Traction Achieved", description: "Over 400 bookings and 125,000+ miles traveled cumulatively" },
    { year: "2023", quarter: "Q1", event: "Continued Growth", description: "Surpassed 600 bookings and 370,000+ miles traveled" },
    { year: "2023", quarter: "Q1", event: "Revenue Milestone", description: "Hit $2,000 MRR" },
    { year: "2023", quarter: "Q1", event: "Referral Program Launched", description: "Boosted signups by 68%" },
    { year: "2023", quarter: "Q1", event: "Android App Released", description: "Expanded reach to a wider user base" },
    { year: "2023", quarter: "Q2", event: "User & Revenue Growth", description: "1,100+ bookings, 650,000+ miles, and $2,800 MRR" },
    { year: "2023", quarter: "Q2", event: "Funding Secured", description: "Raised $100,000 through dilutive investments" },
    { year: "2023", quarter: "Q3", event: "Operations Concluded", description: "Startup shut down in July 2023 after final growth phase" },
  ];
  
  const bookingsData = [
    { year: "2022", quarter: "Q4", bookings: 400, miles: 125000, mrr: 0 },
    { year: "2023", quarter: "Q1", bookings: 600, miles: 370000, mrr: 2000 },
    { year: "2023", quarter: "Q2", bookings: 1100, miles: 650000, mrr: 2800 },
  ];
  
  const fundingData = [
    { year: "2022", quarter: "Q2-Q3", amount: 35000, source: "Non-dilutive (Accelerator + Grant)" },
    { year: "2023", quarter: "Q2", amount: 100000, source: "Investment & Grants" },
  ];
  
  return (
    <div className="timeline-container">
      {/* Tabs */}
      <div className="timeline-tabs">
        <button
          onClick={() => setActiveTab("timeline")}
          className={`timeline-tab ${activeTab === "timeline" ? "active" : ""}`}
        >
          Timeline
        </button>
        <button
          onClick={() => setActiveTab("metrics")}
          className={`timeline-tab ${activeTab === "metrics" ? "active" : ""}`}
        >
          Growth Metrics
        </button>
        <button
          onClick={() => setActiveTab("funding")}
          className={`timeline-tab ${activeTab === "funding" ? "active" : ""}`}
        >
          Funding
        </button>
      </div>
      
      {/* Timeline View */}
      {activeTab === "timeline" && (
        <div className="timeline-content">
          {/* 2022 Section */}
          <div>
            <h3 className="timeline-year">2022</h3>
            <div className="timeline-track">
              {/* Group milestones by quarter in 2022 */}
              {Array.from(new Set(milestones.filter(m => m.year === "2022").map(m => m.quarter))).map(quarter => {
                const quarterMilestones = milestones.filter(m => m.year === "2022" && m.quarter === quarter);
                return (
                  <div key={quarter} className="timeline-quarter">
                    <div className="timeline-marker">
                      <span>{quarter}</span>
                    </div>
                    <div className="timeline-events">
                      {quarterMilestones.map((milestone, idx) => (
                        <div key={idx} className={`timeline-event ${idx !== 0 ? "with-border" : ""}`}>
                          <h4>{milestone.event}</h4>
                          <p>{milestone.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* 2023 Section */}
          <div>
            <h3 className="timeline-year">2023</h3>
            <div className="timeline-track">
              {/* Group milestones by quarter in 2023 */}
              {Array.from(new Set(milestones.filter(m => m.year === "2023").map(m => m.quarter))).map(quarter => {
                const quarterMilestones = milestones.filter(m => m.year === "2023" && m.quarter === quarter);
                return (
                  <div key={quarter} className="timeline-quarter">
                    <div className="timeline-marker">
                      <span>{quarter}</span>
                    </div>
                    <div className="timeline-events">
                      {quarterMilestones.map((milestone, idx) => (
                        <div key={idx} className={`timeline-event ${idx !== 0 ? "with-border" : ""}`}>
                          <h4>{milestone.event}</h4>
                          <p>{milestone.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      
      {/* Metrics View */}
      {activeTab === "metrics" && (
        <div className="timeline-content">
          <div className="chart-section">
            <h3>Bookings Growth by Year</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bookingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="chart-tooltip">
                          <p className="tooltip-title">{`${payload[0].payload.year} (${payload[0].payload.quarter})`}</p>
                          <p>{`Bookings: ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Legend />
                  <Bar dataKey="bookings" fill="var(--color-accent)" name="Total Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="chart-section">
            <h3>Miles Traveled by Year</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bookingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="chart-tooltip">
                          <p className="tooltip-title">{`${payload[0].payload.year} (${payload[0].payload.quarter})`}</p>
                          <p>{`Miles: ${new Intl.NumberFormat().format(payload[0].value)}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Legend />
                  <Line type="monotone" dataKey="miles" stroke="var(--color-accent)" strokeWidth={2} name="Miles Traveled" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="chart-section">
            <h3>Monthly Recurring Revenue by Year</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bookingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="chart-tooltip">
                          <p className="tooltip-title">{`${payload[0].payload.year} (${payload[0].payload.quarter})`}</p>
                          <p>{`MRR: $${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Legend />
                  <Line type="monotone" dataKey="mrr" stroke="var(--color-accent)" strokeWidth={2} name="MRR ($)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
      
      {/* Funding View */}
      {activeTab === "funding" && (
        <div className="timeline-content">
          <div className="chart-section">
            <h3>Funding Secured by Year</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fundingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="chart-tooltip">
                          <p className="tooltip-title">{`${payload[0].payload.year} (${payload[0].payload.quarter})`}</p>
                          <p>{`Amount: $${payload[0].value.toLocaleString()}`}</p>
                          <p className="tooltip-subtitle">{payload[0].payload.source}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Legend />
                  <Bar dataKey="amount" fill="var(--color-accent)" name="Amount ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="funding-details">
            <h3>Funding Details by Year</h3>
            <div className="funding-grid">
              {/* 2022 Funding */}
              <div className="funding-card">
                <h4>2022</h4>
                <ul>
                  {fundingData
                    .filter(item => item.year === "2022")
                    .map((item, index) => (
                      <li key={index}>
                        <div className="funding-item">
                          <span className="quarter">{item.quarter}</span>
                          <span className="amount">${item.amount.toLocaleString()}</span>
                        </div>
                        <span className="source">{item.source}</span>
                      </li>
                    ))}
                </ul>
              </div>
              
              {/* 2023 Funding */}
              <div className="funding-card">
                <h4>2023</h4>
                <ul>
                  {fundingData
                    .filter(item => item.year === "2023")
                    .map((item, index) => (
                      <li key={index}>
                        <div className="funding-item">
                          <span className="quarter">{item.quarter}</span>
                          <span className="amount">${item.amount.toLocaleString()}</span>
                        </div>
                        <span className="source">{item.source}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            
            <div className="total-funding">
              <div className="total-row">
                <span>Total Funding</span>
                <span>${fundingData.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 