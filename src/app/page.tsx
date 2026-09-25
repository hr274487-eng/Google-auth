"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Sparkles, 
  Clock, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  Flame, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  PhoneIncoming, 
  Wrench, 
  Zap, 
  Users, 
  Star, 
  ChevronRight,
  Headphones,
  Check,
  Building,
  Volume2
} from "lucide-react";
import CallSimulator from "@/components/CallSimulator";
import RoiCalculator from "@/components/RoiCalculator";
import { useDemoModal } from "@/context/DemoModalContext";

export default function HomePage() {
  const { openDemo } = useDemoModal();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 bg-grid-pattern">
        {/* Glow Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>AI Voice Receptionist Specially Engineered for HVAC &amp; Plumbing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] sm:leading-[1.1]">
              Never Miss Another{" "}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Service Call.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Our human-sounding AI answers inbound calls <strong>24/7</strong>, triages urgent HVAC &amp; plumbing issues in seconds, and books scheduled appointments directly into your calendar. Stop losing high-ticket emergency jobs to voicemail while you’re out on the truck.
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <button
                onClick={openDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-xl shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="mailto:support@[yourdomain].com?subject=FlowVoice%20AI%20Demo%20Request"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-teal-400" />
                <span>Email Us: support@[yourdomain].com</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1">Inbound Calls Answered</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">&lt; 2 Sec</div>
                <div className="text-xs text-slate-400 mt-1">Instant Voice Pickup</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">24/7/365</div>
                <div className="text-xs text-slate-400 mt-1">Nights, Weekends &amp; Holidays</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">$550+</div>
                <div className="text-xs text-slate-400 mt-1">Avg Service Ticket Rescued</div>
              </div>
            </div>

          </div>

          {/* Interactive Live Voice Call Simulation */}
          <div className="mt-16 sm:mt-20">
            <CallSimulator />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOW IT WORKS SECTION */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Simple 3-Step Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How FlowVoice AI Works
            </h2>
            <p className="mt-3 text-base text-slate-400">
              No complicated equipment. Simply forward your phone lines or use our dedicated local number, and our voice agent takes over.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-teal-500/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <PhoneIncoming className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-black text-slate-700 group-hover:text-teal-400 transition-colors">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">1. Call Comes In</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A homeowner calls your business line during peak hours, when your techs are driving, or at 2:00 AM on Sunday. The call is picked up immediately—never hearing a busy tone or voicemail.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-400" />
                <span>Zero wait time &bull; Unlimited concurrent calls</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-teal-500/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-black text-slate-700 group-hover:text-cyan-400 transition-colors">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">2. AI Answers &amp; Triages</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our natural, empathetic voice receptionist diagnoses the homeowner&apos;s issue using HVAC &amp; plumbing logic. It identifies whether it&apos;s an urgent furnace failure, water heater leak, or seasonal inspection.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Captures name, address &amp; urgency level</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-teal-500/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-black text-slate-700 group-hover:text-orange-400 transition-colors">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">3. Appointment Is Booked</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The AI references your live booking slots, books the service job directly into your Google Calendar or field management CRM, and dispatches SMS alerts to your on-call technician.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-orange-400" />
                <span>Instant customer SMS confirmation</span>
              </div>
            </div>

          </div>

          {/* Quick CTA inside How It Works */}
          <div className="mt-12 text-center">
            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 transition-all"
            >
              <span>Want to see our booking workflow in real-time?</span>
              <span className="text-teal-400 font-bold underline">Book a Demo</span>
              <ChevronRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURES SECTION */}
      {/* ========================================================================= */}
      <section id="features" className="py-20 sm:py-28 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Tailored for the Trades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Key Features Designed for HVAC &amp; Plumbing
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Generic answering services know nothing about SEER ratings, gas line shutoffs, or main sewer cleanouts. FlowVoice AI is built natively for home service contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Feature 1: 24/7 Availability */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  24/7 Availability &amp; Multi-Line Answering
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Freezing winter nights and 100°F summer days cause sudden call spikes. FlowVoice never sleeps, never takes sick days, and handles 10 callers simultaneously without putting anyone on hold.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Captures late-night emergency heating and burst pipe repairs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Eliminates expensive after-hours call center fees ($2 - $4 per minute)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Answers when you&apos;re underneath a sink or up in an attic</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2: Smart Triage */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Smart Emergency Triage Logic
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Our AI is trained on trade-specific ontologies. It accurately distinguishes between routine maintenance inquiries and true catastrophic emergencies that require immediate dispatch.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>Guides panicking homeowners to shut off main water valves during leaks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>Flags carbon monoxide alarms, gas odors, or severe water damage risks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>Prioritizes dispatch routes based on repair urgency and service zones</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Calendar Integration */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Seamless Calendar &amp; CRM Integration
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  No more phone tag. The AI reads your live availability and books appointments directly into your business calendar with custom buffer times to account for technician travel and traffic.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Direct two-way sync with Google Calendar &amp; Microsoft Outlook</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Prevents double-booking and respects geographic service zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Ready for ServiceTitan, Jobber, and Housecall Pro dispatch workflows</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4: Call Transcripts */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Instant Audio Recordings &amp; AI Transcripts
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Within seconds of hanging up, you and your technicians receive an SMS and email notification with an executive summary, complete word-for-word transcript, and full audio playback.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Extracted customer phone, street address, equipment age, and issue summary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>1-click listen to caller audio from your mobile phone on the job</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Compliant call recording disclosures automatically announced to callers</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE ROI CALCULATOR SECTION */}
      {/* ========================================================================= */}
      <section id="roi-calculator" className="py-20 sm:py-28 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator onOpenDemo={openDemo} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTRACTOR SOCIAL PROOF / TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trusted by Leading Service Contractors
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              See what business owners say about capturing every after-hours call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;Last July during our hottest week, my phone was ringing every 3 minutes while I was on a roof. FlowVoice booked 19 emergency AC calls that weekend alone. That was over $14,000 in revenue that would have gone to voicemail.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center font-bold text-teal-300">
                  TR
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Tom Reynolds</div>
                  <div className="text-xs text-slate-400">Apex Heating &amp; Air (5 Trucks)</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;The plumbing triage is shockingly good. When a customer called with water pouring through their ceiling, FlowVoice calmly told them how to shut off the main valve and booked my on-call plumber for 7:00 AM.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-300">
                  DL
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Dan Lewis</div>
                  <div className="text-xs text-slate-400">ClearFlow Plumbing &amp; Drains</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;We replaced an offshore answering service that constantly misspelled addresses and misdiagnosed heat pump issues. FlowVoice connects directly to our Google Calendar and pays for itself on day two.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center font-bold text-orange-300">
                  MC
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Marcus Campbell</div>
                  <div className="text-xs text-slate-400">Campbell Climate &amp; Mechanical</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CALL TO ACTION (BOOK A DEMO) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Zero Missed Calls?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Stop Losing Service Revenue Today.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Book a 15-minute live demonstration. We’ll show you how FlowVoice answers your phone with your custom business greetings, diagnoses HVAC &amp; plumbing issues, and books directly into your calendar.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-xl shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Book a Demo</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:support@[yourdomain].com?subject=FlowVoice%20AI%20Contractor%20Inquiry"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Support: support@[yourdomain].com</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            No long-term contracts &bull; 14-day risk-free trial &bull; Ready in 10 minutes
          </p>
        </div>
      </section>

    </div>
  );
}
