import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase } from "lucide-react";
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
    <section id="vehicles" className="py-20 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Fleet</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Choose Your Ride</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Select from our range of well-maintained vehicles for a comfortable journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
                  {v.price}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3 border-b border-border pb-3">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {v.seats}</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {v.bags}</span>
                  <span className="bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded text-[10px]">{v.tag}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{v.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{v.sub}</p>
                <a
                  href="tel:+919876543210"
                  className="block bg-secondary text-secondary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
