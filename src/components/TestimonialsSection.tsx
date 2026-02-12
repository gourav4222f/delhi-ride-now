import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-background" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative testimonials-swiper"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-card rounded-3xl p-10 sm:p-14 shadow-sm border border-border/50 text-center relative">
                  <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{t.text}"
                  </p>
                  <p className="font-heading font-bold text-foreground">— {t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="testimonial-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="testimonial-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
