import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mic, Database, UserCheck, ArrowLeft, Mail, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | FlowVoice AI",
  description: "Comprehensive Privacy Policy covering voice recordings, AI transcripts, and calendar data processing.",
};

export default function PrivacyPage() {
  const sections = [
    { id: "intro", title: "1. Introduction & Overview" },
    { id: "data-collection", title: "2. Data We Collect (Voice & Audio)" },
    { id: "how-we-use", title: "3. How We Use Data & AI Processing" },
    { id: "call-recording", title: "4. Call Recording Disclosure & Consent" },
    { id: "data-sharing", title: "5. Data Sharing & Third-Party APIs" },
    { id: "security", title: "6. Data Security & Storage Standards" },
    { id: "retention", title: "7. Data Retention & Audio Lifecycles" },
    { id: "user-rights", title: "8. User Rights (CCPA, GDPR & Opt-Out)" },
    { id: "children", title: "9. Children's Privacy" },
    { id: "updates", title: "10. Updates to This Privacy Policy" },
    { id: "contact", title: "11. Contact Our Privacy Officer" },
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
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-sm text-slate-400">
            Last Updated: <span className="font-mono text-teal-300">[Date]</span> &bull; Applicable to all users of <span className="text-white font-medium">[Company Name]</span>
          </p>
        </div>

        {/* Layout with sticky sidebar on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of contents sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block pb-2 border-b border-slate-800">
                Privacy Navigation
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
                Privacy or Data Deletion Request? <br />
                <a href="mailto:[Contact Email]" className="text-teal-400 font-mono underline">
                  [Contact Email]
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Body Content */}
          <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-slate-300">
            
            {/* 1. Introduction */}
            <section id="intro" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">1. Introduction &amp; Overview</h2>
              <p>
                At <strong>[Company Name]</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we recognize the utmost importance of safeguarding the privacy of our contractor clients and the homeowners who place service calls to them.
              </p>
              <p>
                This Privacy Policy describes how we collect, store, process, and safeguard information when you use our AI voice receptionist platform, telephony routing, transcription systems, and calendar booking integrations (collectively, the &ldquo;Service&rdquo;). By utilizing our platform, you acknowledge the data handling practices described herein.
              </p>
            </section>

            {/* 2. Data We Collect (Voice & Audio Highlight) */}
            <section id="data-collection" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Mic className="w-5 h-5 text-teal-400" />
                <span>2. Data We Collect (Voice Recordings &amp; Telephony)</span>
              </h2>
              <p>
                Because our platform operates as an automated voice receptionist, we collect specific voice-based and telephony data in order to triage repairs and book appointments:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                    A. Audio Recordings &amp; Acoustic Streams
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We capture and process live voice audio streams of incoming calls. Audio is converted into digital waveform data for the duration of the phone call to enable real-time speech-to-text recognition and natural conversational AI response.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                    B. Call Transcripts &amp; Extracted Entities
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our AI models generate word-for-word textual transcripts of the conversation. From this transcript, we parse diagnostic data (e.g. &ldquo;furnace blowing cold air&rdquo;, &ldquo;burst pipe in basement&rdquo;), customer identity (caller name, phone number), and service location (street address, city, postal code).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                    C. Calendar &amp; Scheduling Information
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To book appointments without scheduling conflicts, we access available time slots, appointment titles, start/end times, and dispatch zones from Client-authorized calendars (such as Google Calendar or Microsoft Outlook).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                    D. Telephony Metadata
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Caller ID information, timestamp, call duration, forwarding carrier, and call outcome metrics.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Data */}
            <section id="how-we-use" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">3. How We Use Data &amp; AI Processing</h2>
              <p>
                We use collected information strictly to fulfill operational and contractual purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>
                  <strong>Appointment Booking:</strong> Creating and syncing confirmed service calls directly into the contractor&apos;s dispatch schedule.
                </li>
                <li>
                  <strong>Emergency Triage &amp; Dispatch Routing:</strong> Categorizing urgency to notify on-call technicians immediately via SMS and email.
                </li>
                <li>
                  <strong>Service Improvement &amp; Model Accuracy:</strong> Evaluating anonymized transcripts to refine our trade-specific language understanding (e.g., HVAC and plumbing terminology). We do <strong>not</strong> sell your data to third-party advertisers or data brokers.
                </li>
                <li>
                  <strong>Audit &amp; Quality Assurance:</strong> Providing contractors with searchable call logs, audio playback, and dispute resolution records.
                </li>
              </ul>
            </section>

            {/* 4. Call Recording Disclosure & Consent */}
            <section id="call-recording" className="scroll-mt-28 space-y-3 p-5 rounded-2xl bg-teal-500/10 border border-teal-500/20">
              <h2 className="text-lg font-bold text-teal-300 flex items-center gap-2">
                <Lock className="w-5 h-5 text-teal-400" />
                <span>4. Call Recording Disclosure &amp; Consent Mechanisms</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To comply with federal and state wiretapping regulations (including California, Florida, Illinois, Pennsylvania, and other two-party consent jurisdictions), the Service includes an automated recording disclosure prompt at the initiation of calls. Callers who continue the call after hearing the disclosure provide implied consent to recording and automated transcription.
              </p>
            </section>

            {/* 5. Data Sharing & Third-Party APIs */}
            <section id="data-sharing" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-teal-400" />
                <span>5. Data Sharing &amp; Third-Party Integrations</span>
              </h2>
              <p>
                We only share personal and call data with vetted sub-processors essential to operating the platform:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>Calendar APIs (Google Calendar, Microsoft Graph):</strong> We transmit appointment details (customer name, phone, address, issue summary) into the contractor&apos;s authorized calendar account.
                </li>
                <li>
                  <strong>Telephony Providers (e.g., Twilio, Telnyx):</strong> To route telephone audio between the public switched telephone network (PSTN) and our voice infrastructure.
                </li>
                <li>
                  <strong>Cloud Infrastructure (e.g., AWS, GCP, Vercel):</strong> Encrypted storage and compute hosting that adheres to SOC 2 Type II and ISO 27001 standards.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If compelled by subpoena, court order, or applicable law to protect life and safety in verified emergencies.
                </li>
              </ul>
            </section>

            {/* 6. Security */}
            <section id="security" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">6. Data Security &amp; Storage Standards</h2>
              <p>
                We employ industry-leading technical and organizational security safeguards:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>All voice audio and data in transit is encrypted using TLS 1.3 / SRTP.</li>
                <li>Transcripts and customer records are encrypted at rest using AES-256 bit encryption.</li>
                <li>Role-based access controls (RBAC) restrict access to customer audio to authorized personnel.</li>
              </ul>
            </section>

            {/* 7. Retention */}
            <section id="retention" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">7. Data Retention &amp; Audio Lifecycles</h2>
              <p>
                By default, call audio recordings are retained for ninety (90) days to allow contractor review and dispute verification, after which raw audio files are automatically purged. Call transcripts and appointment records are retained for the duration of the contractor&apos;s active account. Contractors may configure custom retention windows (e.g., 30 days) within their administrative settings.
              </p>
            </section>

            {/* 8. User Rights */}
            <section id="user-rights" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-teal-400" />
                <span>8. User Rights (CCPA, GDPR &amp; Opt-Out)</span>
              </h2>
              <p>
                Depending on your geographic location, you or your end-callers may have certain privacy rights under applicable legislation (such as the California Consumer Privacy Act (CCPA) or General Data Protection Regulation (GDPR)), including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Right of Access:</strong> Request a copy of the personal information and call transcripts we hold about you.</li>
                <li><strong>Right to Deletion:</strong> Request the immediate erasure of call audio, transcripts, and personal contact records.</li>
                <li><strong>Right to Opt-Out:</strong> Request that your contact details not be processed for automated appointment reminders.</li>
              </ul>
              <p className="pt-1">
                To exercise any of these rights, please email our privacy team at <a href="mailto:[Contact Email]" className="text-teal-400 underline font-mono">[Contact Email]</a>.
              </p>
            </section>

            {/* 9. Children */}
            <section id="children" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">9. Children&apos;s Privacy</h2>
              <p>
                Our Service is designed solely for commercial trade businesses and adult property owners requiring home services. We do not knowingly collect personal information from individuals under the age of 18.
              </p>
            </section>

            {/* 10. Updates */}
            <section id="updates" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl font-bold text-white">10. Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect evolving regulatory requirements or technological advancements. Material revisions will be accompanied by an updated &ldquo;Last Updated&rdquo; date and prior notification to registered clients.
              </p>
            </section>

            {/* 11. Contact */}
            <section id="contact" className="scroll-mt-28 space-y-3 p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>11. Contact Our Privacy Officer</span>
              </h2>
              <p className="text-slate-300">
                For questions regarding this policy, call recording regulations, or data deletion requests, contact us at:
              </p>
              <div className="font-mono text-xs text-slate-300 space-y-1 pt-2">
                <div><strong>Company:</strong> [Company Name]</div>
                <div><strong>Privacy Office Email:</strong> <a href="mailto:[Contact Email]" className="text-teal-400 underline">[Contact Email]</a></div>
                <div><strong>Effective Date:</strong> [Date]</div>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
