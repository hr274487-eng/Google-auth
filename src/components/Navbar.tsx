"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PhoneCall, 
  Menu, 
  X, 
  Sparkles, 
  Flame, 
  Droplets,
  Calendar,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const handleDemoClick = (e: React.MouseEvent) => {
    if (onOpenDemo) {
      e.preventDefault();
      onOpenDemo();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform duration-200">
              <PhoneCall className="w-5 h-5 text-white" />
              <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 border border-slate-700">
                <Flame className="w-3 h-3 text-orange-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors">
                  FlowVoice<span className="text-teal-400">.ai</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  HVAC &amp; Plumbing
                </span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:block font-medium">
                24/7 AI Voice Dispatch &amp; Scheduling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-teal-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="mailto:support@[yourdomain].com?subject=Inquiry%20about%20FlowVoice%20AI"
              className="text-xs text-slate-400 hover:text-slate-200 font-medium transition-colors hidden xl:inline"
            >
              support@[yourdomain].com
            </a>
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 shadow-md shadow-teal-500/20 active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book a Demo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={handleDemoClick}
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500"
            >
              Book Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-teal-500/10 text-teal-400 font-semibold"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleDemoClick(e);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-md shadow-teal-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book a Demo</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
            <div className="text-center">
              <span className="text-xs text-slate-400">
                Support: <span className="text-slate-300">support@[yourdomain].com</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
