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
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium taxi service in Delhi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/40" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
        >
          ⭐ Trusted by 1000+ Happy Customers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-secondary-foreground leading-[1.1] max-w-2xl"
        >
          Reliable & Affordable{" "}
          <span className="text-primary">Taxi Service in Delhi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-secondary-foreground/70 text-lg sm:text-xl max-w-xl leading-relaxed"
        >
          24/7 Available • Airport Transfers • Outstation Trips • Corporate Travel
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:brightness-110 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            <CalendarCheck className="w-5 h-5" /> Book Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary-foreground/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-10 mt-14"
        >
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
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
