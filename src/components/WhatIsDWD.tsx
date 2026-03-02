import React from "react";
import { motion } from "framer-motion";

const WhatIsDWD = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden relative border-t border-border/40">
      
      {/* Background Artistic Text */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none hidden lg:block">
        <span className="font-montserrat font-black text-[250px] leading-none text-foreground">
          SUCCESS
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* SECTION 1: What is Digital Wealth Domination and why Deepak? */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-20 md:mb-28">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
               <h2 className="font-montserrat font-black text-transparent leading-none select-none text-[clamp(3rem,8vw,6rem)] opacity-10 absolute -top-10 -left-4"
                   style={{ WebkitTextStroke: "1px #C5A358" }}>
                 BLUEPRINT
               </h2>
               <h2 className="font-montserrat font-bold text-foreground text-[clamp(2rem,5vw,3.2rem)] leading-tight relative z-10">
                 What is <span className="text-accent">Digital Wealth</span> <br /> Domination and why Deepak?
               </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <p className="font-poppins text-foreground/90 text-lg md:text-xl font-light leading-relaxed border-l-4 border-accent pl-6">
                Digital Wealth Domination is the <strong>Blueprint for the New Financial Frontier.</strong> Master the high-growth assets that the traditional banking system doesn't want you to understand.
              </p>
              {/* Removed the 'Experts disappear overnight' paragraph from here */}
            </motion.div>
          </div>

          {/* SECTION 2: Deepak’s Success in the Crypto Markets */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="font-montserrat font-extrabold text-foreground text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
                Deepak’s Success in the <span className="text-accent">Crypto Markets</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Early Entry & Restaurant Dream */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted/30 backdrop-blur-sm border border-border/50 p-8 md:p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-center"
              >
                <p className="font-poppins text-foreground/90 text-lg leading-relaxed font-light">
                  By entering the crypto space early, Deepak built a strong digital asset portfolio, 
                  gaining financial independence and multiplying wealth through strategic investments. 
                  And by doing so, Deepak fulfilled a dream - <strong>owning a beachfront restaurant in Goa</strong>, 
                  creating a steady income and a lifestyle business he loves.
                </p>
              </motion.div>

              {/* Real Estate & Diversification */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center px-4 md:px-8"
              >
                <p className="font-poppins text-foreground text-xl md:text-2xl font-medium leading-relaxed italic border-l-4 border-accent/40 pl-8">
                  He diversified his into high-value real estate, securing
                  long-term passive income, capital growth, and a solid foundation for 
                  generational wealth.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsDWD;