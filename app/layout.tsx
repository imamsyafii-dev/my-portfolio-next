import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imam Syafii — Backend Developer | Go, Rust & Real-Time Systems",
  description:
    "Portfolio of Imam Syafii, a backend developer with 10+ years of software engineering experience across Go, Rust, real-time systems, APIs, data, and cross-platform applications.",
  openGraph: {
    title: "Imam Syafii — Backend Developer | Go, Rust & Real-Time Systems",
    description:
      "Backend engineering, real-time communication, system integration, and cross-platform work by Imam Syafii.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
 