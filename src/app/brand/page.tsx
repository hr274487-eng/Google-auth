import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Sparkles, Check, Palette, FileCode, Image as ImageIcon } from "lucide-react";

export const metadata = {
  title: "Brand Assets & Logo Downloads | FlowVoice AI",
  description: "Download official FlowVoice AI logos, vector SVGs, and high-resolution app icons.",
};

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Brand Assets &amp; Logo Downloads
            </h1>
          </div>
          <p className="text-sm text-slate-400 max-w-2xl">
            Official logos, vector graphics, and visual identity assets for FlowVoice AI. Available in high-resolution raster and vector formats.
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Official App Icon (Raster High-Res) */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Primary App Emblem (High-Res)
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  1024 x 1024 &bull; JPG
                </span>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl mb-6 bg-slate-950 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/flowvoice-logo.jpg"
                  alt="FlowVoice AI High-Resolution Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                FlowVoice AI Emblem &amp; Soundwave
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Featuring the glowing cyan/teal audio sound wave merging with the HVAC flame and plumbing water droplet emblem on deep navy slate.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="/flowvoice-logo.jpg"
                download="flowvoice-ai-logo.jpg"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res Logo (JPG)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Vector Horizontal Logo (SVG) */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Vector Scalable Logo (SVG)
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Scalable &bull; SVG
                </span>
              </div>

              {/* Preview */}
              <div className="aspect-[16/9] w-full rounded-2xl border border-slate-700/80 shadow-2xl mb-6 bg-slate-950 p-6 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="FlowVoice AI Vector Logo"
                  className="w-full max-h-24 object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Full Horizontal Logo with Typography
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Perfect for website headers, business cards, service trucks, contractor presentations, and partner integrations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
              <a
                href="/logo.svg"
                download="flowvoice-logo.svg"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <FileCode className="w-4 h-4 text-teal-400" />
                <span>Download Full Horizontal Logo (SVG)</span>
              </a>
              <a
                href="/logo-icon.svg"
                download="flowvoice-icon.svg"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Square App Icon (SVG)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Brand Color Palette */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-base mb-4">
            <Palette className="w-5 h-5 text-teal-400" />
            <span>Official Brand Color Palette</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-full h-12 rounded-lg bg-[#14b8a6] mb-3 shadow-md" />
              <div className="text-xs font-bold text-white">Tech Teal</div>
              <div className="text-[11px] font-mono text-slate-400">#14B8A6</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-full h-12 rounded-lg bg-[#0ea5e9] mb-3 shadow-md" />
              <div className="text-xs font-bold text-white">Electric Cyan</div>
              <div className="text-[11px] font-mono text-slate-400">#0EA5E9</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-full h-12 rounded-lg bg-[#f97316] mb-3 shadow-md" />
              <div className="text-xs font-bold text-white">Flame Orange</div>
              <div className="text-[11px] font-mono text-slate-400">#F97316</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-full h-12 rounded-lg bg-[#080e1a] border border-slate-700 mb-3 shadow-md" />
              <div className="text-xs font-bold text-white">Navy Slate</div>
              <div className="text-[11px] font-mono text-slate-400">#080E1A</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
