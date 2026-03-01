import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ClientResultsVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. Automatically pause video when scrolling away
  useEffect(() => {
    const options = { threshold: 0.2 };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  // 2. Optimized Play Logic
  const handlePlayAction = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-muted/20 overflow-hidden relative border-y border-border/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
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

        <div className="max-w-3xl mx-auto relative group">
          {/* Backdrop 10X */}
          <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 select-none opacity-[0.05] z-0">
             <span className="font-montserrat font-black text-[clamp(8rem,20vw,16rem)] text-noir uppercase">10X</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 p-1 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent/30 shadow-2xl cursor-pointer"
            onClick={handlePlayAction}
          >
            <div className="relative bg-noir rounded-[1.4rem] md:rounded-[1.9rem] overflow-hidden aspect-video">
              
              {/* SINGLE CENTERED PLAY BUTTON: Only shows when not playing */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-noir/40 z-20 transition-colors group-hover:bg-noir/50"
                  >
                     <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
                     >
                        {/* Play Icon Triangle */}
                        <div className="w-0 h-0 border-t-[12px] md:border-t-[15px] border-t-transparent border-l-[20px] md:border-l-[25px] border-l-noir border-b-[12px] md:border-b-[15px] border-b-transparent ml-2"></div>
                     </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <video 
                ref={videoRef}
                /* 
                   CRITICAL: Only show controls when playing. 
                   This prevents the browser from showing its own play button on top of ours.
                */
                controls={isPlaying} 
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover block relative z-10"
                poster="/video-thumbnail.jpg" 
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-4 left-10 right-10 h-6 bg-noir/5 blur-[30px] rounded-full z-0" />
        </div>
      </div>
    </section>
  );
};

export default ClientResultsVideo;