import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg text-background mb-4">
            <span className="text-primary">Delhi</span> Premium Taxi
          </h3>
          <p className="text-background/60 text-sm leading-relaxed">
            Your trusted partner for reliable and affordable taxi services across Delhi NCR.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Vehicles", "Testimonials", "FAQ"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-background/60 hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>Airport Transfer</li>
            <li>Local City Ride</li>
            <li>Outstation Trip</li>
            <li>Corporate Travel</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-background/60">
              <Phone className="w-4 h-4 text-primary" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2 text-background/60">
              <Mail className="w-4 h-4 text-primary" /> info@delhipremiumtaxi.in
            </li>
            <li className="flex items-start gap-2 text-background/60">
              <MapPin className="w-4 h-4 text-primary mt-0.5" /> Delhi NCR, India
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/40 text-sm">
        © 2025 Delhi Premium Taxi. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
