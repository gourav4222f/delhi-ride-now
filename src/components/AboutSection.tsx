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
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={aboutCar}
            alt="Our premium taxi fleet"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-5 -right-5 bg-card rounded-xl shadow-xl p-4 flex items-center gap-3">
            <div className="bg-primary/10 rounded-full p-3">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-foreground">1000+</p>
              <p className="text-muted-foreground text-sm">Happy Journeys</p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-5">
            Your Trusted Travel Partner in <span className="text-primary">Delhi</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We provide safe, reliable, and affordable taxi services across Delhi NCR and major outstation destinations. With professional drivers, well-maintained vehicles, and 24/7 customer support, we ensure a comfortable and hassle-free travel experience for individuals, families, and corporate clients.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.text}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <h.icon className="w-4 h-4 text-primary flex-shrink-0" />
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
