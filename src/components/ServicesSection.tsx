import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, MapPin, Navigation, Briefcase } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    features: ["On-time pickup & drop", "Flight tracking", "Fixed pricing"],
  },
  {
    icon: MapPin,
    title: "Local City Ride",
    features: ["Full day / Half day packages", "Flexible hours", "Affordable rates"],
  },
  {
    icon: Navigation,
    title: "Outstation Trip",
    features: ["One-way & round trip", "All major cities covered", "Comfortable travel"],
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    features: ["Monthly billing", "Dedicated support", "Professional chauffeurs"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-muted/50" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Our Taxi Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
              <ul className="space-y-2 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors w-full text-center"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
