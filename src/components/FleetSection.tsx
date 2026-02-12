import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sedanImg from "@/assets/sedan.jpg";
import innovaImg from "@/assets/innova.jpg";
import scorpioImg from "@/assets/scorpio.jpg";
import tempoImg from "@/assets/tempo-traveller.jpg";

const vehicles = [
  {
    name: "Sedan",
    sub: "Swift Dzire / Etios",
    img: sedanImg,
    seats: "4+1",
    bags: "2 Bags",
    price: "₹12/km",
    tag: "SEDAN",
  },
  {
    name: "SUV",
    sub: "Innova / Ertiga",
    img: innovaImg,
    seats: "6+1",
    bags: "4 Bags",
    price: "₹16/km",
    tag: "SUV",
  },
  {
    name: "Luxury SUV",
    sub: "Scorpio / Premium",
    img: scorpioImg,
    seats: "6+1",
    bags: "4 Bags",
    price: "₹22/km",
    tag: "PREMIUM",
  },
  {
    name: "Tempo Traveller",
    sub: "12-18 Seater Coach",
    img: tempoImg,
    seats: "12-18",
    bags: "8+ Bags",
    price: "₹25/km",
    tag: "GROUP",
  },
];

const FleetSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vehicles" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Fleet</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Choose Your Ride</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Select from our range of well-maintained vehicles for a comfortable journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative fleet-swiper"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".fleet-next",
              prevEl: ".fleet-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-14"
          >
            {vehicles.map((v) => (
              <SwiperSlide key={v.name}>
                <div className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={v.img}
                      alt={v.name}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                      {v.price}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4 border-b border-border/50 pb-4">
                      <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {v.seats}</span>
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {v.bags}</span>
                      <span className="bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full text-[10px] tracking-wide">{v.tag}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">{v.name}</h3>
                    <p className="text-muted-foreground text-sm mb-5">{v.sub}</p>
                    <a
                      href="tel:+919876543210"
                      className="block bg-secondary text-secondary-foreground text-sm font-semibold px-5 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center hover:shadow-lg hover:shadow-primary/20"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button className="fleet-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden lg:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="fleet-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden lg:flex">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSection;
