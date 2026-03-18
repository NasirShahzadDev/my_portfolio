import {
  Server,
  Layout,
  Layers,
  Briefcase,
  FileText,
  Database,
  Cloud,
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";

export const CONFIG = {
  name: "Nasir Shahzad",
  role: "Software Engineer",
  experience: "3.5+ Years",
  email: "nasirshahzad.dev@gmail.com",
  phone: "+92 333 81 52 157",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/nasir-shahzad-525110210/",
  github: "https://github.com/nasirshahzaddev",
  resumeUrl: "/Nasir-CV-M.pdf",
  whatsapp: "https://wa.me/923338152157",
  profileImage: "/Nasir.jpg", // User's uploaded picture
  summary:
    "Full-Stack Software Engineer (3.5+ years) with a strong backend focus on Node.js and NestJS. Skilled in building scalable, high-performance systems, designing robust architectures, optimizing databases, implementing event-driven workflows, and delivering production-ready full-stack applications across diverse domains.",
};

export const SKILLS_CATEGORIES = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
    icon: Code2,
  },
  {
    title: "Backend",
    skills: ["NodeJS", "NestJS", "ExpressJS"],
    icon: Server,
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind"],
    icon: Layout,
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
    icon: Database,
  },
  {
    title: "Architecture",
    skills: ["REST APIs", "Microservices", "Monolith", "Monorepo", "gRPC", "TCP"],
    icon: Layers,
  },
  {
    title: "Performance",
    skills: ["Caching", "Job Queues", "Query Optimization", "Indexing"],
    icon: Zap,
  },
  {
    title: "Messaging",
    skills: ["RabbitMQ", "WebSockets", "Socket.io"],
    icon: Activity,
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Lambda", "Webhooks", "Cron Jobs"],
    icon: Cloud,
  },
];

export const HIGHLIGHTS = [
  {
    title: "Multi-Tenant Architecture",
    description:
      "Designed and implemented a multi-tenant backend architecture with tenant isolation, domain-based resolution, and dynamic RBAC supporting multiple organizations.",
  },
  {
    title: "Latency Optimization",
    description:
      "Optimized tenant resolution logic using in-memory lookup structures, reducing identification latency from 800ms to 20ms.",
  },
  {
    title: "Performance Tuning",
    description:
      "Improved backend performance through Redis caching and query optimizations, reducing average API response times by 30–40%.",
  },
  {
    title: "Healthcare Security",
    description:
      "Designed secure authentication and authorization systems using RBAC for healthcare platforms handling sensitive patient data.",
  },
  {
    title: "Flexible RBAC",
    description:
      "Built a flexible RBAC system with dynamic roles and predefined permissions, ensuring granular access control for all endpoints.",
  },
  {
    title: "Serverless Pipeline",
    description:
      "Designed a serverless transcription pipeline using AWS Transcribe and Lambda to process medical audio and generate clinical documentation.",
  },
  {
    title: "Audit Logging",
    description:
      "Implemented a centralized audit logging system resolving MongoDB ObjectId references across 15+ entity types, eliminating N+1 queries.",
  },
];

