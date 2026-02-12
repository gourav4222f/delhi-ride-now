import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Phone, ShieldCheck, Headphones, Users } from "lucide-react";

const badges = [
  { icon: Headphones, text: "24/7 Support" },
  { icon: ShieldCheck, text: "Secure Booking" },
  { icon: Users, text: "Trusted by 1000+" },
];

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book" className="py-20 bg-secondary" ref={ref}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
            Book Your Ride Today –{" "}
            <span className="text-primary">Safe, Reliable & Affordable</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:brightness-110 transition shadow-lg shadow-primary/30"
            >
              <CalendarCheck className="w-5 h-5" /> Book Now
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-secondary-foreground/20 transition"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-secondary-foreground/70">
                <b.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
