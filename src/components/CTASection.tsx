import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Phone, ShieldCheck, Headphones, Users, ArrowRight } from "lucide-react";

const badges = [
  { icon: Headphones, text: "24/7 Support" },
  { icon: ShieldCheck, text: "Secure Booking" },
  { icon: Users, text: "Trusted by 1000+" },
];

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book" className="py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-5">
            Book Your Ride Today –{" "}
            <span className="text-primary">Safe, Reliable & Affordable</span>
          </h2>

          <p className="text-secondary-foreground/60 text-lg max-w-xl mx-auto mb-10">
            Experience premium travel at affordable prices. Your comfort is our priority.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:brightness-110 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-5 h-5" /> Book Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary-foreground/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2.5 text-secondary-foreground/70">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <b.icon className="w-4 h-4 text-primary" />
                </div>
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
