export const projectCategories = ["All", "Platform", "Backend", "Integration", "Feature"] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = Exclude<ProjectCategory, "All">;

type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

type ProjectMedia =
  | {
      mediaType?: "image";
      image: ProjectImage;
      video?: never;
      images?: never;
    }
  | {
      mediaType: "video";
      video: {
        src: string;
        type: "video/mp4";
        poster: string;
        label: string;
      };
      image?: never;
      images?: never;
    }
  | {
      mediaType: "image-pair";
      images: readonly [ProjectImage, ProjectImage];
      image?: never;
      video?: never;
    };

export type Project = {
  id: string;
  title: string;
  category: ProjectFilter;
  description: string;
  href?: string;
} & ProjectMedia;

export const projects: Project[] = [
  {
    id: "bbge-desktop",
    title: "BBGE Desktop",
    category: "Platform",
    description: "Cross-platform desktop messaging with real-time chat, group conversations, calls, and synchronized state.",
    image: {
      src: "/images/projects/bbge-desktop-sanitized.png",
      alt: "BBGE Desktop real-time group chat interface",
      fit: "contain",
    },
  },
  {
    id: "hide-recovery-phrase",
    title: "Hide Recovery Phrase",
    category: "Backend",
    description: "Hide recovery phrase backup feature after completion across devices",
    mediaType: "video",
    video: {
      src: "/images/projects/bbge-hide-recovery-sanitized.mp4",
      type: "video/mp4",
      poster: "/images/projects/bbge-hide-recovery-poster-sanitized.png",
      label: "BBGE recovery phrase backup state synchronized across devices",
    },
  },
  {
    id: "delete-account-synchronize",
    title: "Delete Account Synchronize",
    category: "Backend",
    description: "Handle Deleted Accounts in Groups, Chats, and Search",
    mediaType: "image-pair",
    images: [
      {
        src: "/images/projects/bbge-sync-delete-account-group-sanitized.png",
        alt: "Deleted account identity shown consistently in a BBGE group conversation",
        fit: "contain",
      },
      {
        src: "/images/projects/bbge-sync-delete-account-chat-sanitized.png",
        alt: "Deleted account identity shown consistently in a BBGE direct conversation",
        fit: "contain",
      },
    ],
  },
  {
    id: "bbge-device-management",
    title: "BBGE Device Management",
    category: "Feature",
    description: "Account security controls for reviewing signed-in devices, identifying the current session, and revoking access.",
    image: {
      src: "/images/projects/bbge-device-management-sanitized.png",
      alt: "BBGE device management screen showing the current signed-in device",
      fit: "contain",
    },
  },
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
    image: { src: "/images/projects/sportdev-data-sanitized.png", alt: "SportDev API result data interface", fit: "contain" },
  },
  {
    id: "importir-com",
    title: "IMPORTIR.COM",
    category: "Platform",
    description: "E-commerce platform for Alibaba product discovery, order administration, and delivery tracking.",
    image: { src: "/images/projects/importir-com.png", alt: "IMPORTIR.COM global marketplace homepage" },
    href: "https://importir.com",
  },
  {
    id: "email-notification",
    title: "Email",
    category: "Integration",
    description: "Bulk email notifications across seminar and commerce workflows.",
    image: { src: "/images/projects/email-sanitized.png", alt: "Email notification integration interface", fit: "contain" },
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
    description: "Seminar platform for registration, attendance, scheduling, Zoom, and participant notifications.",
    image: { src: "/images/projects/importir-org.png", alt: "IMPORTIR.ORG seminar platform homepage" },
    href: "https://importir.org",
  },
  {
    id: "sms-notification",
    title: "Sms",
    category: "Integration",
    description: "Bulk SMS notifications across seminar and commerce workflows.",
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
    description: "Internal vendor payments and expense tracking with automated Flip disbursements.",
    image: { src: "/images/projects/anggaran-sanitized.png", alt: "ANGGARAN money-out management platform" },
  },
  {
    id: "whatsapp-notification",
    title: "Whatsapp",
    category: "Integration",
    description: "Bulk WhatsApp notifications across seminar and commerce workflows.",
    image: { src: "/images/projects/whatsapp-sanitized.png", alt: "WhatsApp notification integration result", fit: "contain" },
  },
  {
    id: "consultation-form",
    title: "Consultation Form",
    category: "Feature",
    description: "Set Schedule Meeting",
    image: { src: "/images/projects/consultation-form-sanitized.png", alt: "Consultation meeting scheduling form" },
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
    description: "Payment integration for seminar and commerce workflows.",
    image: { src: "/images/projects/xendit-sanitized.png", alt: "Xendit payment gateway integration interface" },
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
    description: "Payment integration for seminar and commerce workflows.",
    image: { src: "/images/projects/midtrans-sanitized.png", alt: "Midtrans payment gateway integration interface" },
  },
  {
    id: "accounting",
    title: "Accounting",
    category: "Platform",
    description: "Automated accounting records with scheduled BCA transaction retrieval and display, plus manual-entry support.",
    image: { src: "/images/projects/accounting.png", alt: "Centralized accounting and financial management platform" },
  },
  {
    id: "stripe-payment",
    title: "Stripe",
    category: "Integration",
    description: "Payment integration for seminar and commerce workflows.",
    image: { src: "/images/projects/stripe-sanitized.png", alt: "Stripe payment gateway integration interface" },
  },
];
