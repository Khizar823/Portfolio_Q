import React, { useState, useEffect } from "react";

export default function App() {
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

  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: darkMode 
              ? `
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 75, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at ${window.innerWidth - mousePosition.x}px ${mousePosition.y}px, rgba(255, 105, 180, 0.3) 0%, transparent 50%),
                linear-gradient(135deg, #0f0c29, #302b63, #24243e)
              `
              : `
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 75, 255, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, #f5f7fa, #e4edf9, #d5e1f0)
              `
          }}
        />
      </div>
      
      {/* Theme Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 md:p-3"
      >
        {darkMode ? (
          <svg className="w-4 h-4 text-yellow-300 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-gray-700 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 md:hidden"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation */}
      <nav className={`
        fixed top-0 left-0 right-0 z-40 p-4 backdrop-blur-md border-b
        ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'}
        ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}
        md:relative md:bg-transparent md:border-0
      `}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 max-w-4xl mx-auto">
          {['about', 'skills', 'case-studies', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setIsMobileMenuOpen(false);
              }}
              className={`
                px-4 py-2 rounded-full font-medium transition-all duration-300
                ${activeSection === section 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : darkMode 
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
                w-full md:w-auto
              `}
            >
              {section === 'case-studies' ? 'Case Studies' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 md:pt-28 pb-16 px-4 max-w-6xl mx-auto relative z-10">
        {activeSection === "about" && (
          <div className={`
            backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl
            ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-gray-200'}
          `}>
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Khizer Niaz
              </h1>
              <p className="text-lg md:text-2xl mt-4 font-light">
                Senior Software Developer | AI & SaaS Engineer | Digital Growth & SEO Specialist
              </p>
              <p className="text-gray-500 mt-2 md:mt-4">
                Bridging Technology & Marketing for Scalable Impact
              </p>
            </div>
            <div className={`pt-8 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
              <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                I'm Khizer Niaz, a Senior Software Developer & Digital Marketing Specialist with expertise in Python, FastAPI, Flask, React.js, Next.js, and AI/ML integrations. 
                I design scalable backends, intelligent APIs, and modern frontends, while also leading digital marketing, SEO, and growth strategies.
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto mt-6">
                Passionate about AI-driven solutions, SaaS innovation, and storytelling, I help businesses transform complex ideas into clean, functional, and impactful solutions. 
                Open to global remote opportunities in AI, SaaS, and digital transformation.
              </p>
            </div>
          </div>
        )}

        {activeSection === "skills" && (
          <div className={`
            backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl
            ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-gray-200'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {skills.map((skill, index) => (
                <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'}`}>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
            <div className={`pt-8 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-purple-500">High-Demand Services</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "AI-Powered SaaS Platforms (Python + FastAPI + Next.js)",
                  "Custom Automation Tools (APIs, Web Scraping, AI Agents)",
                  "Trading & Financial Signal Bots (AI + Data Analysis)",
                  "SEO-Optimized Web Apps (WordPress, React.js, Next.js)",
                  "AI-Powered Marketing Campaigns (Chatbots, Content Generation)",
                  "E-Commerce Growth Systems (Shopify/WordPress + AI SEO)"
                ].map((service, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-pink-500 mr-3 mt-1">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeSection === "case-studies" && (
          <div className={`
            backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl
            ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-gray-200'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </h2>
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-500">{study.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{study.period}</span>
                  </div>
                  <div className="mb-3"><span className="font-medium text-blue-500">Role: </span>{study.role}</div>
                  <div className="mb-3"><span className="font-medium text-blue-500">Technologies: </span>{study.tech}</div>
                  <div><span className="font-medium text-blue-500">Result: </span>{study.result}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className={`
            backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl
            ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-gray-200'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Email", value: contactInfo.email, color: "purple" },
                { title: "LinkedIn", value: contactInfo.linkedin, color: "blue" },
                { title: "GitHub", value: contactInfo.github, color: "pink" }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'}`}>
                  <h3 className={`text-xl font-semibold mb-4 text-${item.color}-500`}>{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 break-all mb-4">{item.value}</p>
                  <button className={`w-full px-4 py-2 bg-gradient-to-r from-${item.color}-500 to-${item.color === 'purple' ? 'pink' : item.color === 'blue' ? 'purple' : 'blue'}-500 text-white rounded-lg hover:shadow-lg transition-all duration-300`}>
                    {item.title === "Email" ? "Copy Email" : `View ${item.title}`}
                  </button>
                </div>
              ))}
            </div>
            <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
              <p className="text-lg text-center">
                Open to global remote opportunities in AI, SaaS, and digital transformation.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
                Let's build something amazing together.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className={`py-6 text-center text-gray-500 dark:text-gray-400 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} backdrop-blur-md`}>
        <p>© 2024 Khizer Niaz. All rights reserved.</p>
      </footer>
    </div>
  );
}