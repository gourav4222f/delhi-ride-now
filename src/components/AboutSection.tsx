import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ShieldCheck, IndianRupee, SparkleIcon, Timer, CheckCircle } from "lucide-react";
import aboutCar from "@/assets/about-car.jpg";

const highlights = [
  { icon: Clock, text: "24/7 Availability" },
  { icon: ShieldCheck, text: "Verified Drivers" },
  { icon: IndianRupee, text: "Transparent Pricing" },
  { icon: SparkleIcon, text: "Clean & Sanitized" },
  { icon: Timer, text: "On-Time Pickup" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={aboutCar}
              alt="Our premium taxi fleet"
              className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-border/50"
          >
            <div className="bg-primary/10 rounded-xl p-3">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-foreground">1000+</p>
              <p className="text-muted-foreground text-sm">Happy Journeys</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Your Trusted Travel Partner in <span className="text-primary">Delhi</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-base">
            We provide safe, reliable, and affordable taxi services across Delhi NCR and major outstation destinations. With professional drivers, well-maintained vehicles, and 24/7 customer support, we ensure a comfortable and hassle-free travel experience for individuals, families, and corporate clients.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.text}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <h.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-sm font-medium">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
