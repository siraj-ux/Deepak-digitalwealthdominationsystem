import { motion } from "framer-motion";

const AboutInstructor = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-noir to-primary flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-4 sm:space-y-6"
        >
          {/* Coach Name */}
          <h2
            className="font-montserrat font-extrabold text-khaki
                       text-[clamp(2rem,6vw,4rem)] leading-tight"
          >
            Deepak Choudhary
          </h2>

          {/* Subheading */}
          <p
            className="font-poppins text-[clamp(1.1rem,2.5vw,1.5rem)]
                       text-white font-light max-w-3xl mx-auto"
          >
            Successful Entrepreneur & Crypto Investing Expert
          </p>

          {/* Supporting Line */}
          <p
            className="font-poppins text-[clamp(0.9rem,2vw,1.1rem)]
                       text-white/80 max-w-2xl mx-auto"
          >
            More than{" "}
            <span className="font-semibold text-khaki">5000+</span> people have been
            trained by Deepak with a rating of{" "}
            <span className="font-semibold text-khaki">4.8★ and above</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInstructor;
