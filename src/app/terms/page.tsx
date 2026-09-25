import React from "react";
import Link from "next/link";
import { FileText, Shield, AlertTriangle, Scale, Mail, Calendar, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | FlowVoice AI",
  description: "Standard SaaS Terms of Service for FlowVoice AI voice receptionist platform.",
};

export default function TermsPage() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "description", title: "2. Description of Service" },
    { id: "ai-disclaimer", title: "3. AI Voice & Emergency Disclaimer" },
    { id: "responsibilities", title: "4. User Responsibilities & Call Recording Laws" },
    { id: "payment", title: "5. Payment Terms & Billing" },
    { id: "ip", title: "6. Intellectual Property & Customer Data" },
    { id: "liability", title: "7. Limitation of Liability" },
    { id: "warranties", title: "8. Disclaimer of Warranties" },
    { id: "indemnification", title: "9. Indemnification" },
    { id: "termination", title: "10. Termination" },
    { id: "changes", title: "11. Changes to Terms" },
    { id: "contact", title: "12. Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
              <Scale className="w-5 h-5" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms of Service
            </h1>
          </div>
          <p className="text-sm text-slate-400">
            Last Updated: <span className="font-mono text-teal-300">[Date]</span> &bull; Effective for all clients of <span className="text-white font-medium">[Company Name]</span>
          </p>
        </div>

        {/* Layout with sticky sidebar on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of contents sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block pb-2 border-b border-slate-800">
                Table of Contents
              </span>
              <nav className="space-y-1.5 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block py-1 px-2 rounded text-slate-400 hover:text-teal-300 hover:bg-slate-800/60 transition-colors"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
                Questions about these terms? Email <br />
                <a href="mailto:[Contact Email]" className="text-teal-400 font-mono underline">
                  [Contact Email]
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Body Content */}
          <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-slate-300">
            
            {/* Acceptance */}
            <section id="acceptance" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>1. Acceptance of Terms</span>
              </h2>
              <p>
                By accessing, subscribing to, or using the services, web applications, telephony pipelines, and voice interfaces provided by <strong>[Company Name]</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you (&ldquo;Client&rdquo;, &ldquo;Contractor&rdquo;, or &ldquo;User&rdquo;) agree to be legally bound by these Terms of Service (&ldquo;Terms&rdquo;).
              </p>
              <p>
                If you are entering into these Terms on behalf of an HVAC, plumbing, or service contracting entity, you represent and warrant that you possess the full legal authority to bind that entity to these Terms. If you do not agree to all terms and conditions, you must not access or use our services.
              </p>
            </section>

            {/* Description of Service */}
            <section id="description" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">2. Description of Service</h2>
              <p>
                <strong>[Company Name]</strong> provides an automated artificial intelligence (AI) voice receptionist, call routing, issue triage, and calendar scheduling platform engineered for trade businesses including heating, ventilation, air conditioning (HVAC), plumbing, and related contracting services (the &ldquo;Service&rdquo;).
              </p>
              <p>
                The Service functions by receiving inbound telephonic voice calls forwarded from the Client&apos;s telephone lines, conversing with callers using artificial intelligence voice models, diagnosing the caller&apos;s issue, capturing customer contact and address information, and programmatically scheduling appointments into the Client&apos;s connected third-party calendar or dispatch systems (e.g., Google Calendar, Microsoft Outlook, or supported CRM systems).
              </p>
            </section>

            {/* AI Voice & Emergency Disclaimer */}
            <section id="ai-disclaimer" className="scroll-mt-28 space-y-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-200">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span>3. AI Voice &amp; Emergency Telephony Disclaimer (NOT A 911 SERVICE)</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                <strong>CRITICAL NOTICE:</strong> The Service is an automated administrative receptionist and is <strong>NOT</strong> an emergency dispatch service, public safety answering point (PSAP), or substitute for 911 emergency response. 
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                While the Service contains safety heuristics to recognize severe situations (such as active gas odors, carbon monoxide warnings, or catastrophic flooding), the Company does not guarantee that the AI will detect every life-safety event. In any situation involving immediate personal danger, explosion, fire, or toxic gas leakage, callers must hang up and dial 911 immediately.
              </p>
            </section>

            {/* User Responsibilities */}
            <section id="responsibilities" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">4. User Responsibilities &amp; Call Recording Compliance</h2>
              <p>
                As a condition of using the Service, the Client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>Compliance with Call Recording Laws:</strong> The Service captures audio recordings and transcripts of incoming telephone calls. Federal, state, and international jurisdictions have varying laws governing call recording (including &ldquo;one-party&rdquo; and &ldquo;two-party / all-party&rdquo; consent statutes). The Client is solely responsible for ensuring that all legally mandated notices (such as automated announcements stating &ldquo;This call is recorded for quality and dispatch purposes&rdquo;) are maintained and activated on their telephony lines.
                </li>
                <li>
                  <strong>Accurate Calendar &amp; Service Availability:</strong> The Client is responsible for maintaining accurate working hours, service areas, technician travel buffers, and appointment slots within their connected calendars. The Company is not liable for scheduling conflicts resulting from inaccurate calendar data.
                </li>
                <li>
                  <strong>Authorized Account Access:</strong> The Client must maintain the security and confidentiality of login credentials, API tokens, and webhook secrets used to connect the Service to their calendars.
                </li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section id="payment" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">5. Payment Terms &amp; Billing</h2>
              <p>
                The Service is billed on a recurring monthly or annual subscription basis in advance, plus any applicable usage-based telephony fees (such as inbound voice minutes beyond plan allocations).
              </p>
              <p>
                All fees are non-refundable except as explicitly provided in an applicable Service Level Agreement or during an authorized money-back guarantee trial period. <strong>[Company Name]</strong> reserves the right to modify subscription pricing upon thirty (30) days&apos; advance written notice to the Client.
              </p>
            </section>

            {/* Intellectual Property */}
            <section id="ip" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">6. Intellectual Property &amp; Customer Data</h2>
              <p>
                The Client retains all ownership rights in and to their customer data, call recordings, caller information, and calendar records (&ldquo;Customer Data&rdquo;). The Client grants <strong>[Company Name]</strong> a limited, non-exclusive license to process, transcribe, and transmit Customer Data solely to provide and improve the Service.
              </p>
              <p>
                All proprietary voice models, algorithmic pipelines, dispatch software, user interfaces, documentation, trademarks, and logos associated with the Service remain the sole property of <strong>[Company Name]</strong>.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL <strong>[Company Name]</strong>, ITS DIRECTORS, EMPLOYEES, AFFILIATES, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF CONTRACTS, MISSED SERVICE CALLS, PROPERTY WATER DAMAGE, FREEZING PIPE DAMAGE, BUSINESS INTERRUPTION, OR DATA LOSS ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE SERVICE.
              </p>
              <p>
                IN NO EVENT SHALL THE TOTAL AGGREGATE LIABILITY OF <strong>[Company Name]</strong> EXCEED THE GREATER OF ONE HUNDRED DOLLARS ($100 USD) OR THE AMOUNT ACTUALLY PAID BY THE CLIENT TO <strong>[Company Name]</strong> DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section id="warranties" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, COMPLETELY ERROR-FREE, OR ACCURATELY INTERPRET 100% OF ACCENTED, NOISY, OR INAUDIBLE CALLER SPEECH.
              </p>
            </section>

            {/* Indemnification */}
            <section id="indemnification" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">9. Indemnification</h2>
              <p>
                The Client agrees to defend, indemnify, and hold harmless <strong>[Company Name]</strong> and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) the Client&apos;s breach of these Terms; (b) the Client&apos;s violation of applicable call recording, wiretapping, or telemarketing laws; or (c) any dispute between the Client and its end customers regarding scheduled services or technician conduct.
              </p>
            </section>

            {/* Termination */}
            <section id="termination" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">10. Termination</h2>
              <p>
                Either party may terminate the Service subscription at the end of the current billing cycle by providing written notice or cancelling through the account portal. <strong>[Company Name]</strong> may suspend or terminate access immediately upon written notice if the Client violates these Terms or fails to pay invoiced amounts. Upon termination, Client may request export of call logs and customer records within thirty (30) days.
              </p>
            </section>

            {/* Changes to Terms */}
            <section id="changes" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">11. Changes to Terms</h2>
              <p>
                We reserve the right to revise or modify these Terms at any time. When material changes are made, we will update the &ldquo;Last Updated&rdquo; date at the top of this document and notify active subscribers via email or prominent dashboard notification. Continued use of the Service following effective changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section id="contact" className="scroll-mt-28 space-y-3 p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>12. Contact Information</span>
              </h2>
              <p className="text-slate-300">
                If you have any questions, legal inquiries, or notices regarding these Terms of Service, please contact us at:
              </p>
              <div className="font-mono text-xs text-slate-300 space-y-1 pt-2">
                <div><strong>Entity:</strong> [Company Name]</div>
                <div><strong>Legal &amp; Support Email:</strong> <a href="mailto:[Contact Email]" className="text-teal-400 underline">[Contact Email]</a></div>
                <div><strong>Effective Date:</strong> [Date]</div>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
