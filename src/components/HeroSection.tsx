import { motion } from "framer-motion";
import { CalendarCheck, Phone, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: CheckCircle, title: "Verified Drivers", sub: "Police Verified" },
  { icon: CheckCircle, title: "Best Prices", sub: "No Hidden Charges" },
  { icon: CheckCircle, title: "24/7 Support", sub: "Always Available" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium taxi service in Delhi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
        >
          ⭐ Trusted by 1000+ Happy Customers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-foreground leading-tight max-w-2xl"
        >
          Reliable & Affordable{" "}
          <span className="text-primary">Taxi Service in Delhi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-secondary-foreground/70 text-lg max-w-xl"
        >
          24/7 Available • Airport Transfers • Outstation Trips • Corporate Travel
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:brightness-110 transition shadow-lg shadow-primary/30"
          >
            <CalendarCheck className="w-5 h-5" /> Book Now →
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-secondary-foreground/20 transition"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-8 mt-12"
        >
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <b.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-secondary-foreground font-semibold text-sm">{b.title}</p>
                <p className="text-secondary-foreground/50 text-xs">{b.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
