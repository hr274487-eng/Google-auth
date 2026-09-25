"use client";
import React, { useState } from "react";
import { DollarSign, TrendingUp, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

export default function RoiCalculator({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(6);
  const [averageTicket, setAverageTicket] = useState(550);
  const [closeRate, setCloseRate] = useState(60); // 60% booking conversion

  // Calculations
  const missedCallsPerMonth = missedCallsPerWeek * 4.33;
  const capturedJobsPerMonth = Math.round(missedCallsPerMonth * (closeRate / 100));
  const recoveredRevenueMonthly = Math.round(capturedJobsPerMonth * averageTicket);
  const recoveredRevenueYearly = recoveredRevenueMonthly * 12;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Interactive Contractor ROI Calculator</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          How Much Revenue Are Missed Calls Costing You?
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          When an HVAC or plumbing emergency strikes, 85% of homeowners hang up on voicemail and call the next contractor on Google. See what capturing every call looks like.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Control Panel */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Missed Calls Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">Missed Inbound Calls Per Week</span>
              <span className="text-teal-400 font-mono text-base bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                {missedCallsPerWeek} calls/wk
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              step="1"
              value={missedCallsPerWeek}
              onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>1 call</span>
              <span>10 calls (typical after-hours &amp; jobs)</span>
              <span>25 calls</span>
            </div>
          </div>

          {/* Average Service Ticket Value Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">Average Service Call Ticket</span>
              <span className="text-teal-400 font-mono text-base bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                ${averageTicket}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="1500"
              step="25"
              value={averageTicket}
              onChange={(e) => setAverageTicket(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>$200 (basic diagnostic)</span>
              <span>$550 (avg repair)</span>
              <span>$1,500+ (major repair/replace)</span>
            </div>
          </div>

          {/* Booking Conversion Rate Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">Estimated Caller Booking Conversion</span>
              <span className="text-teal-400 font-mono text-base bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                {closeRate}%
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="5"
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>30% conservative</span>
              <span>60% standard AI close</span>
              <span>90% urgent emergencies</span>
            </div>
          </div>

        </div>

        {/* Calculated Results Panel */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-teal-500/30 relative overflow-hidden space-y-5 text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
              Estimated Monthly Recovered Revenue
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
              ${recoveredRevenueMonthly.toLocaleString()}
              <span className="text-sm font-normal text-teal-400">/mo</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-400">Jobs rescued per month:</span>
              <span className="font-bold text-teal-300">~{capturedJobsPerMonth} new jobs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Annual recovered revenue:</span>
              <span className="font-bold text-white">${recoveredRevenueYearly.toLocaleString()}/yr</span>
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Lock In These Jobs &bull; Book a Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
