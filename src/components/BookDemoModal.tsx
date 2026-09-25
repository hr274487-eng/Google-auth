"use client";
import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Droplets, 
  Calendar, 
  Phone, 
  Mail, 
  Building2,
  Clock
} from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    tradeType: "HVAC",
    callVolume: "50-150 calls/mo",
    notes: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      tradeType: "HVAC",
      callVolume: "50-150 calls/mo",
      notes: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-white overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Live Demo</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white tracking-tight">
              See FlowVoice AI in Action
            </h2>
            <p className="text-sm text-slate-400 mt-1 mb-6">
              Hear our AI receptionist handle an actual live call tailored to your HVAC or plumbing workflow.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Trade */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Your Primary Trade
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "HVAC", label: "HVAC", icon: Flame, color: "text-orange-400" },
                    { id: "Plumbing", label: "Plumbing", icon: Droplets, color: "text-cyan-400" },
                    { id: "Dual-Trade", label: "Dual Trade", icon: Sparkles, color: "text-teal-400" },
                  ].map((trade) => {
                    const Icon = trade.icon;
                    const isSelected = formData.tradeType === trade.id;
                    return (
                      <button
                        type="button"
                        key={trade.id}
                        onClick={() => setFormData({ ...formData, tradeType: trade.id })}
                        className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-teal-500/15 border-teal-500 text-teal-300 shadow-sm"
                            : "bg-slate-800/50 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${trade.color}`} />
                        <span>{trade.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mike Roberts"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Comfort Solutions"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="mike@apexcomfort.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone Number (for SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                  />
                </div>
              </div>

              {/* Call Volume */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Estimated Monthly Inbound Calls
                </label>
                <select
                  value={formData.callVolume}
                  onChange={(e) => setFormData({ ...formData, callVolume: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                >
                  <option value="Under 50 calls/mo">Under 50 calls/mo (Solo contractor)</option>
                  <option value="50-150 calls/mo">50 - 150 calls/mo (Growing team, 2-5 trucks)</option>
                  <option value="150-500 calls/mo">150 - 500 calls/mo (Mid-sized operation, 6-15 trucks)</option>
                  <option value="500+ calls/mo">500+ calls/mo (Enterprise / Multi-location)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Custom Demo Session</span>
                </button>
              </div>

              <p className="text-center text-xs text-slate-400">
                Or email us directly at{" "}
                <a 
                  href={`mailto:support@[yourdomain].com?subject=Demo%20Request%20for%20FlowVoice%20AI`}
                  className="text-teal-400 underline hover:text-teal-300"
                >
                  support@[yourdomain].com
                </a>
              </p>
            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 mx-auto flex items-center justify-center border border-teal-500/30">
              <CheckCircle2 className="w-9 h-9 text-teal-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">Demo Request Received!</h3>
            
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. We have staged a sample voice receptionist configured for <strong className="text-teal-300">{formData.businessName}</strong> ({formData.tradeType}).
            </p>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Trade:</span>
                <span className="font-semibold text-white">{formData.tradeType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Confirmation Sent To:</span>
                <span className="font-semibold text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone for Test Call:</span>
                <span className="font-semibold text-white">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Support Contact:</span>
                <span className="font-semibold text-teal-400">support@[yourdomain].com</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:support@[yourdomain].com?subject=Demo%20Followup%20-%20${encodeURIComponent(formData.businessName)}&body=Hi%20Team,%0D%0A%0D%0AI%20just%20requested%20a%20demo%20for%20${encodeURIComponent(formData.businessName)}%20(${encodeURIComponent(formData.phone)}).%20Looking%20forward%20to%20speaking!`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Send Direct Email to Team</span>
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
