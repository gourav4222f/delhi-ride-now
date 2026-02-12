import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Excellent service! The driver was punctual and the car was very clean. Highly recommended for airport transfers.",
    name: "Rahul Sharma",
    location: "Delhi",
  },
  {
    text: "Booked an outstation trip to Jaipur. Smooth ride, affordable pricing, and great support throughout the journey.",
    name: "Priya Verma",
    location: "Noida",
  },
  {
    text: "We use their corporate travel service and it's been consistently excellent. Professional drivers every time.",
    name: "Amit Gupta",
    location: "Gurgaon",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background" ref={ref}>
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-foreground text-lg italic leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>
              <p className="font-heading font-bold text-foreground">
                — {testimonials[current].name}
              </p>
              <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
