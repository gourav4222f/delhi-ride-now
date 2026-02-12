import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 98765 43210
            </a>
            <span>✉ info@delhipremiumtaxi.in</span>
          </div>
          <span>24/7 Availability • Trusted by 1000+ Customers</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-secondary/95 backdrop-blur-md shadow-lg"
            : "bg-secondary/80 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-heading text-xl font-bold text-primary-foreground">
            <span className="text-primary">Delhi</span> Premium Taxi
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-secondary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-secondary overflow-hidden"
            >
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-secondary-foreground/80 hover:text-primary py-2 px-3 rounded-md transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm text-center mt-2"
                >
                  Book Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