export const EXPERIENCE = [
  {
    company: "Brackets Private Limited",
    period: "October 2022 - Present",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed and maintained scalable backend services using NodeJS and NestJS for healthcare and SaaS platforms.",
      "Designed and implemented RESTful APIs using MongoDB and PostgreSQL.",
      "Developed a reusable audit logging system to capture entity changes across platform modules.",
      "Optimized database queries, indexing strategies, and Redis caching mechanisms.",
      "Contributed to the design of multi-tenant backend architectures.",
      "Built event-driven and serverless workflows using AWS Lambda.",
      "Implemented secure authentication and authorization systems using RBAC.",
      "Mentored junior developers and participated in code reviews.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Cairasu (Home Care)",
    subtitle: "Multi-Tenant Caregiver Marketplace",
    description:
      "Designed backend architecture for a multi-tenant platform connecting individuals with caregivers. Implemented tenant isolation, domain-based resolution, and dynamic RBAC.",
    tech: ["NestJS", "NodeJS", "MongoDB", "Redis", "REST APIs", "AWS"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Architected multi-tenant database structure with strict data isolation.",
      "Implemented domain-based tenant resolution reducing latency by 90%.",
      "Developed dynamic RBAC system for granular access control.",
      "Integrated secure payment gateways and real-time notification systems.",
    ],
  },
  {
    title: "SOAP Notes Generation",
    subtitle: "Clinical Documentation Automation",
    description:
      "Designed and implemented backend services for a healthcare platform that automatically generates SOAP clinical notes from audio recordings using AWS Transcribe and Lambda.",
    tech: ["NodeJS", "NestJS", "AWS Transcribe", "AWS Lambda", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Built serverless audio processing pipeline using AWS Lambda.",
      "Integrated AWS Transcribe for high-accuracy medical speech-to-text.",
      "Developed NLP-based parsing to structure transcriptions into SOAP format.",
      "Ensured HIPAA compliance for all data processing and storage.",
    ],
  },
  {
    title: "Business Process Automation",
    subtitle: "Enterprise Workflow System",
    description:
      "Comprehensive enterprise platform to automate core business workflows including expenses, payroll, and audits. Built modular backend services and scalable APIs.",
    tech: ["NodeJS", "ExpressJS", "MongoDB", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    details: [
      "Automated complex payroll calculations and expense approval workflows.",
      "Built a modular audit system tracking changes across 15+ entities.",
      "Designed high-performance reporting engine for business analytics.",
      "Implemented secure document storage and versioning.",
    ],
  },
  {
    title: "Healthcare Compliance",
    subtitle: "HIPAA Monitoring Platform",
    description:
      "Built backend services for a healthcare compliance platform that helps hospitals and clinics monitor HIPAA adherence. Implemented secure APIs and tracking workflows.",
    tech: ["NestJS", "NodeJS", "MongoDB", "PostgreSQL", "Microservices"],
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2064&auto=format&fit=crop",
    details: [
      "Developed real-time monitoring dashboard for compliance metrics.",
      "Implemented automated risk assessment and reporting tools.",
      "Built secure communication channels for compliance officers.",
      "Designed scalable microservices architecture for high availability.",
    ],
  },
  {
    title: "HealthQ (Dental Match)",
    subtitle: "Clinic Collaboration Platform",
    description:
      "Platform connecting dental clinics with dentists for job posting, applications, and communication. Built scalable APIs and core modules for job management.",
    tech: ["NestJS", "NodeJS", "PostgreSQL", "Redis", "AWS"],
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Built job matching algorithm based on location and specialization.",
      "Implemented real-time chat system for clinic-dentist communication.",
      "Developed secure application tracking and interview scheduling.",
      "Optimized search performance using Redis caching.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.Phil (Software Engineering)",
    school: "University of Lahore",
  },
  {
    degree: "M.Sc (Information Technology)",
    school: "University of Sargodha",
  },
];

export const TOOLS_ECOSYSTEM = [
  { name: "Jira", category: "Project Management", icon: Briefcase },
  { name: "ClickUp", category: "Workflow Automation", icon: Activity },
  { name: "Discord", category: "Communication", icon: Zap },
  { name: "SonarQube", category: "Code Quality & Fixes", icon: ShieldCheck },
  { name: "Postman", category: "API Testing", icon: Terminal },
  { name: "Slack", category: "Communication", icon: Zap },
  { name: "Swagger", category: "API Documentation", icon: FileText },
  { name: "Redis", category: "Caching", icon: Zap },
];

export const CERTIFICATIONS = [
  { title: "Scrum Fundamentals Certified (SFC™)", issuer: "Scrum Study" },
  { title: "Developing Back-End Apps with NodeJS and Express", issuer: "IBM / Coursera" },
  { title: "Managing Project Risks and Changes", issuer: "UC Irvine / Coursera" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS / Coursera" },
  { title: "Fundamentals of NestJS", issuer: "Board Infinity / Coursera" },
];
