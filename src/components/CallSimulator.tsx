"use client";
import React, { useState } from "react";
import { 
  PhoneCall, 
  Flame, 
  Droplets, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Volume2, 
  Sparkles, 
  Check, 
  MessageSquare,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  category: "HVAC" | "Plumbing";
  customerName: string;
  customerIssue: string;
  triagePriority: "Emergency" | "Urgent" | "Standard";
  priorityColor: string;
  bookedSlot: string;
  conversation: {
    speaker: "Caller" | "FlowVoice AI";
    text: string;
    timestamp: string;
  }[];
  extractedDetails: {
    serviceType: string;
    address: string;
    equipment: string;
    urgencyReason: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "hvac-emergency",
    title: "AC Failure in 94°F Heat",
    category: "HVAC",
    customerName: "Sarah Jenkins",
    customerIssue: "AC blowing hot air and ceiling vent dripping",
    triagePriority: "Emergency",
    priorityColor: "bg-red-500/20 text-red-400 border-red-500/30",
    bookedSlot: "Today @ 2:30 PM (Priority Tech Slot)",
    conversation: [
      {
        speaker: "FlowVoice AI",
        text: "Thanks for calling Apex Heating & Air! This is our 24/7 service assistant. How can we help you today?",
        timestamp: "0:02"
      },
      {
        speaker: "Caller",
        text: "Hi, our AC unit is blowing warm air and there is water dripping from the hallway ceiling vent! It is over 90 degrees inside.",
        timestamp: "0:07"
      },
      {
        speaker: "FlowVoice AI",
        text: "I understand how urgent that is, Sarah. Water near ceiling drywall and extreme heat is an immediate priority. Please turn off the system now to prevent ceiling damage. What is your street address?",
        timestamp: "0:13"
      },
      {
        speaker: "Caller",
        text: "I just switched it off. I'm at 742 Evergreen Terrace.",
        timestamp: "0:19"
      },
      {
        speaker: "FlowVoice AI",
        text: "Got it, 742 Evergreen Terrace. I have an emergency dispatch slot available today at 2:30 PM with our senior AC specialist. Would that work?",
        timestamp: "0:25"
      },
      {
        speaker: "Caller",
        text: "Yes, please! 2:30 PM is perfect.",
        timestamp: "0:28"
      },
      {
        speaker: "FlowVoice AI",
        text: "You are all set for 2:30 PM today. I've synced this to our technician's calendar and sent an SMS confirmation to your phone. Stay cool, help is on the way!",
        timestamp: "0:34"
      }
    ],
    extractedDetails: {
      serviceType: "Emergency Cooling & Drain Overflow",
      address: "742 Evergreen Terrace",
      equipment: "Central Air Split System",
      urgencyReason: "Active ceiling drip + indoor temp 90°F+"
    }
  },
  {
    id: "plumbing-burst",
    title: "Main Water Line Leak",
    category: "Plumbing",
    customerName: "Robert Miller",
    customerIssue: "Basement pipe ruptured near water meter",
    triagePriority: "Emergency",
    priorityColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    bookedSlot: "Today @ 11:15 AM (Emergency On-Call)",
    conversation: [
      {
        speaker: "FlowVoice AI",
        text: "Thank you for calling BlueWave Plumbing 24/7 Dispatch. How can we assist you?",
        timestamp: "0:02"
      },
      {
        speaker: "Caller",
        text: "Hello! A water pipe just burst in my basement near the shutoff and water is gushing across the floor!",
        timestamp: "0:07"
      },
      {
        speaker: "FlowVoice AI",
        text: "Robert, let's keep you safe and stop the flooding. Can you locate your main yellow or brass shut-off valve and turn it a quarter turn clockwise right away?",
        timestamp: "0:14"
      },
      {
        speaker: "Caller",
        text: "Yes, doing that right now... okay, the valve is closed and the spray slowed down.",
        timestamp: "0:21"
      },
      {
        speaker: "FlowVoice AI",
        text: "Great work. I have flagged this as an emergency burst pipe at 410 Oakridge Lane. Technician Marcus is in your zone and can arrive at 11:15 AM. Shall I lock that in?",
        timestamp: "0:28"
      },
      {
        speaker: "Caller",
        text: "Yes, please send Marcus right over.",
        timestamp: "0:31"
      },
      {
        speaker: "FlowVoice AI",
        text: "Marcus is dispatched for 11:15 AM. Calendar invite and live GPS tracking link have been texted to your number.",
        timestamp: "0:37"
      }
    ],
    extractedDetails: {
      serviceType: "Main Line Rupture / Water Restoration",
      address: "410 Oakridge Lane",
      equipment: "3/4 inch Copper Supply Line",
      urgencyReason: "Flooding risk minimized via guided shutoff"
    }
  },
  {
    id: "hvac-tuneup",
    title: "Fall Furnace Tune-Up Booking",
    category: "HVAC",
    customerName: "David Chen",
    customerIssue: "Annual heating maintenance before winter",
    triagePriority: "Standard",
    priorityColor: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    bookedSlot: "Tomorrow @ 10:00 AM (Routine Route)",
    conversation: [
      {
        speaker: "FlowVoice AI",
        text: "Hi, thanks for calling Falcon Climate Care! How can we assist you today?",
        timestamp: "0:02"
      },
      {
        speaker: "Caller",
        text: "Hi, I'd like to book our annual furnace inspection and filter replacement before cold weather hits.",
        timestamp: "0:08"
      },
      {
        speaker: "FlowVoice AI",
        text: "We'd love to help! Our 21-point furnace precision tune-up includes heat exchanger check, burner cleaning, and safety inspection. Would tomorrow morning work best for you?",
        timestamp: "0:16"
      },
      {
        speaker: "Caller",
        text: "Tomorrow at 10:00 AM would be great.",
        timestamp: "0:19"
      },
      {
        speaker: "FlowVoice AI",
        text: "Perfect. I have booked your tune-up for tomorrow at 10:00 AM at 18 Highland Road. You'll receive a reminder SMS 1 hour prior. Anything else I can assist with?",
        timestamp: "0:27"
      }
    ],
    extractedDetails: {
      serviceType: "Annual 21-Point Furnace Maintenance",
      address: "18 Highland Road",
      equipment: "Carrier Gas Furnace (2018)",
      urgencyReason: "Preventative Seasonal Maintenance"
    }
  }
];

