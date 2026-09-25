"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Cpu, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Flame, 
  Droplets, 
  Calendar, 
  CheckCircle2, 
  Users, 
  ArrowRight,
  Headphones,
  Award,
  Layers,
  MessageSquare
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function AboutPage() {
  const { openDemo } = useDemoModal();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      
      {/* Hero / Mission Statement Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Our Mission &amp; Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Helping Local Service Contractors Save Time &amp;{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Capture More Revenue.
            </span>
          </h1>

          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-left max-w-3xl mx-auto shadow-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
              Our Core Mission
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
              &ldquo;HVAC technicians and plumbers are the backbone of our communities, keeping homes safe, warm in the winter, and cool in the summer. Yet too many hardworking trade business owners lose thousands of dollars each month simply because they cannot answer the phone while holding a pipe wrench or balancing on an attic rafter.&rdquo;
            </p>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              We built FlowVoice AI to eliminate missed revenue forever. By pairing state-of-the-art conversational voice intelligence with deep trade knowledge, we give independent contractors and growing service fleets an untiring, world-class front office receptionist that answers 24/7, triages emergencies, and books jobs on the spot.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem & Why Trades Need Dedicated AI */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Generic Answering Services Fail Contractors
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              HVAC and plumbing have unique diagnostic vocabularies and urgent dispatch windows that generic virtual receptionists cannot navigate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High Emergency Urgency</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                When a water main bursts or a heat pump dies during a freeze, homeowners won&apos;t wait for a callback. They immediately hang up and call your competitor. FlowVoice captures them within 2 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Complex Trade Terminology</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our model knows the difference between a capacitor replacement and a cracked heat exchanger. It understands tonnage, refrigerant types, tankless vs storage water heaters, and cleanouts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Dispatch Scheduling</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Traditional call centers take clumsy handwritten notes that result in 3 rounds of phone tag. FlowVoice checks your live calendar buffer rules and commits the appointment during the first call.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How The Technology Works Section */}
      <section className="py-20 sm:py-28 bg-slate-900/60 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Next-Generation Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How the Technology Works
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Behind FlowVoice AI is an ultra-low latency voice pipeline engineered specifically for high-reliability telephony and trade dispatching.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sub-500ms Voice Synthesis &amp; Streaming</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    We deploy ultra-fast full-duplex neural voice models. When a customer speaks, our pipeline transcribes, reasons, and streams back natural voice audio in under 500 milliseconds—eliminating awkward robotic delays.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Proprietary HVAC &amp; Plumbing Diagnostic Graph</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Our reasoning engine is trained on thousands of real-world contractor dispatch logs. It knows what qualifying questions to ask: system age, gas vs electric, active leaks, breaker status, and filter conditions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Live Calendar &amp; Dispatch Board Synchronization</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Through direct API webhooks with Google Calendar, Microsoft Outlook, and trade CRMs, our AI queries real-time technician availability, applies travel buffers, and writes the booking instantly.
                  </p>
                </div>
              </div>

            </div>

            {/* Architecture Card */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-teal-500/30 relative shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>FlowVoice Voice Telephony Engine</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Status: Operational (99.99%)
                </span>
              </div>

              <div className="mt-6 space-y-4 font-mono text-xs">
                
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-teal-400 font-bold mb-1">01. INBOUND SIP TELEPHONY</div>
                  <div>Carrier-grade SIP trunking &bull; WebRTC sub-second audio routing</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-cyan-400 font-bold mb-1">02. NEURAL SPEECH-TO-INTENT</div>
                  <div>Whisper-grade streaming transcription &bull; HVAC/Plumbing ontology parsing</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-orange-400 font-bold mb-1">03. TRIAGE &amp; SAFETY RESOLVER</div>
                  <div>Emergency classification &bull; Water shutoff / furnace danger protocols</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-emerald-400 font-bold mb-1">04. CALENDAR SCHEDULER &amp; DISPATCH SMS</div>
                  <div>Google Calendar API integration &bull; SMS confirmation to customer &amp; technician</div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>SOC 2 Type II Aligned</span>
                <span>End-to-End TLS Encryption</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Simple Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 mx-auto flex items-center justify-center">
              <Mail className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get In Touch With Our Team
              </h2>
              <p className="text-sm text-slate-400 max-w-lg mx-auto">
                Have questions about setting up FlowVoice for your HVAC or plumbing business, custom CRM integrations, or volume pricing?
              </p>
            </div>

            {/* Placeholder Email Requirement */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-teal-500/30 max-w-md mx-auto space-y-3">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Official Support &amp; Inquiries
              </div>
              <a 
                href="mailto:support@[yourdomain].com?subject=Inquiry%20from%20Website"
                className="text-xl sm:text-2xl font-mono font-bold text-teal-300 hover:text-teal-200 transition-colors inline-block"
              >
                support@[yourdomain].com
              </a>
              <p className="text-xs text-slate-400">
                Our support team responds to contractor inquiries in less than 2 business hours.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Book a Guided Demo</span>
              </button>

              <a
                href="mailto:support@[yourdomain].com?subject=Contractor%20Setup%20Question"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>Email Support Team</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
