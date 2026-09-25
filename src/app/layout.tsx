import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FlowVoice AI | 24/7 AI Voice Receptionist for HVAC & Plumbing Contractors",
  description:
    "Never miss another service call. FlowVoice AI answers 24/7, triages HVAC & plumbing emergencies in seconds, and schedules appointments directly into your calendar.",
  keywords: [
    "HVAC voice assistant",
    "Plumbing receptionist",
    "AI voice dispatcher",
    "24/7 contractor answering service",
    "automated appointment booking",
    "service contractor software",
  ],
  authors: [{ name: "FlowVoice AI" }],
  openGraph: {
    title: "FlowVoice AI | Never Miss Another Service Call",
    description:
      "The AI Voice Receptionist built specifically for HVAC and Plumbing contractors. Answers 24/7, triages issues, and books appointments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
