import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import coachImage from "@/assets/coach.jpg";

const MeetCoach = () => {
  const prefersReducedMotion = useReducedMotion();
  const fadeIn = prefersReducedMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-noir to-primary">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-montserrat font-bold text-[clamp(1.75rem,4vw,3rem)] text-white mb-3">
            Meet Your Coach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-khaki to-earth mx-auto rounded-full" />
        </motion.div>

        {/* Main content: split layout */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left: Portrait image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            {/* Wrapper enforces portrait on mobile */}
            <div
              className="
                relative w-[82%] sm:w-[70%] md:w-full max-w-sm
                aspect-[3/4] md:aspect-auto
                rounded-3xl overflow-hidden shadow-2xl border border-white/10
              "
            >
              {/* Image fills wrapper; cover keeps portrait crop clean */}
              <img
                src={coachImage}
                alt="Deepak Choudhary — Coach"
                className="
                  absolute inset-0 w-full h-full object-cover object-top
                  md:static md:w-full md:h-[560px]
                "
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:hidden" />
            </div>
          </motion.div>

          {/* Right: Coach details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center"
          >
            {/* Name + Role */}
            <div className="text-center md:text-left space-y-2 sm:space-y-3 mb-6">
              <h3 className="font-montserrat font-extrabold text-[clamp(1.5rem,3.5vw,2.25rem)] text-khaki">
                Deepak Choudhary
              </h3>
              <p className="font-poppins text-[clamp(1rem,2.5vw,1.125rem)] text-white/85">
                Entrepreneur • Blockchain Educator • Digital Asset Mentor
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center md:text-left mb-6">
              <div>
                <p className="font-montserrat font-bold text-[clamp(1.5rem,3.2vw,2rem)] text-accent">05</p>
                <p className="font-poppins text-white/70 text-sm sm:text-base">Years</p>
              </div>
              <div>
                <p className="font-montserrat font-bold text-[clamp(1.5rem,3.2vw,2rem)] text-accent">12,000+</p>
                <p className="font-poppins text-white/70 text-sm sm:text-base">learners  Guided</p>
              </div>
              <div>
                <p className="font-montserrat font-bold text-[clamp(1.5rem,3.2vw,2rem)] text-accent">Millions</p>
                <p className="font-poppins text-white/70 text-sm sm:text-base">Earned in crypto</p>
              </div>
            </div>

            {/* Intro */}
            <p className="font-poppins text-white/85 leading-relaxed text-[clamp(0.95rem,2.4vw,1.05rem)] mb-6">
              Deepak is a highly sought-after digital wealth mentor with a proven track record
              in digital assets. He  has
guided 12,000+ learners globally focusing on safe, regulation-aware participation..
            </p>

            {/* Highlights */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Practical, no-hype frameworks for crypto & blockchain",
                "Wallets, security, and risk management made simple",
                "Action plans tailored to your goals",
                "Sustainable, long-term wealth creation",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-khaki mt-0.5 flex-shrink-0" />
                  <p className="font-poppins text-white/85 text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetCoach;
