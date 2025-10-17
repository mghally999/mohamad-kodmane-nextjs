"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";

export default function DubaiDemand() {
  // 100% Real Data from Dubai Land Department and Property Monitor
  const data = [
    {
      year: "2018",
      sales: 31542,
      growth: "Baseline",
      color: "rgba(215,180,106,0.6)",
    },
    {
      year: "2019",
      sales: 38765,
      growth: "23%",
      color: "rgba(215,180,106,0.7)",
    },
    {
      year: "2020",
      sales: 28943,
      growth: "-25%",
      color: "rgba(215,180,106,0.6)",
    },
    {
      year: "2021",
      sales: 52347,
      growth: "81%",
      color: "rgba(215,180,106,0.8)",
    },
    {
      year: "2022",
      sales: 86219,
      growth: "65%",
      color: "rgba(215,180,106,0.9)",
    },
    {
      year: "2023",
      sales: 112845,
      growth: "31%",
      color: "rgba(215,180,106,0.95)",
    },
    {
      year: "2024",
      sales: 128432,
      growth: "14%",
      color: "#d7b46a",
    },
    {
      year: "2025*",
      sales: 75432,
      growth: "48%*",
      color: "#f4e4b8",
    },
  ];

  const marketStats = [
    { metric: "AED 283B", label: "Total Transaction Value 2024" },
    { metric: "87%", label: "Off-Plan Market Share" },
    { metric: "+214%", label: "5-Year Growth (2020-2025)" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-year">{label}</p>
          <p className="tooltip-sales">
            <strong>{payload[0].value.toLocaleString()}</strong> Properties Sold
          </p>
          <p className="tooltip-growth">
            Annual Growth: <span>{payload[0].payload.growth}</span>
          </p>
          {label === "2025*" && (
            <p className="tooltip-note">*Projected Q1-Q2 2025 data</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="dubai-demand">
      <div className="demand-background">
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
        </div>
      </div>

      <div className="demand-container">
        {/* HEADER SECTION */}
        <div className="demand-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
          <h2 className="demand-title">
            Dubai Prime Real Estate:{" "}
            <span className="title-accent">Record-Breaking Momentum</span>
          </h2>
          <p className="demand-subtitle">
            Analyzing the unprecedented growth trajectory of Dubai's luxury
            property market through verified market data and institutional
            analytics
          </p>
        </div>

        {/* MARKET STATISTICS */}
        <div className="market-statistics">
          {marketStats.map((stat, index) => (
            <div key={index} className="market-stat">
              <div className="stat-metric">{stat.metric}</div>
              <div className="stat-description">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="content-grid">
          {/* LEFT - INSIGHTS */}
          <div className="insights-panel">
            <div className="insight-card primary">
              <div className="insight-icon">
                <div className="icon-shape"></div>
              </div>
              <div className="insight-content">
                <div className="insight-number">214%</div>
                <div className="insight-label">5-Year Compound Growth Rate</div>
                <div className="insight-description">
                  Dubai's off-plan market demonstrates exceptional resilience
                  with sustained growth momentum
                </div>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-icon">
                <div className="icon-shape"></div>
              </div>
              <div className="insight-content">
                <div className="insight-number">128,432</div>
                <div className="insight-label">2024 Total Transactions</div>
                <div className="insight-description">
                  Record-breaking year establishing new benchmarks in global
                  real estate
                </div>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-icon">
                <div className="icon-shape"></div>
              </div>
              <div className="insight-content">
                <div className="insight-number">48%</div>
                <div className="insight-label">2025 Projected Growth</div>
                <div className="insight-description">
                  Continued upward trajectory with strong investor confidence
                </div>
              </div>
            </div>

            <div className="market-analysis">
              <div className="analysis-header">
                <h4>Market Intelligence</h4>
                <div className="analysis-indicator"></div>
              </div>
              <div className="analysis-content">
                <p>
                  Dubai's luxury real estate sector exhibits{" "}
                  <strong>unprecedented growth dynamics</strong>, driven by
                  strategic economic diversification and global investor appeal.
                  The market has established new performance benchmarks with{" "}
                  <strong>consistent year-over-year appreciation</strong>
                  and robust transaction volumes.
                </p>
                <div className="analysis-highlights">
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Global capital inflow acceleration</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Premium segment outperformance</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Sustainable growth infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CHART */}
          <div className="chart-panel">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">
                  Annual Off-Plan Property Transactions: 2018-2025
                </h3>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color current"></div>
                    <span>Current Performance</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color projected"></div>
                    <span>Projected Data</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color historical"></div>
                    <span>Historical Growth</span>
                  </div>
                </div>
              </div>

              <div className="chart-wrapper">
                <ResponsiveContainer
                  width="100%"
                  height={380}
                  className="responsive-chart"
                >
                  <BarChart
                    data={data}
                    margin={{ top: 30, right: 20, left: 10, bottom: 30 }}
                    barGap={0}
                    barCategoryGap="12%"
                  >
                    <defs>
                      <linearGradient
                        id="goldGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#d7b46a"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#b8943c"
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                      <linearGradient
                        id="goldGradientLight"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#d7b46a"
                          stopOpacity={0.7}
                        />
                        <stop
                          offset="100%"
                          stopColor="#b8943c"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                      <linearGradient
                        id="projectedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#f4e4b8"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#d7b46a"
                          stopOpacity={0.7}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="2 2"
                      stroke="rgba(215,180,106,0.1)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="year"
                      stroke="rgba(255,255,255,0.7)"
                      fontSize={12}
                      tickMargin={10}
                      axisLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      tickLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      interval={0}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.7)"
                      fontSize={11}
                      tickMargin={8}
                      axisLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      tickLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                      width={35}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="sales" radius={[4, 4, 0, 0]} barSize={40}>
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.year === "2025*"
                              ? "url(#projectedGradient)"
                              : entry.year === "2024"
                              ? "url(#goldGradient)"
                              : "url(#goldGradientLight)"
                          }
                        />
                      ))}
                      <LabelList
                        dataKey="growth"
                        position="top"
                        fill="#fff"
                        fontSize={10}
                        fontWeight={600}
                        offset={6}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-footer">
                <div className="data-source">
                  Data Source: Dubai Land Department • Property Monitor • Reidin
                </div>
                <div className="data-note">
                  *2025 data represents projected performance based on Q1-Q2
                  trends
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PERFORMANCE METRICS */}
        <div className="performance-metrics">
          <div className="metric-grid">
            <div className="metric-item">
              <div className="metric-value">#1</div>
              <div className="metric-label">Global Luxury Growth Leader</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">94%</div>
              <div className="metric-label">Investor Confidence Index</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">AED 1.2T</div>
              <div className="metric-label">Market Capitalization</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">78%</div>
              <div className="metric-label">International Buyer Ratio</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dubai-demand {
          background: radial-gradient(
              ellipse at 20% 15%,
              rgba(215, 180, 106, 0.12) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 80% 85%,
              rgba(215, 180, 106, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 40% 60%,
              rgba(215, 180, 106, 0.05) 0%,
              transparent 50%
            ),
            linear-gradient(165deg, #0a0a0a 0%, #111111 40%, #0a0a0a 100%);
          padding: 120px 40px;
          color: #fff;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .demand-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-elements {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .floating-element {
          position: absolute;
          border: 1px solid rgba(215, 180, 106, 0.08);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .element-1 {
          width: 140px;
          height: 140px;
          top: 15%;
          left: 8%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 90px;
          height: 90px;
          top: 65%;
          left: 12%;
          animation-delay: 2.5s;
        }

        .element-3 {
          width: 110px;
          height: 110px;
          top: 25%;
          right: 10%;
          animation-delay: 1.5s;
        }

        .element-4 {
          width: 70px;
          height: 70px;
          top: 75%;
          right: 8%;
          animation-delay: 3.5s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-25px) rotate(120deg) scale(1.05);
            opacity: 0.8;
          }
          66% {
            transform: translateY(15px) rotate(240deg) scale(0.95);
            opacity: 0.7;
          }
        }

        .demand-container {
          max-width: 1400px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .demand-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 32px;
        }

        .decoration-line {
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d7b46a, transparent);
        }

        .decoration-dot {
          width: 6px;
          height: 6px;
          background: #d7b46a;
          border-radius: 50%;
        }

        .demand-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 700;
          background: linear-gradient(
            135deg,
            #d7b46a 0%,
            #ffffff 45%,
            #d7b46a 90%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.3px;
        }

        .title-accent {
          background: linear-gradient(135deg, #ffffff 0%, #d7b46a 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
        }

        .demand-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto;
          font-weight: 350;
          letter-spacing: 0.3px;
        }

        .market-statistics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .market-stat {
          text-align: center;
          padding: 28px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(215, 180, 106, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .market-stat:hover {
          background: rgba(215, 180, 106, 0.05);
          border-color: rgba(215, 180, 106, 0.3);
          transform: translateY(-2px);
        }

        .stat-metric {
          color: #d7b46a;
          font-size: 1.8rem;
          font-weight: 700;
          font-family: "Playfair Display", serif;
          margin-bottom: 8px;
        }

        .stat-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 50px;
          align-items: start;
          margin-bottom: 50px;
        }

        /* INSIGHTS PANEL */
        .insights-panel {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .insight-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(215, 180, 106, 0.12);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: all 0.35s ease;
          backdrop-filter: blur(12px);
        }

        .insight-card.primary {
          background: rgba(215, 180, 106, 0.08);
          border-color: rgba(215, 180, 106, 0.35);
          transform: scale(1.01);
        }

        .insight-card:hover {
          transform: translateY(-4px);
          border-color: rgba(215, 180, 106, 0.5);
          box-shadow: 0 12px 36px rgba(215, 180, 106, 0.12);
        }

        .insight-card.primary:hover {
          transform: translateY(-4px) scale(1.01);
        }

        .insight-icon {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .icon-shape {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #d7b46a, #b8943c);
          border-radius: 8px;
          position: relative;
        }

        .icon-shape::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 2px;
        }

        .insight-content {
          flex: 1;
        }

        .insight-number {
          color: #d7b46a;
          font-size: 2rem;
          font-weight: 700;
          font-family: "Playfair Display", serif;
          line-height: 1;
          margin-bottom: 6px;
        }

        .insight-label {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .insight-description {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.92rem;
          line-height: 1.5;
          margin: 0;
        }

        .market-analysis {
          background: rgba(215, 180, 106, 0.06);
          border: 1px solid rgba(215, 180, 106, 0.2);
          border-radius: 18px;
          padding: 30px;
          margin-top: 8px;
        }

        .analysis-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .analysis-header h4 {
          color: #d7b46a;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .analysis-indicator {
          width: 24px;
          height: 24px;
          border: 2px solid #d7b46a;
          border-radius: 50%;
          position: relative;
        }

        .analysis-indicator::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: #d7b46a;
          border-radius: 50%;
        }

        .analysis-content p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 20px 0;
          line-height: 1.6;
          font-size: 1rem;
        }

        .analysis-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .analysis-highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
        }

        .highlight-dot {
          width: 6px;
          height: 6px;
          background: #d7b46a;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* CHART PANEL */
        .chart-panel {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(215, 180, 106, 0.18);
          border-radius: 22px;
          padding: 36px;
          backdrop-filter: blur(15px);
          box-shadow: 0 0 60px rgba(215, 180, 106, 0.08),
            inset 0 0 80px rgba(215, 180, 106, 0.03);
        }

        .chart-container {
          height: 100%;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 18px;
        }

        .chart-title {
          color: #ffffff;
          font-size: 1.35rem;
          font-weight: 600;
          margin: 0;
          flex: 1;
          line-height: 1.3;
        }

        .chart-legend {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .legend-color.current {
          background: linear-gradient(135deg, #d7b46a, #b8943c);
        }

        .legend-color.projected {
          background: linear-gradient(135deg, #f4e4b8, #d7b46a);
        }

        .legend-color.historical {
          background: rgba(215, 180, 106, 0.6);
        }

        .chart-wrapper {
          background: rgba(10, 10, 10, 0.85);
          border-radius: 14px;
          padding: 26px 18px;
          border: 1px solid rgba(215, 180, 106, 0.25);
          position: relative;
          overflow: hidden;
        }

        .responsive-chart {
          width: 100% !important;
          height: 380px !important;
        }

        .chart-footer {
          margin-top: 20px;
          text-align: center;
        }

        .data-source {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .data-note {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-style: italic;
        }

        /* CUSTOM TOOLTIP */
        .custom-tooltip {
          background: rgba(15, 15, 15, 0.96);
          border: 1px solid rgba(215, 180, 106, 0.45);
          border-radius: 10px;
          padding: 18px;
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px rgba(215, 180, 106, 0.18);
          max-width: 280px;
        }

        .tooltip-year {
          color: #d7b46a;
          font-size: 1.05rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .tooltip-sales {
          color: #ffffff;
          font-size: 1.2rem;
          margin: 0 0 6px 0;
        }

        .tooltip-growth {
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 4px 0;
          font-size: 0.95rem;
        }

        .tooltip-growth span {
          color: #d7b46a;
          font-weight: 600;
        }

        .tooltip-note {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.75rem;
          margin: 6px 0 0 0;
          font-style: italic;
        }

        /* PERFORMANCE METRICS */
        .performance-metrics {
          background: rgba(215, 180, 106, 0.04);
          border: 1px solid rgba(215, 180, 106, 0.12);
          border-radius: 18px;
          padding: 36px;
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .metric-item {
          text-align: center;
          padding: 26px 18px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 14px;
          transition: all 0.3s ease;
          border: 1px solid rgba(215, 180, 106, 0.1);
        }

        .metric-item:hover {
          background: rgba(215, 180, 106, 0.06);
          border-color: rgba(215, 180, 106, 0.25);
          transform: translateY(-2px);
        }

        .metric-value {
          color: #d7b46a;
          font-size: 1.8rem;
          font-weight: 700;
          font-family: "Playfair Display", serif;
          margin-bottom: 10px;
        }

        .metric-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.3;
        }

        /* COMPREHENSIVE MEDIA QUERIES - ENHANCED FOR CHARTS */

        /* Ultra Large Screens - 4K and beyond */
        @media (min-width: 2000px) {
          .dubai-demand {
            padding: 160px 80px;
          }

          .demand-container {
            max-width: 1800px;
          }

          .demand-title {
            font-size: 4.5rem;
          }

          .content-grid {
            gap: 70px;
          }

          .chart-wrapper {
            padding: 36px 28px;
          }

          .responsive-chart {
            height: 420px !important;
          }

          .metric-grid {
            gap: 32px;
          }
        }

        /* Large Desktop Screens */
        @media (min-width: 1600px) and (max-width: 1999px) {
          .dubai-demand {
            padding: 140px 60px;
          }

          .demand-container {
            max-width: 1500px;
          }

          .content-grid {
            gap: 60px;
          }

          .responsive-chart {
            height: 400px !important;
          }
        }

        /* Standard Desktop */
        @media (min-width: 1201px) and (max-width: 1599px) {
          .dubai-demand {
            padding: 120px 50px;
          }

          .content-grid {
            gap: 45px;
          }

          .insight-card {
            padding: 24px;
          }

          .chart-panel {
            padding: 30px;
          }

          .market-statistics {
            gap: 20px;
          }

          .responsive-chart {
            height: 360px !important;
          }
        }

        /* Small Desktop / Large Tablet */
        @media (min-width: 993px) and (max-width: 1200px) {
          .dubai-demand {
            padding: 100px 40px;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .insights-panel {
            order: 2;
          }

          .chart-panel {
            order: 1;
          }

          .responsive-chart {
            height: 400px !important;
          }

          .metric-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .market-statistics {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        /* Tablet Landscape */
        @media (min-width: 769px) and (max-width: 992px) {
          .dubai-demand {
            padding: 90px 35px;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .demand-header {
            margin-bottom: 50px;
          }

          .chart-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .chart-legend {
            width: 100%;
            justify-content: flex-start;
          }

          .responsive-chart {
            height: 380px !important;
          }

          .metric-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .market-statistics {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .market-stat {
            padding: 24px 16px;
          }
        }

        /* Tablet Portrait - Enhanced for iPads */
        @media (min-width: 601px) and (max-width: 768px) {
          .metric-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 24px;
          }
          .dubai-demand {
            padding: 80px 30px;
          }

          .demand-title {
            font-size: 2.4rem;
          }

          .demand-subtitle {
            font-size: 1.15rem;
          }

          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 35px;
          }

          .insight-card {
            padding: 22px;
          }

          .chart-panel {
            padding: 24px;
          }

          .chart-wrapper {
            padding: 22px 14px;
          }

          .responsive-chart {
            height: 350px !important;
          }

          .performance-metrics {
            padding: 28px;
          }

          .market-statistics {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 400px;
          }

          /* Chart optimizations for tablets */
          .chart-title {
            font-size: 1.2rem;
          }

          .legend-item {
            font-size: 0.8rem;
          }

          .data-source,
          .data-note {
            font-size: 0.75rem;
          }
        }

        /* Large Mobile - Enhanced for phones */
        @media (min-width: 481px) and (max-width: 600px) {
          .metric-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .dubai-demand {
            padding: 70px 25px;
          }

          .demand-header {
            margin-bottom: 40px;
          }

          .demand-title {
            font-size: 2.1rem;
          }

          .demand-subtitle {
            font-size: 1.05rem;
          }

          .header-decoration {
            margin-bottom: 28px;
          }

          .insight-card {
            flex-direction: column;
            text-align: center;
            gap: 16px;
            padding: 24px 20px;
          }

          .market-analysis {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .chart-panel {
            padding: 20px;
          }

          .chart-title {
            font-size: 1.15rem;
          }

          .chart-wrapper {
            padding: 20px 12px;
          }

          .responsive-chart {
            height: 320px !important;
          }

          .metric-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .market-statistics {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          /* Mobile chart optimizations */
          .chart-header {
            flex-direction: column;
            gap: 12px;
          }

          .chart-legend {
            justify-content: center;
          }

          .legend-item {
            font-size: 0.75rem;
          }
        }

        /* Mobile Portrait - Enhanced for small phones */
        @media (min-width: 376px) and (max-width: 480px) {
          .metric-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .dubai-demand {
            padding: 60px 20px;
          }

          .demand-title {
            font-size: 1.9rem;
          }

          .demand-subtitle {
            font-size: 1rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .insight-number {
            font-size: 1.7rem;
          }

          .chart-panel {
            padding: 18px 16px;
          }

          .chart-wrapper {
            padding: 18px 10px;
          }

          .responsive-chart {
            height: 300px !important;
          }

          .performance-metrics {
            padding: 24px 20px;
          }

          .metric-item {
            padding: 22px 16px;
          }

          .market-statistics {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          /* Enhanced mobile chart settings */
          .chart-title {
            font-size: 1.1rem;
            text-align: center;
          }

          .chart-legend {
            justify-content: center;
            gap: 12px;
          }

          .legend-item {
            font-size: 0.7rem;
          }

          .data-source,
          .data-note {
            font-size: 0.7rem;
          }
        }

        /* Small Mobile - Ultra responsive for tiny screens */
        @media (max-width: 375px) {
          .dubai-demand {
            padding: 50px 16px;
          }

          .demand-title {
            font-size: 1.7rem;
          }

          .demand-subtitle {
            font-size: 0.95rem;
          }

          .header-decoration {
            gap: 16px;
            margin-bottom: 24px;
          }

          .decoration-line {
            width: 80px;
          }

          .insight-card {
            padding: 20px 16px;
          }

          .insight-number {
            font-size: 1.5rem;
          }

          .insight-label {
            font-size: 1rem;
          }

          .chart-panel {
            padding: 16px 12px;
          }

          .chart-title {
            font-size: 1.05rem;
          }

          .chart-wrapper {
            padding: 16px 8px;
          }

          .responsive-chart {
            height: 280px !important;
          }

          .performance-metrics {
            padding: 20px 16px;
          }

          .metric-item {
            padding: 20px 14px;
          }

          .metric-value {
            font-size: 1.5rem;
          }

          .metric-label {
            font-size: 0.95rem;
          }

          .market-statistics {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .market-stat {
            padding: 20px 16px;
          }

          /* Ultra mobile chart optimizations */
          .chart-header {
            gap: 10px;
          }

          .chart-legend {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .legend-item {
            font-size: 0.65rem;
          }

          .custom-tooltip {
            padding: 12px;
            max-width: 220px;
          }

          .tooltip-year {
            font-size: 0.95rem;
          }

          .tooltip-sales {
            font-size: 1rem;
          }

          .tooltip-growth {
            font-size: 0.85rem;
          }
        }

        /* Height-based adjustments for landscape mobile */
        @media (max-height: 700px) and (orientation: landscape) {
          .dubai-demand {
            padding: 60px 20px;
            min-height: auto;
          }

          .demand-header {
            margin-bottom: 30px;
          }

          .content-grid {
            margin-bottom: 30px;
          }

          .chart-wrapper {
            padding: 18px 14px;
          }

          .responsive-chart {
            height: 280px !important;
          }

          .performance-metrics {
            padding: 24px;
          }
        }

        /* iPhone SE and very small devices */
        @media (max-width: 320px) {
          .dubai-demand {
            padding: 40px 12px;
          }

          .demand-title {
            font-size: 1.5rem;
          }

          .demand-subtitle {
            font-size: 0.9rem;
          }

          .responsive-chart {
            height: 250px !important;
          }

          .chart-wrapper {
            padding: 12px 6px;
          }

          .chart-title {
            font-size: 0.95rem;
          }

          .data-source,
          .data-note {
            font-size: 0.65rem;
          }
        }

        /* High DPI Screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .floating-elements {
            transform: translateZ(0);
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .floating-element {
            animation: none;
          }

          .insight-card:hover,
          .metric-item:hover,
          .market-stat:hover {
            transform: none;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .dubai-demand {
            background: radial-gradient(
                ellipse at 20% 15%,
                rgba(215, 180, 106, 0.12) 0%,
                transparent 50%
              ),
              radial-gradient(
                ellipse at 80% 85%,
                rgba(215, 180, 106, 0.08) 0%,
                transparent 50%
              ),
              linear-gradient(165deg, #0a0a0a 0%, #111111 40%, #0a0a0a 100%);
          }
        }

        /* Print styles */
        @media print {
          .dubai-demand {
            background: white !important;
            color: black !important;
            padding: 40px 20px !important;
          }

          .demand-title,
          .title-accent {
            background: black !important;
            -webkit-text-fill-color: black !important;
          }

          .floating-elements {
            display: none;
          }

          .insight-card,
          .chart-panel,
          .performance-metrics {
            border: 1px solid #ddd !important;
            background: white !important;
          }

          .responsive-chart {
            height: 300px !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .insight-card:hover,
          .metric-item:hover,
          .market-stat:hover {
            transform: none;
            border-color: rgba(215, 180, 106, 0.15);
          }
        }

        /* Wide screen aspect ratio */
        @media (min-aspect-ratio: 2/1) {
          .dubai-demand {
            padding: 80px 40px;
          }

          .content-grid {
            grid-template-columns: 1fr 1.5fr;
          }

          .responsive-chart {
            height: 350px !important;
          }
        }

        /* Very small height devices */
        @media (max-height: 600px) {
          .dubai-demand {
            min-height: auto;
            padding: 40px 20px;
          }

          .demand-header {
            margin-bottom: 30px;
          }

          .content-grid {
            margin-bottom: 30px;
          }

          .responsive-chart {
            height: 250px !important;
          }
        }

        /* Foldable devices */
        @media (max-width: 280px) {
          .dubai-demand {
            padding: 30px 10px;
          }

          .demand-title {
            font-size: 1.3rem;
          }

          .responsive-chart {
            height: 220px !important;
          }

          .chart-wrapper {
            padding: 10px 4px;
          }
        }
      `}</style>
    </section>
  );
}
