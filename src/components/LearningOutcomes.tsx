import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Video, MessageCircle, FileText, CheckCircle2, Zap, ShieldCheck, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const outcomes = [
  { 
    icon: Video, 
    title: "Live Zoom Sessions", 
    description: "This 2-day workshop is packed with in-depth training, technical demonstrations, and practical exercises.", 
    value: "Worth Rs. 17,997" 
  },
  { 
    icon: MessageCircle, 
    title: "WhatsApp Coaching", 
    description: "Access a private WhatsApp community for 24/7 support & guidance from Deepak and his team.", 
    value: "Worth Rs. 6,997" 
  },
  { 
    icon: FileText, 
    title: "Personalized Action Plan Template", 
    description: "Develop a customized investment plan based on your goals & risk tolerance.", 
    value: "Priceless!" 
  },
];

const domains = ["Metaverse", "NFT", "DeFi", "Blockchain", "P2E", "R2E"];

const agenda = [
  {
    num: "01",
    day: "Day 1",
    title: "Blockchain & Digital Asset Foundations",
    points: [
      "Core blockchain principles & decentralization",
      "Wallet setup (custodial vs non-custodial)",
      "Keys, backups, and basic security",
      "Scam patterns & red flags awareness",
    ],
  },
  {
    num: "02",
    day: "Day 2",
    title: "Applied Crypto & Diversification Concepts",
    points: [
      "Understanding NFTs, DeFi & Metaverse use-cases",
      "Risk awareness & position sizing basics",
      "Diversification frameworks",
      "Personalized learning & action roadmap",
    ],
  },
];

const LearningOutcomes = () => {
  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#register";
  };

  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? {} : { opacity: 0, y: 22 };
  const animate = prefersReducedMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4">
        
        {/* 1. Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="font-montserrat text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Exclusive Online Masterclass
            </span>
          </motion.div>

          <motion.h2
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat font-black text-foreground text-[clamp(1.85rem,6vw,3.5rem)] leading-[1.1] mb-6"
          >
            What will you learn in <br className="hidden md:block" />
            <span className="text-accent underline underline-offset-8 decoration-accent/20">
              2 Intensive Days?
            </span>
          </motion.h2>

          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="font-poppins text-foreground/80 text-[clamp(1rem,2.5vw,1.25rem)] font-light max-w-3xl mx-auto leading-relaxed">
              Master the Art of Crypto Investing through <br className="hidden sm:block" />
              <span className="font-semibold text-foreground">Digital Wealth Domination™</span>
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-border" />
              <p className="font-montserrat text-[10px] md:text-xs font-medium text-foreground/50 uppercase tracking-[0.3em]">
                2-Day Online Workshop by Deepak Choudhary
              </p>
              <div className="h-[1px] w-8 bg-border" />
            </div>
          </motion.div>
        </div>

        {/* 2. Domains Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-20 max-w-5xl mx-auto">
          {domains.map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-5 py-2.5 bg-white border border-border shadow-sm rounded-2xl flex items-center gap-2 group hover:border-accent/50 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-montserrat font-bold text-[10px] md:text-xs uppercase tracking-wider text-foreground/70">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 3. The Curriculum Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {agenda.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-8 md:p-12 relative group shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-7xl font-montserrat font-black text-muted/20 select-none group-hover:text-accent/10 transition-colors">
                {block.num}
              </div>
              <div className="relative z-10">
                <span className="font-montserrat font-bold text-accent text-xs uppercase tracking-widest block mb-4">
                  Curriculum {block.day}
                </span>
                <h4 className="font-montserrat font-bold text-2xl text-foreground mb-8 leading-tight">
                  {block.title}
                </h4>
                <ul className="space-y-4">
                  {block.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                         <ShieldCheck className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="font-poppins text-foreground/80 leading-relaxed text-sm md:text-base">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. The Assets & Pricing Header */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-bold text-[clamp(1.1rem,3vw,1.6rem)] text-foreground mb-6">
               Everything you get when you join:
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-poppins">
                <span className="line-through text-destructive font-bold text-lg opacity-70">
                    Worth Rs. 29,997
                </span>
                <span className="h-6 w-px bg-border hidden sm:block" />
                <span className="text-success font-black text-2xl md:text-3xl bg-success/10 px-6 py-2 rounded-2xl flex items-center gap-2">
                    <Trophy className="w-6 h-6" /> For only Rs. 99
                </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border/60 rounded-3xl p-8 flex flex-col text-center hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  <outcome.icon className="w-8 h-8" />
                </div>
                <h4 className="font-montserrat font-bold text-lg mb-4 text-foreground tracking-tight">
                  {outcome.title}
                </h4>
                <p className="font-poppins text-foreground/60 text-sm leading-relaxed mb-8 flex-grow">
                  {outcome.description}
                </p>
                <div className="pt-6 border-t border-border mt-auto">
                    <span className={`font-montserrat font-bold text-xs tracking-wider uppercase ${outcome.value === "Priceless!" ? "text-accent" : "text-destructive/60"}`}>
                        {outcome.value}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. Enrollment Final CTA */}
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[2.5rem] p-10 md:p-14 text-center bg-foreground text-background relative overflow-hidden shadow-2xl"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="space-y-3">
                <h3 className="font-montserrat font-black text-2xl md:text-4xl text-white leading-tight">
                    Start Your Domination <br className="hidden md:block" /> Today for only Rs. 99
                </h3>
                <p className="font-poppins text-accent font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                    Access Total Resources Worth Rs. 29,997
                </p>
            </div>

            {/* Mobile-Fixed Button: No overflow + scale fix */}
            <Button
              onClick={scrollToRegister}
              className="h-14 sm:h-16 md:h-20 px-6 sm:px-12 md:px-20 w-full sm:w-auto text-sm sm:text-base md:text-lg font-montserrat font-black uppercase tracking-widest
                         bg-accent hover:bg-accent/90 text-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started Now
            </Button>

            <div className="flex items-center gap-4 text-background/40 font-poppins text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Enrollment closes today
                </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningOutcomes;