import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import himachalImg from "@/assets/himachal-tours.jpg";
import rajasthanImg from "@/assets/rajasthan-tours.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const tours = [
  {
    img: rajasthanImg,
    title: "Rajasthan Heritage Tour",
    description: "Explore the majestic forts, vibrant culture, and golden deserts of Rajasthan. Visit Jaipur, Udaipur, Jodhpur & more.",
    duration: "5-7 Days",
    tag: "POPULAR",
  },
  {
    img: himachalImg,
    title: "Himachal Adventure Trip",
    description: "Escape to the serene hills of Shimla, Manali, and Dharamshala. Perfect for families and adventure lovers.",
    duration: "4-6 Days",
    tag: "TRENDING",
  },
  {
    img: heroBg,
    title: "Golden Triangle Tour",
    description: "The classic Delhi–Agra–Jaipur circuit. Experience the Taj Mahal, historic forts, and rich heritage.",
    duration: "3-4 Days",
    tag: "BEST SELLER",
  },
];

const TourPackages = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tours" className="py-24 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Explore India</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Popular Tour Packages
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Handcrafted travel experiences with comfortable rides and expert drivers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                  {tour.tag}
                </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-sm font-medium">
                  <MapPin className="w-4 h-4" /> {tour.duration}
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {tour.description}
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full justify-center hover:shadow-lg hover:shadow-primary/20 group/btn"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
