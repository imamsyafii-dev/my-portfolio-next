export type SkillGroup = {
  name: "Backend" | "Frontend" | "Data" | "Protocols" | "Infrastructure" | "Systems";
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  dates: string;
  context?: string;
  highlights: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  dates: string;
};

export type Language = {
  name: string;
  proficiency: string;
};

export type Profile = {
  identity: {
    name: string;
    title: string;
    email: string;
    location: string;
  };
  heroIntro: string;
  summary: string;
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  languages: Language[];
};

export const profile: Profile = {
  identity: {
    name: "Imam Syafii",
    title: "Senior Software Developer | Go, PHP, Laravel, ReactJS, NextJS",
    email: "imamsyafii.dev@gmail.com",
    location: "Tangerang, Indonesia",
  },
  heroIntro:
    "I build Go backend services and shared Rust client runtimes for cross-platform real-time products, with a focus on reliable APIs, data, and synchronization.",
  summary:
    "Senior Software Developer with 10+ years of software engineering experience. Currently developing Go backend services and Rust-based client runtimes for BBGE, a cross-platform real-time messaging application. Previously built e-commerce, payment, financial, and operational systems using PHP, Laravel, Node.js, React, and Vue. Experienced in API design, databases, real-time communication, system integration, and cross-platform troubleshooting.",
  skills: [
    {
      name: "Backend",
      skills: ["Go", "Rust", "PHP", "Laravel", "Yii", "Node.js", "Express.js"],
    },
    {
      name: "Frontend",
      skills: ["TypeScript", "JavaScript", "React", "React Native", "Vue", "Nuxt", "Tauri"],
    },
    {
      name: "Data",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQLC"],
    },
    {
      name: "Protocols",
      skills: ["REST", "WebSocket", "Protocol Buffers", "gRPC", "JSON-RPC", "FFI"],
    },
    {
      name: "Infrastructure",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
    },
    {
      name: "Systems",
      skills: ["WuKongIM", "LiveKit", "real-time messaging", "payment integrations"],
    },
  ],
  experience: [
    {
      role: "Backend Developer",
      company: "Citra International Digital",
      dates: "Sep 2024–Present",
      context:
        "BBGE — a cross-platform instant-messaging application with integrated digital-wallet capabilities, spanning server and client runtime work.",
      highlights: [
        "Develop and maintain Go backend services and a shared Rust client runtime used across desktop and mobile applications.",
        "Design and maintain client-server contracts using Protocol Buffers, HTTP APIs, WebSockets, PostgreSQL, SQLite, and SQLC-generated data access.",
        "Extend the Rust runtime through FFI for mobile clients and Tauri commands for desktop while resolving cross-platform synchronization and data-consistency issues.",
        "Integrate and troubleshoot WuKongIM and LiveKit, with selected contributions across sessions, group chat and mentions, contact lifecycle, notifications, calling, and live-channel state.",
      ],
    },
    {
      role: "Senior Programmer",
      company: "IMPORTIR.ORG",
      dates: "Jan 2018–Aug 2024",
      context: "Import services, e-commerce, seminar operations, and internal financial systems.",
      highlights: [
        "Built a seminar platform covering public registration, administrative attendance management, Google Calendar scheduling, Zoom integration, and participant notifications.",
        "Developed IMPORTIR.COM for Alibaba product discovery, order administration, and delivery tracking, and integrated 1688 product, ordering, and payment APIs.",
        "Integrated Midtrans, Xendit, and Stripe payments and built ANGGARAN for vendor payments and expense tracking with Flip disbursements.",
        "Automated accounting records and BCA transaction retrieval through scheduled jobs, and implemented bulk email, SMS, and WhatsApp notifications.",
      ],
    },
    {
      role: "Full-stack Developer",
      company: "Ebizu",
      dates: "Jul 2017–Jan 2018",
      highlights: [
        "Maintained and debugged an administrative application supporting receipt-based transaction processing.",
        "Developed a module for identifying potentially fraudulent transaction data.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Golden Rama",
      dates: "Jan 2017–Jun 2017",
      highlights: [
        "Integrated an external API providing real-time flight scheduling information.",
        "Developed backend APIs for hotel registration workflows.",
      ],
    },
    {
      role: "Programmer",
      company: "MNC Cable Mediacom",
      dates: "Jan 2016–Dec 2016",
      highlights: [
        "Built an administrative application from the ground up to display and manage internet subscriber information.",
        "Developed the application using PHP, Yii, and MySQL.",
      ],
    },
  ],
  education: [
    {
      qualification: "Bachelor of Computer Science",
      institution: "Diponegoro University",
      dates: "Jun 2011–Nov 2016",
    },
    {
      qualification: "Natural Sciences",
      institution: "SMA Negeri 2 Pemalang",
      dates: "Jun 2007–Jul 2010",
    },
  ],
  languages: [
    { name: "Indonesian", proficiency: "Native" },
    { name: "English", proficiency: "Intermediate" },
  ],
};
