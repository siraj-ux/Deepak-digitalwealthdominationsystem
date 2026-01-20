import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare } from "lucide-react";

const WA_GROUP_LINK = "http://join.digitalwealthdomination.in/dwd-whatsapp";


/* -------------------- Component -------------------- */
export default function ThankYouGa() {
  
  /* -------------------- UI -------------------- */
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "radial-gradient(circle at top, #0B3E77, #021E3D)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full text-center bg-[#ffffff08] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md"
      >
        <div className="flex justify-center mb-5">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#ffffff14]">
            <CheckCircle2 className="h-10 w-10 text-[#F3D35B]" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 text-[#EEEAD3]">
          Thank You For Registering!
        </h1>

        <p className="text-base leading-relaxed mb-6 text-[#EEEAD3] opacity-90">
          <span className="text-[#F5543A] font-semibold">
            Wait, your registration is incomplete...
          </span>{" "}
          Join the WhatsApp group below to receive updates, reminders, and
          access details for the{" "}
          <span className="text-[#F3D35B] font-semibold">
            Digital Wealth Domination Workshop
          </span>
          .
        </p>

        <motion.a
          href={WA_GROUP_LINK}
          target="_self"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 text-lg font-semibold rounded-full px-6 py-3 w-full sm:w-auto"
          style={{
            background:
              "linear-gradient(90deg, #F3D35B, #EA924D)",
            color: "#111",
            boxShadow: "0 4px 15px rgba(243, 211, 91, 0.3)",
          }}
        >
          <MessageSquare className="h-5 w-5" />
          Join WhatsApp Group
        </motion.a>
      </motion.div>
    </section>
  );
}
