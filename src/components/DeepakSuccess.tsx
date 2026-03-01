import React from "react";
import { motion } from "framer-motion";

const DeepakSuccess = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative border-y border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Artistic Backdrop Number */}
        <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
           <span className="font-montserrat font-black text-[300px] leading-none text-noir">SUCCESS</span>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-montserrat font-extrabold text-noir text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Deepak’s Success in the <span className="text-khaki">Crypto Markets</span>
            </h2>
            <div className="w-16 h-1 bg-noir mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* UPDATED: Background matches the AboutInstructor gradient */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-noir to-primary text-white p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-6"
            >
              <p className="font-poppins text-lg leading-relaxed font-light">
                By entering the crypto space early, Deepak built a strong digital asset portfolio, 
                gaining financial independence and multiplying wealth through strategic investments. 
                And by doing so, Deepak fulfilled a dream - <strong>owning a beachfront restaurant in Goa</strong>, 
                creating a steady income and a lifestyle business he loves.
              </p>
            </motion.div>

            {/* Side 2 (Diversification) */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-6"
            >
               <h4 className="font-montserrat font-bold text-khaki uppercase tracking-[0.2em] text-sm">Diversification</h4>
               <p className="font-poppins text-noir text-xl md:text-2xl font-medium leading-relaxed italic border-l-4 border-khaki pl-8">
                  He diversified his assets into high-value real estate, securing 
                  long-term passive income, capital growth, and a solid foundation for 
                  generational wealth.
               </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeepakSuccess;