import React from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Flame, 
  Droplets, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/20">
                <PhoneCall className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  FlowVoice<span className="text-teal-400">.ai</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  HVAC &amp; Plumbing
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              The purpose-built AI voice receptionist for HVAC and plumbing contractors. 
              We answer every inbound call 24/7, triage emergency repair issues in real-time, 
              and schedule qualified appointments directly into your calendar.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>HVAC Triage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span>Plumbing Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>24/7/365</span>
              </div>
            </div>
          </div>

          {/* Solution Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="hover:text-teal-400 transition-colors">
                  24/7 After-Hours Call Answering
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-teal-400 transition-colors">
                  Smart Emergency Triage
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-teal-400 transition-colors">
                  Live Calendar Booking
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-teal-400 transition-colors">
                  Instant Audio &amp; Transcripts
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="hover:text-teal-400 transition-colors">
                  Missed Call ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-teal-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@[yourdomain].com?subject=FlowVoice%20AI%20Support" 
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal &amp; Trust
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-1">
                  Call Recording &amp; Consent Compliant
                </span>
              </li>
              <li>
                <span className="text-xs text-slate-500 block">
                  Enterprise-grade Data Encryption
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} [Company Name]. All rights reserved. Built for HVAC and Plumbing Service Contractors.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">&bull;</span>
            <a 
              href="mailto:support@[yourdomain].com" 
              className="hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>support@[yourdomain].com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
