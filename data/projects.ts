export const projectCategories = ["All", "Platform", "Integration", "Feature"] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = Exclude<ProjectCategory, "All">;

export type Project = {
  id: string;
  title: string;
  category: ProjectFilter;
  description: string;
  image: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  };
  href?: string;
};

export const projects: Project[] = [
  {
    id: "im-chat-platform",
    title: "IM Chat Platform",
    category: "Platform",
    description: "IM Chat platform",
    image: { src: "/images/projects/im-chat.png", alt: "IM Chat platform interface shown on desktop", fit: "contain" },
  },
  {
    id: "sportdev-api",
    title: "The SportDev API",
    category: "Feature",
    description: "The Result Data",
    image: { src: "/images/projects/sportdev-data.png", alt: "SportDev API result data interface", fit: "contain" },
  },
  {
    id: "importir-com",
    title: "IMPORTIR.COM",
    category: "Platform",
    description: "Global marketplace platform",
    image: { src: "/images/projects/importir-com.png", alt: "IMPORTIR.COM global marketplace homepage" },
    href: "https://importir.com",
  },
  {
    id: "email-notification",
    title: "Email",
    category: "Integration",
    description: "Notification by Email",
    image: { src: "/images/projects/email.png", alt: "Email notification integration interface", fit: "contain" },
  },
  {
    id: "buy-cbm",
    title: "Buy CBM",
    category: "Feature",
    description: "CBM Balance",
    image: { src: "/images/projects/buy-cbm.png", alt: "CBM balance purchase feature interface" },
  },
  {
    id: "importir-org",
    title: "IMPORTIR.ORG",
    category: "Platform",
    description: "Seminar Platform",
    image: { src: "/images/projects/importir-org.png", alt: "IMPORTIR.ORG seminar platform homepage" },
    href: "https://importir.org",
  },
  {
    id: "sms-notification",
    title: "Sms",
    category: "Integration",
    description: "Notification by SMS",
    image: { src: "/images/projects/sms.png", alt: "SMS notification integration result", fit: "contain" },
  },
  {
    id: "calculator",
    title: "Calculator",
    category: "Feature",
    description: "Pricing Estimation",
    image: { src: "/images/projects/calculator.png", alt: "Product pricing estimation calculator" },
  },
  {
    id: "anggaran",
    title: "ANGGARAN",
    category: "Platform",
    description: "Money Out Platform",
    image: { src: "/images/projects/anggaran.png", alt: "ANGGARAN money-out management platform" },
  },
  {
    id: "whatsapp-notification",
    title: "Whatsapp",
    category: "Integration",
    description: "Notification by Whatsapp",
    image: { src: "/images/projects/whatsapp.png", alt: "WhatsApp notification integration result", fit: "contain" },
  },
  {
    id: "consultation-form",
    title: "Consultation Form",
    category: "Feature",
    description: "Set Schedule Meeting",
    image: { src: "/images/projects/consultation-form.png", alt: "Consultation meeting scheduling form" },
  },
  {
    id: "academy",
    title: "ACADEMY",
    category: "Platform",
    description: "Learning Management System",
    image: { src: "/images/projects/academy.png", alt: "ACADEMY learning management system dashboard" },
  },
  {
    id: "xendit-payment",
    title: "Xendit",
    category: "Integration",
    description: "Payment Gateway",
    image: { src: "/images/projects/xendit.png", alt: "Xendit payment gateway integration interface" },
  },
  {
    id: "news",
    title: "News",
    category: "Feature",
    description: "Public Information/Announcement",
    image: { src: "/images/projects/news.png", alt: "Public news and announcement feature" },
  },
  {
    id: "shipping-form",
    title: "Shipping Form",
    category: "Feature",
    description: "Requesting Goods Import/Export",
    image: { src: "/images/projects/shipping-form.png", alt: "Goods import and export shipping request form" },
  },
  {
    id: "mticket-asia",
    title: "MTICKET.ASIA",
    category: "Platform",
    description: "Ticketing System",
    image: { src: "/images/projects/mticket-asia.png", alt: "MTICKET.ASIA event ticketing system" },
  },
  {
    id: "midtrans-payment",
    title: "Midtrans",
    category: "Integration",
    description: "Payment Gateway",
    image: { src: "/images/projects/midtrans.png", alt: "Midtrans payment gateway integration interface" },
  },
  {
    id: "accounting",
    title: "Accounting",
    category: "Platform",
    description: "Centralized Financial Management",
    image: { src: "/images/projects/accounting.png", alt: "Centralized accounting and financial management platform" },
  },
  {
    id: "stripe-payment",
    title: "Stripe",
    category: "Integration",
    description: "Payment Gateway",
    image: { src: "/images/projects/stripe.png", alt: "Stripe payment gateway integration interface" },
  },
];
