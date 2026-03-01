import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ClientResultsVideo = () => {
  // Create a reference to the video element
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport
      threshold: 0, // trigger as soon as even 1 pixel leaves/enters
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        // If the video is NOT intersecting (scrolled out of view)
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-white to-muted/20 overflow-hidden relative border-y border-border/40">
      
      {/* 1. Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 2. Heading Section */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-10">
          <motion.h4 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-montserrat font-bold text-accent uppercase tracking-[0.3em] text-[10px] mb-2"
          >
            Social Proof
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-extrabold text-noir text-[clamp(1.6rem,4vw,2.5rem)] leading-tight"
          >
            How Deepak's Clients Turned <br className="hidden md:block" /> 
            Knowledge into <span className="text-accent underline underline-offset-4 decoration-noir/10">Profits</span>
          </motion.h2>
        </div>

        {/* 3. The Video Frame Design */}
        <div className="max-w-3xl mx-auto relative group">
          
          {/* Decorative "10X" Backdrop */}
          <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 select-none opacity-[0.05] z-0">
             <span className="font-montserrat font-black text-[clamp(8rem,20vw,16rem)] text-noir uppercase">
               10X
             </span>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-1 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent/30 shadow-2xl"
          >
            <div className="relative bg-white rounded-[1.4rem] md:rounded-[1.9rem] overflow-hidden">
              
              {/* Play Button Indicator (Decorative) */}
              <div className="absolute inset-0 flex items-center justify-center bg-noir/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                 <div className="w-14 h-14 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                 </div>
              </div>

              {/* Video Player - Reference Added Here */}
              <video 
                ref={videoRef}
                controls 
                className="w-full aspect-video object-cover block relative z-0"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </motion.div>

          {/* Depth Shadow */}
          <div className="absolute -bottom-4 left-10 right-10 h-6 bg-noir/5 blur-[30px] rounded-full z-0" />
        </div>
      </div>
    </section>
  );
};

export default ClientResultsVideo;