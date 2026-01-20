import { motion, useReducedMotion } from "framer-motion";

const ValueProposition = () => {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? {} : { opacity: 0, scale: 0.92 };
  const animate = prefersReducedMotion ? {} : { opacity: 1, scale: 1 };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-noir via-noir/90 to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {/* Icon Section */}
          <div className="bg-khaki/15 p-4 sm:p-5 rounded-2xl flex items-center justify-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-khaki to-earth rounded-full flex items-center justify-center shadow-inner">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-noir"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left space-y-2 sm:space-y-3">
            <h3
              className="font-montserrat font-bold text-[clamp(1.25rem,3.5vw,1.875rem)] 
                         text-khaki leading-snug"
            >
              Digital Wealth Domination Workshop
            </h3>
            <p
              className="font-poppins text-[clamp(0.9rem,2.5vw,1rem)] 
                         text-white/90 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              This 2-day LIVE session by Deepak Choudhary simplifies complex crypto concepts —
helping you make informed, responsible, and confident decisions in the digital economy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
