export const PORTFOLIO_INFO = {
  name: "Arun Prakash V",
  title: "Full Stack Developer",
  role: "React.js • Python Flask • Laravel • MySQL",
  tagline: "Engineering Scalable Web Apps, Clean REST APIs & High-Performance Interfaces",
  bio: "Motivated Full Stack Developer with hands-on experience in React.js, Python Flask, PHP Laravel, and MySQL. Passionate about engineering scalable web applications, architecting robust RESTful APIs, implementing secure JWT / OAuth authentication workflows, and delivering clean, maintainable code.",
  availability: "Available for Full-time Developer Roles",
  statusBadge: "Available for Full Stack / Frontend / Backend Roles",
  location: "Aruppukottai, Tamil Nadu, India",
  email: "rnprkshv@gmail.com",
  phone: "+91 9597477183",
  resumeUrl: "/resume/Arun_Prakash_bsc_Resume.pdf",
  socials: {
    github: "https://github.com/rn-prksh",
    linkedin: "https://www.linkedin.com/in/arun-prakash-v",
    gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=rnprkshv@gmail.com"
  }
};

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Internship Experience",
    value: "1+ Years",
    desc: "Hands-on full stack engineering at DCE Technology",
    category: "Experience"
  },
  {
    title: "Education",
    value: "B.Sc. IT Graduate",
    desc: "VHNSN College, Virudhunagar",
    category: "Academics"
  },
  {
    title: "Core Stack",
    value: "MERN & Python/PHP",
    desc: "React.js, Flask, Laravel, and MySQL",
    category: "Tech Stack"
  },
  {
    title: "Availability",
    value: "Immediate Joiner",
    desc: "Open to Full-time Onsite & Remote roles",
    category: "Status"
  }
];

export const DEV_ENVIRONMENT = [
  {
    category: "Primary Stack",
    title: "React.js 18 + Vite & Tailwind / Modular CSS",
    detail: "Component-driven architecture, custom hooks, responsive mobile-first layouts, and accessible UI."
  },
  {
    category: "Backend Frameworks",
    title: "Python (Flask) & PHP (Laravel 10 / 11)",
    detail: "RESTful API engineering, MVC design patterns, middleware authentication, and request validation."
  },
  {
    category: "Database & ORM",
    title: "MySQL & Relational Schema Architecture",
    detail: "Normalized relational schemas, indexed foreign keys, optimized SQL joins, and transaction safety."
  },
  {
    category: "Authentication & Security",
    title: "JWT & OAuth 2.0 (Google, Zoho, Firebase)",
    detail: "Stateless bearer token validation, refresh tokens, password hashing (bcrypt), and role-based permissions."
  },
  {
    category: "API Testing & Tooling",
    title: "Postman, Bruno, Git & VS Code",
    detail: "End-to-end API documentation, automated test collections, Git branching, and agile collaboration."
  },
  {
    category: "OS & Deployment",
    title: "Linux / Windows WSL2, Node.js & Vite",
    detail: "Optimized production builds, asset compression (WebP), Netlify CI/CD, and Lighthouse 95+ performance."
  }
];

export const SKILLS_DATA = [
  {
    title: "Frontend Development",
    icon: "Code2",
    level: 90,
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & Semantic UI", "CSS3 & Glassmorphism", "Responsive Design", "Vite"]
  },
  {
    title: "Backend Engineering",
    icon: "Server",
    level: 88,
    skills: ["Python (Flask)", "PHP (Laravel)", "Node.js Basics", "RESTful APIs", "MVC Architecture", "Middleware & Routing"]
  },
  {
    title: "Database & Storage",
    icon: "Database",
    level: 85,
    skills: ["MySQL", "Relational Schema Design", "Query Optimization", "Foreign Keys & Indexing", "CRUD Workflows"]
  },
  {
    title: "Auth & Security",
    icon: "ShieldCheck",
    level: 85,
    skills: ["JWT Authentication", "OAuth 2.0 (Google, Zoho)", "Firebase Auth", "Role-Based Access Control (RBAC)"]
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    level: 90,
    skills: ["Git & GitHub", "Postman", "Bruno API Client", "VS Code", "npm / Vite", "Chrome DevTools"]
  },
  {
    title: "Programming Languages",
    icon: "Terminal",
    level: 88,
    skills: ["Python", "JavaScript", "PHP", "SQL", "C", "Java"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Software Intern – Python Flask Full Stack Developer",
    company: "DCE Technology",
    location: "Virudhunagar, India",
    period: "Jul 2025 – Mar 2026",
    duration: "9 mos",
    badge: "Python / Flask Stack",
    points: [
      "Architected and developed full-stack web applications using Python, Flask framework, and MySQL database.",
      "Designed and engineered scalable RESTful APIs connecting interactive React.js client interfaces to backend microservices.",
      "Implemented robust JWT-based Authentication, role-based access control (RBAC), relational database schema optimization, and security best practices."
    ],
    tech: ["Python", "Flask", "React.js", "MySQL", "JWT", "REST APIs", "Postman", "Git"]
  },
  {
    role: "Software Intern – Full Stack Development (Laravel)",
    company: "DCE Technology",
    location: "Virudhunagar, India",
    period: "Sep 2024 – Apr 2025",
    duration: "7 mos",
    badge: "Laravel / PHP Stack",
    points: [
      "Completed an intensive 7-month full stack software engineering internship focused on PHP and Laravel framework.",
      "Developed and maintained modular web applications following clean MVC (Model-View-Controller) architecture standards.",
      "Integrated relational MySQL databases, implemented secure session-based authentication, and created automated workflows."
    ],
    tech: ["PHP", "Laravel", "MySQL", "MVC Architecture", "Blade", "Git", "SQL"]
  }
];

export const CATEGORIES = ["All", "React & Flask", "Laravel & PHP"];

export const PROJECTS_DATA = [
  {
    id: "hostel-mgmt",
    title: "Hostel & Hall Ticket Management System",
    category: "React & Flask",
    tech: ["React.js", "Python Flask", "MySQL", "JWT", "REST APIs", "Vite"],
    description: "A multi-role enterprise web application connecting Students, Faculty Staff, Admin, and Hostel Wardens with an automated hall ticket clearance workflow, live status tracking, and secure RESTful endpoints.",
    overview: "Built to eliminate paper-based hostel clearance delays in academic institutions. The system introduces digital clearance sign-offs across wardens, library, and department heads with encrypted JWT credentials and role-specific dashboard views.",
    imageWebp: "/images/hostel_mgmt.webp",
    imagePng: "/images/hostel_mgmt.png",
    github: "https://github.com/rn-prksh",
    demo: null,
    highlights: [
      "Multi-role RBAC permissions (Student, Warden, Faculty, Admin)",
      "Automated hall ticket clearance sign-off workflow",
      "Stateless JWT authentication with encrypted session tokens",
      "Modular REST APIs engineered with Python Flask"
    ],
    architecture: "Frontend: React.js SPA • Backend: Python Flask REST API • Database: MySQL 8.0 • Auth: JWT Bearer Tokens"
  },
  {
    id: "industrial-mgmt",
    title: "Industrial Management System",
    category: "Laravel & PHP",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "MVC", "Git"],
    description: "An end-to-end industrial manufacturing platform engineered to track dye and mold production processes, tooling lifecycles, and machine job allocations with relational database integrity.",
    overview: "Engineered for manufacturing operations to monitor tool wear, scheduled maintenance, job shop batch queues, and raw material inventory. Implemented full CRUD modules using Laravel's Eloquent ORM and strict foreign key constraints.",
    imageWebp: "/images/industrial.webp",
    imagePng: "/images/industrial.png",
    github: "https://github.com/rn-prksh/industrial-management-system",
    demo: null,
    highlights: [
      "Dye & mold production lifecycle tracking",
      "Job shop machine scheduling and operator assignment",
      "Full relational CRUD operations with Eloquent ORM",
      "Clean MVC architecture with Blade templates"
    ],
    architecture: "Framework: Laravel 10 (PHP 8.2) • DB: MySQL Relational Schema • Architecture: MVC Pattern"
  },
  {
    id: "task-mgmt",
    title: "Task Management System",
    category: "React & Flask",
    tech: ["React.js", "CodeIgniter", "MySQL", "Firebase", "OAuth 2.0", "REST APIs"],
    description: "A streamlined productivity and task collaboration system featuring multi-provider authentication with Google OAuth, Zoho OAuth, and Firebase Auth for unified account access.",
    overview: "Enables distributed teams to collaborate on project sprint boards, prioritize deliverables, and synchronize task statuses. Built with secure OAuth 2.0 third-party authentication and real-time validation.",
    imageWebp: "/images/task.webp",
    imagePng: "/images/task.png",
    github: "https://github.com/rn-prksh",
    demo: null,
    highlights: [
      "Multi-provider login: Google OAuth 2.0 & Zoho OAuth",
      "Firebase Auth token verification pipeline",
      "Interactive task kanban & priority assignment boards",
      "Responsive UI built with React.js and CSS Grid"
    ],
    architecture: "Frontend: React.js • Auth: Google OAuth + Zoho + Firebase • API: REST Services • Storage: MySQL"
  }
];
