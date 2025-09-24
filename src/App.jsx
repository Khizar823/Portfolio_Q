import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Predefined color palette
  const colors = {
    bg: darkMode ? '#0f0c29' : '#f8fafc',
    cardBg: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
    cardBorder: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    text: darkMode ? '#ffffff' : '#1e293b',
    textSecondary: darkMode ? '#94a3b8' : '#64748b',
    gradient1: 'linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6)',
    gradient2: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    gradient3: 'linear-gradient(135deg, #ec4899, #3b82f6)',
    purple: '#8b5cf6',
    pink: '#ec4899',
    blue: '#3b82f6'
  };

  const caseStudies = [
    {
      title: "SaaS Automation Platform",
      period: "Jan 2023 – May 2023",
      role: "Lead Backend Developer",
      tech: "Python, FastAPI, Next.js",
      result: "Reduced manual workflows by 70% for a US-based startup by building an AI-driven SaaS platform that automated client onboarding, reporting, and data visualization.",
    },
    {
      title: "AI-Powered Trading Signals",
      period: "Sep 2022 – Dec 2022",
      role: "AI Engineer & API Integrator",
      tech: "Python, Pandas, Flask",
      result: "Built a 99% accuracy signal tool for OTC trading analysis. Helped traders improve win rates by 45% while maintaining real-time updates.",
    },
    {
      title: "SEO & Digital Growth",
      period: "Mar 2021 – Jul 2021",
      role: "SEO Specialist",
      tech: "WordPress, Ahrefs, SEMrush",
      result: "Boosted an eCommerce store's organic traffic by 300% and doubled conversions with AI-assisted content + SEO automation tools.",
    },
    {
      title: "AI-Powered E-Commerce Chatbot",
      period: "Feb 2024 – Apr 2024",
      role: "Full-Stack Developer",
      tech: "React.js, Flask, OpenAI API",
      result: "Built a 24/7 AI support bot that reduced customer support load by 60%, improving sales and retention.",
    },
  ];

  const skills = [
    "Python", "FastAPI", "Flask", "React.js", "Next.js", "AI/ML", 
    "SEO", "Digital Marketing", "SaaS Development", "API Integration",
    "Web Scraping", "Trading Bots", "Chatbots", "WordPress"
  ];

  const contactInfo = {
    email: "contactwithfex@gmail.com",
    linkedin: "linkedin.com/in/khizar-niaz-4b9076385",
    github: "github.com/Khizar823"
  };

  // Card component with inline styles
  const GlassCard = ({ children, style = {} }) => (
    <motion.div
      className="rounded-2xl p-6 md:p-8 backdrop-blur-xl"
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        ...style
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div style={{
      background: colors.bg,
      color: colors.text,
      minHeight: '100vh',
      transition: 'background 0.5s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at ${window.innerWidth - mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
          ${darkMode ? 'linear-gradient(135deg, #0f0c29, #302b63)' : 'linear-gradient(135deg, #f8fafc, #e2e8f0)'}
        `,
        zIndex: -1
      }} />
      
      {/* Theme Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          zIndex: 50
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        backdropFilter: 'blur(10px)',
        background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
        borderBottom: `1px solid ${colors.cardBorder}`,
        zIndex: 40
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['about', 'skills', 'case-studies', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: activeSection === section ? colors.gradient1 : 'transparent',
                color: activeSection === section ? 'white' : colors.textSecondary,
                border: activeSection === section ? 'none' : `1px solid ${colors.cardBorder}`,
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {section === 'case-studies' ? 'Case Studies' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem', padding: '0 1rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {activeSection === "about" && (
          <GlassCard>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{
                fontSize: '2.5rem',
                background: colors.gradient1,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                Khizer Niaz
              </h1>
              <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                Senior Software Developer | AI & SaaS Engineer | Digital Growth & SEO Specialist
              </p>
              <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
                Bridging Technology & Marketing for Scalable Impact
              </p>
            </div>
            <div style={{ borderTop: `1px solid ${colors.cardBorder}`, paddingTop: '2rem' }}>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                I'm Khizer Niaz, a Senior Software Developer & Digital Marketing Specialist with expertise in Python, FastAPI, Flask, React.js, Next.js, and AI/ML integrations. 
                I design scalable backends, intelligent APIs, and modern frontends, while also leading digital marketing, SEO, and growth strategies.
              </p>
              <p style={{ lineHeight: 1.6 }}>
                Passionate about AI-driven solutions, SaaS innovation, and storytelling, I help businesses transform complex ideas into clean, functional, and impactful solutions. 
                Open to global remote opportunities in AI, SaaS, and digital transformation.
              </p>
            </div>
          </GlassCard>
        )}

        {activeSection === "skills" && (
          <GlassCard>
            <h2 style={{
              fontSize: '2rem',
              background: colors.gradient1,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}>
              Technical Skills & Expertise
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  textAlign: 'center'
                }}>
                  {skill}
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${colors.cardBorder}`, paddingTop: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: colors.purple, fontWeight: 'bold', marginBottom: '1rem' }}>High-Demand Services</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {[
                  "AI-Powered SaaS Platforms (Python + FastAPI + Next.js)",
                  "Custom Automation Tools (APIs, Web Scraping, AI Agents)",
                  "Trading & Financial Signal Bots (AI + Data Analysis)",
                  "SEO-Optimized Web Apps (WordPress, React.js, Next.js)",
                  "AI-Powered Marketing Campaigns (Chatbots, Content Generation)",
                  "E-Commerce Growth Systems (Shopify/WordPress + AI SEO)"
                ].map((service, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: colors.textSecondary }}>
                    <span style={{ color: colors.pink }}>•</span> {service}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        )}

        {activeSection === "case-studies" && (
          <GlassCard>
            <h2 style={{
              fontSize: '2rem',
              background: colors.gradient2,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}>
              Case Studies
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {caseStudies.map((study, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: colors.purple, fontWeight: 'bold' }}>{study.title}</h3>
                    <span style={{ fontSize: '0.875rem', color: colors.textSecondary }}>{study.period}</span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}><span style={{ fontWeight: 'bold', color: colors.blue }}>Role: </span>{study.role}</div>
                  <div style={{ marginBottom: '0.5rem' }}><span style={{ fontWeight: 'bold', color: colors.blue }}>Technologies: </span>{study.tech}</div>
                  <div><span style={{ fontWeight: 'bold', color: colors.blue }}>Result: </span>{study.result}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {activeSection === "contact" && (
          <GlassCard>
            <h2 style={{
              fontSize: '2rem',
              background: colors.gradient3,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}>
              Get In Touch
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: "Email", value: contactInfo.email, color: colors.purple },
                { title: "LinkedIn", value: contactInfo.linkedin, color: colors.blue },
                { title: "GitHub", value: contactInfo.github, color: colors.pink }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`
                }}>
                  <h3 style={{ fontSize: '1.25rem', color: item.color, fontWeight: 'bold', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ marginBottom: '1rem', wordBreak: 'break-all' }}>{item.value}</p>
                  <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    background: item.color,
                    color: 'white',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    {item.title === "Email" ? "Copy Email" : `View ${item.title}`}
                  </button>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${colors.cardBorder}`, paddingTop: '2rem', textAlign: 'center', marginTop: '2rem' }}>
              <p>Open to global remote opportunities in AI, SaaS, and digital transformation.</p>
              <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Let's build something amazing together.</p>
            </div>
          </GlassCard>
        )}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        borderTop: `1px solid ${colors.cardBorder}`,
        backdropFilter: 'blur(10px)',
        background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)'
      }}>
        <p>© 2024 Khizer Niaz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;