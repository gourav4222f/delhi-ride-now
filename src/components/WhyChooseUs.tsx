import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IndianRupee, ShieldCheck, UserCheck, Headphones, MousePointerClick, Eye } from "lucide-react";

const features = [
  { icon: IndianRupee, title: "Best Price Guarantee", desc: "Competitive rates with no hidden charges" },
  { icon: ShieldCheck, title: "Safe & Sanitized", desc: "Regularly cleaned and sanitized vehicles" },
  { icon: UserCheck, title: "Experienced Drivers", desc: "Professional, courteous and verified" },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Always available to help you" },
  { icon: MousePointerClick, title: "Easy Booking", desc: "Book in seconds via call or online" },
  { icon: Eye, title: "No Hidden Charges", desc: "What you see is what you pay" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose Our Taxi Service?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 text-center hover:-translate-y-2"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
