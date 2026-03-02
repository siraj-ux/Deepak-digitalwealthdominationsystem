import React from "react";
import { motion } from "framer-motion";

const FilmProduction = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-noir to-primary overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 mb-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <div className="relative mb-[-1.5rem]">
            <h1 
              className="font-montserrat font-black text-transparent leading-none select-none tracking-tighter
                         text-[clamp(4rem,12vw,8rem)]"
              style={{ WebkitTextStroke: "1px rgba(197, 163, 88, 0.4)" }}
            >
              06
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-white font-light text-[clamp(1rem,2.5vw,1.4rem)] leading-snug">
              Deepak, along with his father <span className="font-bold text-khaki italic">"Krishan Choudhary"</span>
            </h2>
            <div className="w-12 h-[1px] bg-khaki/40 mx-auto my-4"></div>
            <p className="font-poppins text-white/60 font-light text-[clamp(0.75rem,1.2vw,0.9rem)] uppercase tracking-[0.4em]">
              produced movies across the 
              <span className="text-white font-medium"> Marathi & Hindi </span> 
              film industries.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-film-scroll gap-5 pr-5">
          <img
            src="/new-images/films.png"
            alt="Film Productions"
            className="h-[45vh] md:h-[55vh] lg:h-[60vh] w-auto object-contain flex-shrink-0"
          />
          <img
            src="/new-images/films.png"
            alt="Film Productions"
            className="h-[45vh] md:h-[55vh] lg:h-[60vh] w-auto object-contain flex-shrink-0"
          />
        </div>
      </div>

      {/* FIXED: Removed 'jsx' and the backtick inside curly braces */}
      <style>{`
        @keyframes filmScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-film-scroll {
          display: flex;
          animation: filmScroll 30s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-film-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default FilmProduction;