"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DemoModalProvider, useDemoModal } from "@/context/DemoModalContext";

function MainContent({ children }: { children: React.ReactNode }) {
  const { openDemo } = useDemoModal();
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar onOpenDemo={openDemo} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DemoModalProvider>
      <MainContent>{children}</MainContent>
    </DemoModalProvider>
  );
}
