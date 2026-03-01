import React from "react";
import { motion } from "framer-motion";

const PeopleHeMet = () => {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden flex flex-col justify-center border-t border-border/40">
      
      {/* 1. Header Section */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <h2 className="font-montserrat font-bold leading-tight text-foreground text-[clamp(1.75rem,5vw,3.2rem)]">
            People He Met in <span className="text-accent">His Journey</span>
          </h2>

          <p className="font-poppins text-foreground/80 leading-relaxed text-[clamp(0.95rem,2vw,1.1rem)] max-w-4xl mx-auto px-6">
            Working with people has always been my passion, and through this platform, 
            I aim to extend the valuable lessons I've learned and implemented on my 
            personal journey to success.
          </p>
        </motion.div>
      </div>

      {/* 2. Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {/* 
             ADDED: pr-6 (mobile) and md:pr-20 (desktop) 
             This creates the "join" space without breaking the loop logic
          */}
          <img
            src="/new-images/people-he-met.png"
            alt="People met in journey"
            className="h-[45vh] md:h-[55vh] lg:h-[60vh] w-auto object-contain flex-shrink-0 pr-6 md:pr-20"
          />
          {/* Duplicate copy for infinite loop */}
          <img
            src="/new-images/people-he-met.png"
            alt="People met in journey"
            className="h-[45vh] md:h-[55vh] lg:h-[60vh] w-auto object-contain flex-shrink-0 pr-6 md:pr-20"
          />
        </div>
      </div>

      {/* 3. Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 70s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PeopleHeMet;