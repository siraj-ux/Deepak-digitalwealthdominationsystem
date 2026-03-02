import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const testimonials = [
  { name: "Mohamed Ali", reviews: "1 review", country: "IN", rating: 5, date: "Apr 15, 2024", text: "Made blockchain simple to understand", image: "/testimonial-images/p1 (1).png" },
  { name: "Omkar Shivde", reviews: "5 reviews", country: "IN", rating: 5, date: "Apr 15, 2024",  text: "“Helped me see real-world applications.", image: "/testimonial-images/p1 (7).png" },
  { name: "Himesh Singh", reviews: "1 review", country: "IN", rating: 5, date: "Apr 15, 2024",  text: "Become rich at very young age. It is commendable.", image: "/testimonial-images/p1 (3).png" },
  { name: "boby raj", reviews: "1 review", country: "IN", rating: 4, date: "Apr 15, 2024",  text: "It seems a journey. Your guidence is great. You make the journey very enjoyable and easy", image: "/testimonial-images/p1 (4).png" },
  { name: "Vinay B A", reviews: "1 review", country: "IN", rating: 5, date: "Apr 15, 2024",  text: "Excellent intro without hype.", image: "/testimonial-images/p1 (5).png" },
  { name: "vinay", reviews: "1 review", country: "NL", rating: 4, date: "Mar 10, 2024", text: "Mr Deepak is having good knowledge about crypto and conducts webinar so that all the attendees will get the knowledge of crypto metaverse NFT etc", image: "/testimonial-images/p1 (6).png" },
];

const Card: React.FC<{ t: (typeof testimonials)[number] }> = ({ t }) => (
  <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        {/* Profile Image with Fallback logic */}
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-muted border border-border/50 shadow-sm">
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image path is wrong: shows Initial Letter
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold">${t.name.charAt(0)}</div>`;
            }}
          />
        </div>
        <div>
          <h4 className="font-poppins font-semibold text-foreground leading-tight">{t.name}</h4>
          <p className="text-[11px] font-poppins text-foreground/60">
            {t.reviews} · {t.country}
          </p>
        </div>
      </div>
      <span className="text-[10px] font-poppins text-foreground/40 uppercase tracking-tighter">{t.date}</span>
    </div>

    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < t.rating ? "fill-success text-success" : "fill-muted text-muted"}`}
        />
      ))}
    </div>

    <p className="font-poppins text-sm text-foreground/70 leading-relaxed flex-grow">{t.text}</p>

    <div className="mt-4 pt-4 border-t border-border/5">
      <p className="text-[10px] font-poppins text-foreground/40 italic">Date of experience: {t.date}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#register";
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      {/* Clean style tag to avoid Vite compilation errors */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-montserrat font-bold text-[clamp(1.5rem,4vw,3rem)] text-foreground leading-tight">
            Listen from the participants who transformed
          </h2>
          <p className="font-montserrat font-bold text-[clamp(1.1rem,3vw,1.75rem)] text-foreground mt-1">
            their careers with Deepak
          </p>
          <p className="font-poppins text-foreground/60 mt-2">And, these are just some of many!</p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 px-4 py-1"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[85%] snap-start">
                <Card t={t} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop/Tablet: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Card t={t} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mt-12"
        >
          <Button
            onClick={scrollToRegister}
            className="h-12 sm:h-14 px-8 sm:px-12 text-base sm:text-lg font-montserrat font-bold
                       bg-gradient-to-r from-accent to-accent/80 text-white rounded-full 
                       shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join now for ₹99
          </Button>
          <p className="font-poppins text-[13px] sm:text-sm font-bold text-accent">
            Claim FREE bonuses worth ₹29,997
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;