export const personalInfo = {
  name: "Aniket Kumar Singh",
  firstName: "Aniket",
  role: "B.Tech Computer Science Student and Full-Stack Developer",
  email: "aniket24086@gmail.com",
  location: "Lucknow, India",
  github: "https://github.com/Aniket291104",
  linkedin: "https://linkedin.com/in/aniket-kumar-ab05a5326",
  resume: "/Aniket Kumar.pdf",
  availability: "Building toward internships, founder energy included",
  heroHeadline: "I build ambitious digital products with startup speed, product taste, and engineering discipline.",
  heroDescription:
    "I am a B.Tech Computer Science student who thinks like a builder. I care about sharp interfaces, useful systems, and products that communicate momentum from the first screen.",
  typingRoles: [
    "I ship product-minded web experiences.",
    "I prototype fast and polish hard.",
    "I build with speed, clarity, and intent.",
  ],
  stats: [
    { label: "Product Lens", value: "UX, Storytelling, Velocity" },
    { label: "Current Focus", value: "Internship, Full-Stack, ML" },
    { label: "Working Style", value: "Fast iteration, premium output" },
  ],
  founderPillars: [
    "Design-led execution",
    "Code with business context",
    "Rapid shipping mindset",
  ],
};

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutContent = {
  intro:
    "I am currently pursuing B.Tech in Computer Science while building projects that sharpen both my technical foundation and my instinct for product quality.",
  paragraphs: [
    "I enjoy working at the intersection of interface design, frontend engineering, and practical product building. I want the things I make to feel intentional, modern, and easy to trust.",
    "My strongest interest is in turning rough ideas into usable products, combining clean React experiences, scalable code structure, and thoughtful technical decisions that support the user journey.",
    "I am looking for opportunities where I can contribute like an owner, learn from ambitious teams, and grow into the kind of engineer who can help shape both the product and the execution.",
  ],
  highlights: [
    "Product-minded frontend and full-stack development",
    "Comfortable owning both polish and implementation",
    "Learns quickly and ships with strong visual standards",
    "Motivated by ambitious ideas and real-world usefulness",
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, modern interfaces with strong UX fundamentals.",
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "Tailwind CSS", level: 86 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    description: "Creating practical application logic, APIs, and service integrations.",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express", level: 68 },
      { name: "Python", level: 78 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    title: "Database",
    description: "Working with structured and document databases for app data flows.",
    skills: [
      { name: "MongoDB", level: 74 },
      { name: "SQL", level: 76 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Tools",
    description: "Using the right tools to collaborate, debug, and ship faster.",
    skills: [
      { name: "Git & GitHub", level: 78 },
      { name: "VS Code", level: 88 },
      { name: "Vite", level: 82 },
      { name: "Postman", level: 73 },
    ],
  },
];

export const education = [
  {
    title: "B.Tech in Computer Science",
    subtitle: "Currently pursuing",
    institution: "Babu Banarasi Das University, Lucknow",
    scoreLabel: "CGPA",
    score: "6.89 / 10",
    timeline: "Present",
    details:
      "Developing a solid foundation in programming, data structures, software development, and project-based learning.",
  },
  {
    title: "Class 12",
    subtitle: "Completed",
    institution: "Town High School, Mairwa Siwan BR",
    scoreLabel: "Percentage",
    score: "64.8%",
    timeline: "Completed",
    details:
      "Built academic discipline and strengthened the fundamentals that led me toward computer science.",
  },
  {
    title: "Class 10",
    subtitle: "Completed",
    institution: "D.V.M Public School , Pakwaliya Dhala Kandhwara Siwan BR",
    scoreLabel: "Percentage",
    score: "46.8%",
    timeline: "Completed",
    details:
      "Started shaping my interest in technology and long-term learning through self-improvement.",
  },
];

export const projectFilters = ["All", "Web", "AI", "ML"];

export const projects = [
  {
    id: "dropout-prediction",
    title: "Student Dropout Prediction",
    category: "ML",
    tagline: "A predictive intervention tool designed to help institutions act before dropout risk becomes irreversible.",
    problem:
      "Educational institutions often identify dropout risk only after attendance, grades, or engagement have already declined significantly. That delay reduces the chance of timely intervention and support.",
    solution:
      "I built an ML-driven risk scoring workflow that converts student inputs into an interpretable prediction, then surfaces the result through a simple web interface that non-technical users can understand quickly.",
    impact:
      "This project is valuable because it frames machine learning as a decision-support product, not just a model. It shows how predictive insights can reduce reaction time, support earlier outreach, and turn raw data into action.",
    stack: ["Python", "Flask", "Scikit-learn", "Pandas", "HTML/CSS"],
    features: [
      "Risk prediction workflow for student records",
      "Lightweight interface for quick staff-side input",
      "Prediction output designed for straightforward interpretation",
      "End-to-end flow from preprocessing to usable result delivery",
    ],
    outcomes: [
      "Demonstrates how ML can support earlier retention decisions instead of reactive reporting.",
      "Bridges the gap between a notebook model and a practical interface that a team could actually use.",
      "Highlights my ability to package technical work into a product-shaped workflow with operational value.",
    ],
    impactMetrics: [
      { label: "Core Value", value: "Earlier risk detection" },
      { label: "User Lens", value: "Simple for non-technical staff" },
      { label: "Business Angle", value: "Supports retention strategy" },
    ],
    github: "",
    live: "",
    preview: {
      eyebrow: "Machine Learning",
      title: "Risk Score Dashboard",
      caption: "Signals, predictions, and action-oriented student risk insights.",
      accent: "from-emerald-400 via-cyan-400 to-blue-500",
      theme: "analytics",
      primaryMetric: "82%",
      secondaryMetric: "Risk clusters",
      secondaryValue: "4 segments",
      chartBars: [78, 46, 63, 88, 57, 71],
    },
    featuredLabel: "Insight Product",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web",
    tagline: "A founder-style portfolio experience built to position skills, projects, and product thinking like a high-conviction brand.",
    problem:
      "Most junior portfolios feel templated, shallow, and forgettable. They list tools, but they do not build trust, communicate product taste, or help a recruiter understand how the developer thinks.",
    solution:
      "I redesigned the portfolio as a premium product experience with stronger storytelling, reusable React sections, refined motion, theme support, and project cards structured around problem, solution, and impact.",
    impact:
      "The portfolio now works as both a credibility asset and a product sample. It communicates visual standards, frontend capability, content strategy, and the ability to turn a vague brief into a polished outcome.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
    features: [
      "Fully responsive layout across device sizes",
      "Founder-style hero, storytelling, and visual hierarchy",
      "Project filtering, motion, and interactive content cards",
      "Contact flow with validation and clear status feedback",
    ],
    outcomes: [
      "Turns the portfolio itself into proof of frontend polish, UX judgment, and execution quality.",
      "Makes it easier for recruiters to assess strengths quickly through stronger content hierarchy and project framing.",
      "Shows that I can upgrade an existing product, improve positioning, and deliver a more premium final experience.",
    ],
    impactMetrics: [
      { label: "Primary Goal", value: "Stronger recruiter conversion" },
      { label: "Experience Upgrade", value: "Premium, product-led UI" },
      { label: "Engineering Signal", value: "Reusable + production-ready" },
    ],
    github: "https://github.com/Aniket291104",
    live: "https://portfolio-website-sooty-three-97.vercel.app/",
    preview: {
      eyebrow: "Frontend Product",
      title: "Interactive Portfolio UI",
      caption: "Brand storytelling, responsive systems, and premium motion.",
      accent: "from-fuchsia-500 via-violet-500 to-sky-500",
      theme: "portfolio",
      primaryMetric: "Founder-style",
      secondaryMetric: "Responsive views",
      secondaryValue: "Mobile to desktop",
      chartBars: [62, 78, 94, 81, 69, 88],
    },
    featuredLabel: "Brand Experience",
  },
  {
    id: "cloth-couture",
    title: "Cloth Couture",
    category: "Web",
    tagline: "A fashion e-commerce experience that emphasizes discovery, trust, and fast checkout for indie labels.",
    problem:
      "Most small fashion brands lose shoppers before checkout because their sites feel generic, slow, or unreliable—hurting conversion and brand perception.",
    solution:
      "I built a premium storefront with curated collections, persuasive product storytelling, and a streamlined cart flow so new visitors can browse, trust, and purchase quickly.",
    impact:
      "This project shows I can design and ship a revenue-focused UI: high visual polish, performance-conscious builds, and content that nudges buyers to finish the purchase.",
    stack: ["React", "Tailwind CSS", "Redux Toolkit", "Stripe Checkout", "Node/Express"],
    features: [
      "Collection-first navigation with fast client-side filtering",
      "Rich product pages with sizing, care, and lookbook sections",
      "Persistent cart with Stripe-powered checkout and order states",
      "CMS-friendly data model for adding drops without code changes",
    ],
    outcomes: [
      "Demonstrates end-to-end commerce thinking from UX to payments.",
      "Balances aesthetics with speed via code-splitting and image optimization.",
      "Shows ability to ship reliable purchase flows that earn trust.",
    ],
    impactMetrics: [
      { label: "Conversion Focus", value: "Checkout-first journeys" },
      { label: "UX Signal", value: "Discovery + trust content" },
      { label: "Commerce Stack", value: "Stripe + state management" },
    ],
    github: "https://github.com/Aniket291104/cloth-couture",
    live: "https://cloth-couture-client.vercel.app",
    preview: {
      eyebrow: "E‑Commerce",
      title: "Curated Lookbook Store",
      caption: "Editorial product cards, confident branding, and frictionless cart/checkout.",
      accent: "from-amber-400 via-rose-400 to-fuchsia-500",
      theme: "commerce",
      primaryMetric: "Fast checkout",
      secondaryMetric: "Conversion lens",
      secondaryValue: "Browse → Buy",
      chartBars: [64, 92, 78, 85, 71, 88],
    },
    featuredLabel: "Revenue Journey",
  },
  {
    id: "fixify",
    title: "Fixify (Hackathon)",
    category: "Web",
    tagline: "Hackathon-built ops board that turns bug reports into triaged, owner-ready tasks within minutes.",
    problem:
      "In fast-moving teams, issues arrive scattered across chats and forms, leaving owners unclear and response times slow during hackathons or launches.",
    solution:
      "Fixify centralizes intake, auto-tags severity, assigns owners, and tracks SLA timers so teams can move from report to resolution without manual coordination.",
    impact:
      "Shows I can ship a working ops tool under time pressure: clear dashboards, real-time state, and guardrails that keep teams focused on the next fix.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "Zod"],
    features: [
      "Unified intake form with schema validation and file evidence",
      "Auto-prioritization by category and severity with color cues",
      "Owner assignment and SLA countdowns on a kanban-style board",
      "Live updates via Supabase channels for multi-user sessions",
    ],
    outcomes: [
      "Captures the ability to design for operations, not just UI polish.",
      "Demonstrates real-time collaboration patterns with minimal latency.",
      "Built under hackathon constraints—shipping discipline plus scope control.",
    ],
    impactMetrics: [
      { label: "Response Time", value: "Triage < 3 min" },
      { label: "Team Clarity", value: "Owner + SLA on card" },
      { label: "Shipping Signal", value: "Hackathon-ready build" },
    ],
    github: "https://github.com/vivekmaddy16/Zero2One_Vivek_Maddheshiya",
    live: "https://zero2-one-vivek-maddheshiya.vercel.app",
    preview: {
      eyebrow: "Ops Board",
      title: "Live Issue Triage",
      caption: "Severity-aware kanban with timers, owners, and intake guardrails.",
      accent: "from-cyan-400 via-sky-500 to-indigo-500",
      theme: "operations",
      primaryMetric: "Fast triage",
      secondaryMetric: "State sync",
      secondaryValue: "Real-time",
      chartBars: [58, 74, 83, 69, 91, 77],
    },
    featuredLabel: "Hackathon Build",
  },
  {
    id: "ai-disaster-prediction",
    title: "AI Disaster Prediction",
    category: "AI",
    tagline: "Geospatial risk forecasting that scores regions for floods and cyclones to aid early response planning.",
    problem:
      "Disaster teams often work with delayed or siloed signals, making it hard to pre-position resources before floods or storms escalate.",
    solution:
      "Built a pipeline that ingests weather, satellite, and historical event data, then surfaces a regional risk score with explainable factors for planners.",
    impact:
      "Positions ML as an operational tool: interpretable outputs, actionable thresholds, and a UI tuned for rapid decision-making under pressure.",
    stack: ["Python", "Pandas", "XGBoost", "GeoPandas", "Leaflet", "Flask"],
    features: [
      "Data cleaning + feature engineering for multi-source geospatial feeds",
      "XGBoost risk scoring with SHAP-style factor visibility",
      "Interactive map UI with zone heatmaps and alert thresholds",
      "API endpoints for integrating alerts into external dashboards",
    ],
    outcomes: [
      "Demonstrates applied AI that pairs accuracy with operational clarity.",
      "Shows comfort with geospatial visualization and performant mapping.",
      "Bridges ML outputs to planners via a simple, actionable interface.",
    ],
    impactMetrics: [
      { label: "Lead Time", value: "Early warning lens" },
      { label: "Interpretability", value: "Factor-level insights" },
      { label: "Deployment", value: "API + web map" },
    ],
    github: "",
    live: "",
    preview: {
      eyebrow: "AI Risk",
      title: "Regional Threat Map",
      caption: "Heatmapped risk scores with explainable factors for planners.",
      accent: "from-emerald-400 via-cyan-400 to-blue-600",
      theme: "analytics",
      primaryMetric: "Risk index",
      secondaryMetric: "Zones watched",
      secondaryValue: "Multi-region",
      chartBars: [72, 88, 66, 94, 77, 81],
    },
    featuredLabel: "Response Ready",
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/Aniket291104",
    href: personalInfo.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aniket-kumar-ab05a5326",
    href: personalInfo.linkedin,
  },
];
