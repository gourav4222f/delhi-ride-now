import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, MapPin, Navigation, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNav, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Our Taxi Services
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative services-swiper"
        >
          <Swiper
            modules={[SwiperNav, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".services-next",
              prevEl: ".services-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-14"
          >
            {services.map((s) => (
              <SwiperSlide key={s.title}>
                <div className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/20 h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">{s.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="text-muted-foreground text-sm flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full text-center hover:shadow-lg hover:shadow-primary/20"
                  >
                    Book Now
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="services-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden lg:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="services-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden lg:flex">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
