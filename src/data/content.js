export const profile = {
  name: "Fahad Ali",
  role: "Software Developer",
  location: "Canada",
};

export const experience = [
  {
    id: "hcltech-meta",
    status: "active",
    statusLabel: "Current",
    title: "Junior Software Engineer",
    org: "HCLTech · on assignment at Meta",
    dates: "Jun 2025 — Present",
    bullets: [
      "Validate data-center AI GPU and server systems through automated stress testing, hardware/firmware debugging, failure analysis, and issue remediation before production deployment.",
      "File and triage hardware bug reports and vendor tickets, including root-cause analysis across dozens of validation hosts.",
      "Implement enhancements to a hardware test automation framework, improving test reliability across 100+ hosts.",
      "Serve as a point of contact for test operations — automated test execution, firmware debugging, failure analysis, and cross-functional coordination.",
    ],
    stats: [
      { label: "Hosts validated", value: "35+" },
      { label: "Bug reports filed", value: "60+" },
      { label: "Framework enhancements", value: "25+" },
      { label: "Fleet coverage", value: "100+ hosts" },
    ],
  },
  {
    id: "macewan-frontend",
    status: "complete",
    statusLabel: "Complete",
    title: "Front End Developer",
    org: "MacEwan University",
    dates: "Feb 2025 — May 2025",
    bullets: [
      "Migrated a legacy web application's front end from a Python-based stack to React and TypeScript, improving performance and maintainability.",
      "Implemented front-end integrations with backend APIs for reliable data exchange and improved responsiveness.",
    ],
  },
];

export const education = {
  school: "MacEwan University",
  degree: "Bachelor of Science, Computer Science",
  dates: "Jan 2020 — Dec 2024",
  coursework: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management",
    "Web Development",
    "Data Visualization",
    "Object-Oriented Programming",
  ],
};

export const skills = {
  "Languages & Frameworks": [
    "Python",
    "Node.js",
    "TypeScript",
    "SQL",
    "Java",
  ],
  "Tools & Platforms": [
    "Git",
    "CI/CD",
    "Docker",
    "AWS",
    "MongoDB",
    "Supabase",
    "Cursor",
    "Claude",
    "Antigravity",
    "Copilot",
  ],
  "Operating Systems": ["Windows", "MacOS", "Linux / UNIX / CentOS"],
};

export const featuredProjects = [
  {
    id: "youtubeAutomation",
    status: "active",
    statusLabel: "Active",
    title: "YouTube Content Automation System",
    dates: "Feb 2025 — Present",
    description:
      "An AI-powered long-form video generation platform that automates story writing, narration, visuals, and video compilation, with a multi-provider LLM pipeline (OpenAI, Anthropic, Gemini via OpenRouter) and a Remotion + AWS Lambda rendering pipeline.",
    bullets: [
      "Full-stack system: React/TypeScript frontend, Node.js/Express backend, with BullMQ/Redis job queues and Socket.io powering real-time, asynchronous video production.",
      "Integrates multi-provider TTS (ElevenLabs, Google Cloud), Supabase for data and auth, AWS S3/Lambda for storage and cloud rendering, and the YouTube Data API for publishing.",
    ],
    learned:
      "Orchestrating multi-provider LLM pipelines, building resilient async job queues, and rendering video in the cloud at scale.",
    skills: ["React", "TypeScript", "Node.js", "BullMQ", "Supabase", "AWS", "Remotion"],
    image: "story-stack.png",
    altText: "Logos of the stack behind the video pipeline: React, TypeScript, Node.js, Redis, Socket.io, Anthropic, Google Gemini, ElevenLabs, and YouTube",
  },
  {
    id: "personalServerProject",
    status: "active",
    statusLabel: "Active",
    title: "Personal Server Project",
    dates: "Ongoing",
    description:
      "A self-hosted Linux server running 25+ Dockerized services — a reverse proxy, a self-hosted Supabase stack, automated backups, and production hosting for personal projects.",
    bullets: [
      "Runs a self-hosted Supabase stack (Postgres, Auth, Storage, Realtime) alongside Docker services managed through Portainer.",
      "Nginx Proxy Manager handles reverse proxy and SSL; Vaultwarden and Syncthing round out the self-hosted toolset.",
    ],
    learned:
      "Docker networking and container orchestration, reverse proxy/SSL management, and running production database infrastructure myself.",
    skills: ["Linux", "Docker", "Portainer", "Nginx Proxy Manager", "Supabase", "Networking"],
    image: "homelab-stack.png",
    altText: "Logos of the self-hosted services running on the server: Docker, Portainer, Nginx Proxy Manager, Supabase, PostgreSQL, Redis, Vaultwarden, Syncthing, and Reactive Resume",
  },
];
