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
    <section className="py-20 bg-muted/50" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose Our Taxi Service?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border text-center"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
