import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imam Syafi'i — Full-stack & Backend Engineer",
  description: "Portfolio of Imam Syafi'i, a full-stack and backend engineer in Tangerang, Indonesia, working with Go, PHP, Laravel, Node.js, Vue, and React.",
  openGraph: {
    title: "Imam Syafi'i — Full-stack & Backend Engineer",
    description: "Selected platform, API integration, and web application work by Imam Syafi'i.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
