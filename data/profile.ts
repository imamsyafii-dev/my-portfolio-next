export type SkillGroup = {
  name: string;
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
    title: "Senior Software Engineer | Backend & Full-Stack Development",
    email: "imamsyafii.dev@gmail.com",
    location: "Tangerang, Indonesia",
  },
  heroIntro:
    "I build backend systems, web applications, and enterprise solutions that connect real-time products, business operations, and reliable data.",
  summary:
    "Senior Software Engineer with 10+ years of experience developing backend systems, web applications, and enterprise business solutions. Skilled in Go, PHP, Laravel, Java, React, Next.js, PostgreSQL, and REST API development. Experienced in e-commerce, payment gateway integration, financial systems, real-time messaging, and third-party API integration. Proficient in debugging, system integration, database design, and AI-assisted software development.",
  skills: [
    {
      name: "Programming Languages",
      skills: ["PHP", "Go", "Java", "JavaScript", "TypeScript"],
    },
    {
      name: "Backend Development",
      skills: ["Laravel", "Yii", "Node.js", "Express.js", "REST APIs", "WebSockets", "Protocol Buffers"],
    },
    {
      name: "AI-Native Development",
      skills: ["OpenAI Codex", "AI coding agents", "Sub-agents", "Reusable agent skills", "AI-assisted code review", "Requirement analysis", "Debugging"],
    },
    {
      name: "Frontend Development",
      skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js"],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle Database"],
    },
    {
      name: "Version Control",
      skills: ["Git", "SVN (Apache Subversion)"],
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
    },
    {
      name: "Integrations",
      skills: ["Payment gateways", "Third-party APIs"],
    },
    {
      name: "Domain Expertise",
      skills: ["E-commerce systems", "Financial systems", "Real-time messaging"],
    },
  ],
  experience: [
    {
      role: "Software Engineer – Backend & Systems Engineering",
      company: "Citra International Digital",
      dates: "Sep 2024–Oct 2026",
      context:
        "BBGE — a cross-platform instant-messaging application with integrated digital-wallet capabilities, spanning server and client runtime work.",
      highlights: [
        "Developed and maintained Go backend services for messaging, authentication, account sessions, device management, contacts, groups, notifications, online presence, and voice/video communication.",
        "Integrated WuKongIM and LiveKit to support real-time messaging and communication features.",
        "Investigated and resolved data synchronization, concurrency, and consistency issues across backend services and client applications.",
        "Developed API contracts and database interactions using PostgreSQL, SQLite, Protocol Buffers, and WebSockets.",
        "Used Docker, Kubernetes, and CI/CD workflows to support development, testing, and deployment.",
      ],
    },
    {
      role: "Senior Software Engineer – Full-Stack & Business Systems",
      company: "IMPORTIR.ORG",
      dates: "Jan 2018–Aug 2024",
      context: "Tangerang — e-commerce, financial operations, and seminar management platforms.",
      highlights: [
        "Developed and maintained IMPORTIR.COM, ANGGARAN.COM, and IMPORTIR.ORG across e-commerce, financial operations, and seminar management.",
        "Built a seminar management platform handling approximately 100–200 new registrations daily, with an estimated 70% paid registrations.",
        "Integrated Midtrans, Xendit, and Stripe payment gateways across e-commerce and seminar platforms.",
        "Integrated BCA banking APIs for direct transaction retrieval in the internal finance panel and Flip API for initiating bank transfers from ANGGARAN.COM.",
        "Integrated Alibaba and 1688 APIs for product information, ordering, and payment workflows.",
        "Developed automated accounting workflows and notification services for email, SMS, and WhatsApp.",
      ],
    },
    {
      role: "Software Engineer – Full-Stack & Fraud Detection Systems",
      company: "EBIZU | Manis – Receipt-Based Loyalty & Rewards Platform",
      dates: "Jul 2017–Jan 2018",
      highlights: [
        "Maintained and enhanced backend and administrative applications for receipt-based loyalty and rewards workflows.",
        "Developed workflows for reviewing, validating, and approving purchase receipts before reward points were credited.",
        "Built fraud-detection and data-integrity checks for duplicate submissions and suspicious transaction data.",
        "Used MySQL for transactional data and MongoDB for application logging and activity records.",
      ],
    },
    {
      role: "Software Engineer – Backend & Travel Booking Integration",
      company: "GOLDEN RAMA | Travel & Tourism Platform",
      dates: "Jan 2017–Jul 2017",
      highlights: [
        "Developed and maintained PHP/Yii backend applications supporting travel booking and reservation operations.",
        "Integrated third-party travel APIs for flight schedules, availability, pricing, and booking transactions.",
        "Developed APIs for end-to-end flight, hotel, and ferry booking workflows and synchronized reservation data with external providers.",
      ],
    },
    {
      role: "Software Engineer – Backend & Middleware Integration",
      company: "PT MNC Kabel Mediacom | MNC Play",
      dates: "Jan 2016–Dec 2016",
      highlights: [
        "Developed and maintained web-based administrative applications for subscriber management and operational workflows.",
        "Contributed to a multi-channel Reminder System supporting SMS, email, TVMS, and scheduled notifications.",
        "Authored the ECO-REMINDER API Specification v2.0 for billing integration, messaging, and template management.",
        "Worked with Oracle Database and Java-based middleware integrations for internal business applications.",
      ],
    },
  ],
  education: [
    {
      qualification: "Bachelor of Computer Science (GPA: 3.25/4.00)",
      institution: "Diponegoro University",
      dates: "2011–2015",
    },
  ],
  languages: [],
};
