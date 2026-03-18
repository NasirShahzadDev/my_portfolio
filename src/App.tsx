import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
  CheckCircle2,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Terminal,
} from "lucide-react";

import {
  CONFIG,
  EDUCATION,
  SKILLS_CATEGORIES,
  HIGHLIGHTS,
  EXPERIENCE,
  PROJECTS,
  TOOLS_ECOSYSTEM,
  CERTIFICATIONS,
} from "./data";

// --- Components ---

const NavLinks = ({ className = "", onClick = () => {} }) => (
  <div className={`flex items-center gap-8 ${className}`}>
    <a href="#about" onClick={onClick} className="hover:text-indigo-400 transition-colors">
      About
    </a>
    <a href="#highlights" onClick={onClick} className="hover:text-indigo-400 transition-colors">
      Architecture
    </a>
    <a href="#experience" onClick={onClick} className="hover:text-indigo-400 transition-colors">
      Experience
    </a>
    <a href="#projects" onClick={onClick} className="hover:text-indigo-400 transition-colors">
      Projects
    </a>
    <a
      href={`${import.meta.env.BASE_URL}${CONFIG.resumeUrl}`}
      download
      className="px-5 py-2 rounded-full border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 transition-all flex items-center gap-2"
    >
      Resume <Download size={14} />
    </a>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalScrollRef = React.useRef(null);

  const scrollModalDown = () => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({
        top: modalScrollRef.current.scrollTop + 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[2rem] lg:rounded-[3rem] glass border border-white/10 shadow-2xl overflow-hidden"
            >
              <div
                ref={modalScrollRef}
                className="flex-1 overflow-y-auto p-6 lg:p-12 scrollbar-hide"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 lg:top-8 lg:right-8 p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-white/5 hover:bg-white/10 transition-colors z-10"
                >
                  <X size={20} className="lg:w-6 lg:h-6" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/5">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[12px] font-bold text-indigo-400 uppercase tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="text-indigo-500 font-black uppercase tracking-[0.3em] text-[12px] mb-4">
                        {selectedProject.subtitle}
                      </div>
                      <h2 className="text-4xl font-black tracking-tighter mb-6">
                        {selectedProject.title}
                      </h2>
                      <div className="h-1.5 w-20 bg-indigo-600 rounded-full mb-8" />
                      <p className="text-slate-400 text-lg leading-relaxed text-justify">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-200">
                        Key Contributions
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.details?.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-indigo-500 flex-shrink-0 mt-0.5"
                            />
                            {detail}
                          </li>
                        )) || (
                          <li className="text-slate-500 italic text-sm">
                            Detailed breakdown coming soon...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator/Button */}
              <div className="p-4 border-t border-white/5 flex justify-center bg-slate-900/80 backdrop-blur-md">
                <button
                  onClick={scrollModalDown}
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all group"
                >
                  Explore Details{" "}
                  <ChevronRight
                    size={14}
                    className="rotate-90 group-hover:translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass py-4 lg:py-5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="text-xl lg:text-2xl font-black tracking-tighter">
              NASIR SHAHZAD<span className="text-indigo-500"></span>
            </div>
            <div className="hidden lg:flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <MapPin size={12} className="text-indigo-500" /> {CONFIG.location}
            </div>
          </div>

          <nav className="hidden lg:block text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <NavLinks />
          </nav>

          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0a0f1e] pt-24 px-6"
          >
            <div className="flex flex-col gap-8 text-lg font-bold uppercase tracking-widest text-slate-400">
              <NavLinks className="flex-col items-start" onClick={() => setIsMenuOpen(false)} />
              <div className="pt-8 border-t border-white/5 flex gap-6">
                <a
                  href={CONFIG.github}
                  target="_blank"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={CONFIG.linkedin}
                  target="_blank"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="about"
        className="pt-32 lg:pt-48 pb-16 lg:pb-24 relative overflow-hidden bg-[#0a0f1e]"
      >
        {/* Atmospheric Background */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/15 blur-[140px] rounded-full -z-10" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-600/15 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-cyan-500" />
                <div className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[12px]">
                  Software Engineer
                </div>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] lg:leading-[0.95] mb-8 lg:mb-12 text-gradient">
                ARCHITECTING HIGH-PERFORMANCE
                <br className="hidden sm:block" /> BACKEND ECOSYSTEMS
              </h1>
              <p className="text-slate-300 text-base lg:text-xl max-w-3xl mb-12 lg:mb-16 leading-relaxed text-justify border-l-2 border-cyan-500/20 pl-6 lg:pl-8">
                {CONFIG.summary}
              </p>

              <div className="flex flex-wrap gap-4 lg:gap-6 mb-16 lg:mb-24">
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center px-8 lg:px-10 py-4 lg:py-5 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/30"
                >
                  Explore Projects
                </a>
                <a
                  href={CONFIG.whatsapp}
                  target="_blank"
                  className="w-full sm:w-auto text-center px-8 lg:px-10 py-4 lg:py-5 rounded-2xl border border-slate-700 text-slate-200 font-black uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
                >
                  Get in Touch
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                {[
                  { label: "Years Industry Exp", value: "3.5+" },
                  { label: "Key Enterprise Projects", value: "8+" },
                  { label: "Cloud Practitioner", value: "AWS" },
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="text-3xl lg:text-5xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] lg:text-[12px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-[#111827]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/10 blur-[180px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-[2rem] lg:rounded-[4rem] blur-2xl group-hover:bg-cyan-500/30 transition-all duration-700" />
                <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden border border-slate-700 shadow-2xl bg-[#0a0f1e]">
                  <img
                    src={`${import.meta.env.BASE_URL}${CONFIG.profileImage}`}
                    alt={CONFIG.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                    <div className="text-lg lg:text-2xl font-black tracking-tight text-white">
                      {CONFIG.name}
                    </div>
                    <div className="text-cyan-400 font-bold uppercase tracking-widest text-[8px] lg:text-[10px]">
                      Architecting Excellence
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:space-y-10"
            >
              <div className="space-y-4">
                <div className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[18px]">
                  The Architect
                </div>
                <h2 className="text-3xl lg:text-6xl font-black tracking-tighter text-white">
                  Professional Profile
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full" />
              </div>
              <p className="text-slate-300 text-base lg:text-xl leading-relaxed">
                I am a dedicated Software Engineer with a passion for architecting robust backend
                solutions. My approach combines technical precision with a deep understanding of
                business requirements, ensuring that every system I build is not only functional but
                also scalable and future-proof.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: Mail, label: "Email", value: CONFIG.email, color: "text-indigo-400" },
                  { icon: Phone, label: "Phone", value: CONFIG.phone, color: "text-cyan-400" },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: CONFIG.location,
                    color: "text-indigo-400",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Nasir Shahzad",
                    color: "text-cyan-400",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-[#0a0f1e]/50 border border-slate-700 hover:border-cyan-500/30 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#111827] flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                    >
                      <item.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-slate-500">
                        {item.label}
                      </div>
                      <div className="text-[10px] lg:text-sm font-bold text-slate-200 truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Highlights */}
      <section id="highlights" className="py-32 relative bg-[#0a0f1e] border-y border-slate-900">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyan-500/10 blur-[140px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <div className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[12px] mb-4">
              Precision Engineering
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-6 text-white">
              Engineering Highlights
            </h2>
            <div className="h-1 w-20 bg-cyan-600 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 lg:p-8 rounded-3xl bg-[#111827]/60 backdrop-blur-xl border border-slate-800/50 hover:border-cyan-400/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a0f1e] border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                  <Terminal size={24} className="text-cyan-400 group-hover:text-inherit" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {h.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-32 bg-[#111827]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tighter mb-6 text-white">
              Technical Arsenal
            </h2>
            <p className="text-slate-400 text-base lg:text-lg">
              A comprehensive overview of the technologies and methodologies I employ to build
              high-performance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {SKILLS_CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-3xl bg-[#0a0f1e]/60 backdrop-blur-xl border border-slate-800/50 flex flex-col gap-6 group hover:bg-[#0a0f1e] hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111827] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-cyan-500/5">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-slate-100">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-[#111827] border border-slate-800 text-[12px] font-bold text-slate-400 group-hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Ecosystem Section */}
      <section id="tools" className="py-20 lg:py-32 relative overflow-hidden bg-[#0a0f1e]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[12px] mb-4">
                Productivity Arsenal
              </div>
              <h2 className="text-3xl lg:text-6xl font-black tracking-tighter mb-6 text-white">
                Tools & Ecosystem
              </h2>
              <div className="h-1 w-20 bg-cyan-600 rounded-full" />
            </div>
            <p className="text-slate-400 text-sm lg:text-base max-w-md lg:text-right">
              Proficient in industry-standard tools for project management, code quality, and
              collaborative engineering workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {TOOLS_ECOSYSTEM.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-[#111827]/40 backdrop-blur-md border border-slate-800/50 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#0a0f1e] flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <tool.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm lg:text-base font-bold text-slate-100">{tool.name}</div>
                    <div className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">
                      {tool.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 lg:py-32 relative overflow-hidden bg-[#0a0f1e] border-y border-slate-900"
      >
        <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-cyan-600/10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-6xl font-black tracking-tighter mb-16 lg:mb-24 text-white">
            Professional Experience
          </h2>
          <div className="space-y-8 lg:space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 lg:p-12 rounded-[2rem] lg:rounded-[3.5rem] bg-[#111827]/60 backdrop-blur-xl border border-slate-800/50 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-black text-slate-100">
                          {exp.company}
                        </h3>
                        <p className="text-cyan-400 font-bold uppercase tracking-widest text-[12px]">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-slate-300 mb-2">
                      {exp.role}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="space-y-3 lg:space-y-4">
                      {exp.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 lg:gap-4 text-slate-400 text-sm lg:text-base leading-relaxed"
                        >
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-[#111827]">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-cyan-600/10 blur-[160px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-8">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tighter max-w-2xl text-white">
              Key Projects
            </h2>
            <a
              href={CONFIG.github}
              target="_blank"
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors group"
            >
              View GitHub{" "}
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:gap-24">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[16/9] rounded-[2rem] lg:rounded-[4rem] overflow-hidden border border-slate-800 relative shadow-2xl bg-[#0a0f1e]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[12px] mb-3 lg:mb-4">
                    {project.subtitle}
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-black mb-4 lg:mb-6 text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm lg:text-lg mb-6 lg:mb-10 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-12">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl bg-[#0a0f1e] border border-slate-800 text-[10px] lg:text-[12px] font-bold text-slate-500 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                  >
                    Project Details <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 lg:py-32 bg-[#111827] border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl lg:text-6xl font-black tracking-tighter mb-12 lg:mb-20 text-white">
                Education
              </h2>
              <div className="space-y-8 lg:space-y-12">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-10 lg:pl-12 border-l-2 border-cyan-500/20"
                  >
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                    <h3 className="text-xl lg:text-2xl font-black mb-2 text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] lg:text-[12px]">
                      {edu.school}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-6xl font-black tracking-tighter mb-12 lg:mb-20 text-white">
                Certifications
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 lg:p-6 rounded-2xl bg-[#0a0f1e]/60 backdrop-blur-xl border border-slate-800 flex items-center gap-4 lg:gap-6 group hover:border-cyan-500/30 transition-all shadow-2xl"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#111827] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm font-bold text-slate-100 mb-1">
                        {cert.title}
                      </div>
                      <div className="text-[10px] lg:text-[12px] font-bold uppercase tracking-widest text-slate-500">
                        {cert.issuer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                Architecting Excellence
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: CONFIG.github },
                { icon: Linkedin, href: CONFIG.linkedin },
                { icon: Mail, href: `mailto:${CONFIG.email}` },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 group shadow-2xl"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