export default function CallSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden">
      {/* Header bar */}
      <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <Volume2 className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white tracking-wide">
                Live AI Receptionist Simulator
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Demo
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Select an HVAC or Plumbing caller scenario to see how FlowVoice answers, triages, and books.
            </p>
          </div>
        </div>

        {/* Scenario Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === activeScenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-teal-500/20 text-teal-300 border-teal-400/50 shadow-sm"
                    : "bg-slate-800/60 text-slate-400 border-slate-700 hover:text-white hover:bg-slate-800"
                }`}
              >
                {scenario.category === "HVAC" ? (
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                ) : (
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                )}
                <span>{scenario.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Simulator Content: Split between Conversation and AI Triage Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        
        {/* Left: Interactive Voice Transcript */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-900/60 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Inbound Call &bull; {activeScenario.customerName}
                </span>
              </div>
              <div className="flex items-center gap-1 text-teal-400 text-xs font-mono">
                {/* Visual sound waves */}
                <div className="flex items-center gap-0.5 h-5 px-1">
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-1" />
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-2" />
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-3" />
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-4" />
                  <span className="w-1 bg-teal-400 rounded-full animate-wave-5" />
                </div>
                <span>Sub-500ms Voice Stream</span>
              </div>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-3.5 max-h-[360px] overflow-y-auto pr-1">
              {activeScenario.conversation.map((turn, idx) => {
                const isAI = turn.speaker === "FlowVoice AI";
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isAI ? "items-start" : "items-end"}`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <span className="text-[11px] font-semibold text-slate-400">
                        {turn.speaker}
                      </span>
                      <span className="text-[10px] text-slate-500">{turn.timestamp}</span>
                    </div>
                    <div
                      className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                        isAI
                          ? "bg-slate-800 text-slate-100 border border-slate-700/80 rounded-tl-sm shadow-sm"
                          : "bg-teal-600/90 text-white rounded-tr-sm shadow-md"
                      }`}
                    >
                      {turn.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Recorded &amp; Transcribed with Homeowner Consent
            </span>
            <span className="font-mono text-slate-400">Format: Whisper HD Audio</span>
          </div>
        </div>

        {/* Right: AI Triage & Calendar Integration Action Panel */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-950/70 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Automated Triage Output
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${activeScenario.priorityColor}`}
              >
                {activeScenario.triagePriority}
              </span>
            </div>

            {/* Structured details card */}
            <div className="mt-4 space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">
                  Diagnosed Job Type
                </span>
                <span className="text-sm font-semibold text-white">
                  {activeScenario.extractedDetails.serviceType}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">
                  Customer &amp; Service Location
                </span>
                <span className="text-sm font-medium text-white block">
                  {activeScenario.customerName}
                </span>
                <span className="text-xs text-slate-400">
                  {activeScenario.extractedDetails.address}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-medium text-slate-400 block mb-1">
                  Equipment / Safety Note
                </span>
                <span className="text-xs text-slate-300">
                  {activeScenario.extractedDetails.equipment} &bull; {activeScenario.extractedDetails.urgencyReason}
                </span>
              </div>
            </div>
          </div>

          {/* Appointment Booked Status Box */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-teal-950/80 to-slate-900 border border-teal-500/30 text-white space-y-2">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>Calendar Synchronized</span>
            </div>
            <div className="text-sm font-bold text-white">
              {activeScenario.bookedSlot}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Confirmed via SMS &bull; Synced with Dispatch Board</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
