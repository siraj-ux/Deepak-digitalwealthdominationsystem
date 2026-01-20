import { motion } from "framer-motion";

/* ===========================
   FAQ SECTION
   =========================== */
const faqs = [
  {
    q: "What happens after I pay ₹99?",
    a: "You’ll receive an email and WhatsApp message with the Zoom links, workshop schedule, and the private community access details , No profit guarantees.",
  },
  {
    q: "Are the sessions live or recorded?",
    a: "The 2-day workshop is live on Zoom. Recordings may be provided at the organizer’s discretion for a limited time , Suitable for beginner.",
  },
  {
    q: "Do I need prior experience in crypto or trading?",
    a: "No. The workshop starts from basics and guides you through wallets, security, and safe investing frameworks.",
  },
  {
    q: "Will I get bonuses worth ₹29,997?",
    a: "Yes. Join for ₹99 and you’ll unlock the listed bonuses (resources, templates, and checklists) during or after the workshop.",
  },
  {
    q: "What language is the workshop conducted in?",
    a: "English (with simple, beginner-friendly explanations).",
  },
  {
    q: "What if I can’t attend both days?",
    a: "You’ll get all joining instructions in advance. If you miss a session, check for recording availability or join the next cohort when offered.",
  },
  {
    q: "Is there a refund?",
    a: "Please refer to our Refund Policy in the footer. Due to the nature of digital events and instant resources, refunds may be limited.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-montserrat font-bold text-[clamp(1.5rem,4vw,2.5rem)] text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card/60 backdrop-blur-sm"
            >
              <details className="group rounded-xl">
                <summary className="list-none cursor-pointer px-4 sm:px-5 py-3 sm:py-4 flex items-start justify-between gap-3">
                  <h3 className="font-montserrat font-semibold text-[clamp(1rem,2.6vw,1.125rem)] text-foreground">
                    {item.q}
                  </h3>
                  <span
                    className="mt-1 shrink-0 rounded-full border border-border w-6 h-6 grid place-items-center transition-transform
                               group-open:rotate-45"
                    aria-hidden
                  >
                    <span className="block w-3 h-[2px] bg-foreground/70"></span>
                    <span className="block w-[2px] h-3 bg-foreground/70 absolute"></span>
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1">
                  <p className="font-poppins text-foreground/75 text-[clamp(0.95rem,2.3vw,1rem)] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===========================
   FOOTER
   =========================== */
export const SiteFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-noir to-primary text-[#EEEAD3]">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        {/* Top: address + quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Address */}
          <div>
            <h4 className="font-montserrat font-bold text-[clamp(1.1rem,2.8vw,1.25rem)] text-khaki mb-3">
              Contact
            </h4>
            <address className="not-italic font-poppins leading-relaxed text-white/85 text-[clamp(0.95rem,2.4vw,1rem)]">
              Contact: Deepak Choudhary | support@deepak-crypto.com | 9987561437 601, Salasar
Braj Bhumi Vrindavan, Maxus Mall Road, Bhayandar West, Thane 401101, Maharashtra,
India © 2025 Deepak Choudhary. <br></br><span className="text-xs">Educational purpose only</span>

            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-[clamp(1.1rem,2.8vw,1.25rem)] text-khaki mb-3">
              Policies
            </h4>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="#terms" className="hover:text-khaki">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#refund" className="hover:text-khaki">Refund Policy</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-khaki">Privacy Policy</a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-khaki">Disclaimer</a>
              </li>
            </ul>
          </div>

          {/* Brand line */}
          <div>
            <h4 className="font-montserrat font-bold text-[clamp(1.1rem,2.8vw,1.25rem)] text-khaki mb-3">
              About
            </h4>
            <p className="font-poppins text-white/80">
              Educational content for mastering crypto &amp; blockchain with practical frameworks,
              live sessions, and community support.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* Collapsible Legal Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Terms */}
          <div id="terms" className="rounded-xl border border-white/10 bg-white/5">
            <details className="group rounded-xl">
              <summary className="list-none cursor-pointer px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                <span className="font-montserrat font-semibold text-[#FBD794]">Terms &amp; Conditions</span>
                <span className="shrink-0 w-6 h-6 grid place-items-center rounded-full border border-white/15 transition-transform group-open:rotate-45">
                  <span className="block w-3 h-[2px] bg-[#FBD794]"></span>
                  <span className="block w-[2px] h-3 bg-[#FBD794] absolute"></span>
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 font-poppins text-white/85 text-sm leading-relaxed">
                By accessing this content, you agree to all stated terms, policies, and notices. Participation may require account verification and adherence to community rules.
              </div>
            </details>
          </div>

          {/* Refund */}
          <div id="refund" className="rounded-xl border border-white/10 bg-white/5">
            <details className="group rounded-xl">
              <summary className="list-none cursor-pointer px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                <span className="font-montserrat font-semibold text-[#FBD794]">Refund Policy</span>
                <span className="shrink-0 w-6 h-6 grid place-items-center rounded-full border border-white/15 transition-transform group-open:rotate-45">
                  <span className="block w-3 h-[2px] bg-[#FBD794]"></span>
                  <span className="block w-[2px] h-3 bg-[#FBD794] absolute"></span>
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 font-poppins text-white/85 text-sm leading-relaxed">
                Due to the nature of digital events and instant resources, refunds may be limited. Any eligible refunds will be processed as per the specific program terms.
              </div>
            </details>
          </div>

          {/* Privacy */}
          <div id="privacy" className="rounded-xl border border-white/10 bg-white/5">
            <details className="group rounded-xl">
              <summary className="list-none cursor-pointer px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                <span className="font-montserrat font-semibold text-[#FBD794]">Privacy Policy</span>
                <span className="shrink-0 w-6 h-6 grid place-items-center rounded-full border border-white/15 transition-transform group-open:rotate-45">
                  <span className="block w-3 h-[2px] bg-[#FBD794]"></span>
                  <span className="block w-[2px] h-3 bg-[#FBD794] absolute"></span>
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 font-poppins text-white/85 text-sm leading-relaxed">
                We collect minimal data to deliver services and updates. Information is protected and never sold. You may opt-out of communications anytime.
              </div>
            </details>
          </div>

          {/* Disclaimer (full text collapsed by default) */}
          <div id="disclaimer" className="rounded-xl border border-white/10 bg-white/5 md:col-span-2">
            <details className="group rounded-xl">
              <summary className="list-none cursor-pointer px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                <span className="font-montserrat font-semibold text-[#FBD794]">Disclaimer</span>
                <span className="shrink-0 w-6 h-6 grid place-items-center rounded-full border border-white/15 transition-transform group-open:rotate-45">
                  <span className="block w-3 h-[2px] bg-[#FBD794]"></span>
                  <span className="block w-[2px] h-3 bg-[#FBD794] absolute"></span>
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-5 font-poppins text-white/85 text-sm leading-relaxed space-y-3">
                <p><strong>Educational Purpose Only:</strong> Workshop is for digital-asset literacy only, not investment or trading advice</p>
                <p><strong>Age Requirement:</strong> You must be at least 18 years old to participate in any financial education programs or workshops.</p>
                <p><strong>Risk Warning:</strong> Digital assets are volatile and risky. Past results not predictive</p>
                <p><strong>No Guarantees:</strong> No profits or outcomes promised</p>
                <p><strong> Responsibility:</strong> Participants remain responsible for financial decisions</p>
                <p><strong>Investment Responsibility:</strong> Participants should carefully evaluate their financial situation and risk tolerance before making any investment decisions. Real money trading carries potential for financial loss. This educational content should not substitute independent research and due diligence.</p>
                <p><strong>Professional Consultation:</strong> Always consult qualified financial advisors who understand your specific circumstances before making investment decisions. We are not licensed financial advisors, and no advisor-client relationship is created through this content.</p>
                <p><strong>Recording & Platform Notice:</strong>  Sessions may be recorded.</p>
                <p><strong>Third-Party References:</strong> Content may reference third-party resources, tools, or platforms. We are not responsible for third-party content accuracy and do not endorse specific products or services unless explicitly stated.</p>
                <p><strong>Liability Limitation:</strong> You acknowledge trading involves risks and uncertainties. You are solely responsible for investment decisions and financial consequences. We disclaim liability for losses or damages from participation in educational programs.</p>
                <p><strong>Regulatory Compliance:</strong> dheres to educational advertising standards</p>
                <p><strong>Terms Agreement:</strong> By accessing this content, you agree to our terms and conditions, privacy policy, and acknowledge understanding of all risks involved in financial markets.</p>
              </div>
            </details>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-xs sm:text-sm text-white/60">
            © {new Date().getFullYear()} Deepak Choudhary. All rights reserved. Powered by Adx Media Advertising LLP
          </p>
          <a href="#top" className="font-poppins text-xs sm:text-sm underline decoration-khaki/50 hover:text-khaki">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
