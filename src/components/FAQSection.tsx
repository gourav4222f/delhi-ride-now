import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How can I book a taxi?", a: "You can book a taxi by calling us at +91 98765 43210 or by clicking the 'Book Now' button on our website. We're available 24/7 for instant bookings." },
  { q: "Do you provide outstation trips?", a: "Yes! We provide outstation trips to all major cities including Jaipur, Agra, Chandigarh, Dehradun, Shimla, Manali, and many more destinations." },
  { q: "Are your drivers verified?", a: "Absolutely. All our drivers are police-verified, professionally trained, and have years of experience in providing safe travel services." },
  { q: "Is pricing fixed or metered?", a: "We offer transparent, fixed pricing based on your route and vehicle type. There are no hidden charges or surge pricing." },
  { q: "Do you offer corporate billing?", a: "Yes, we provide corporate billing with monthly invoicing, dedicated account management, and customized travel solutions for businesses." },
  { q: "Is airport pickup available 24/7?", a: "Yes, our airport transfer service operates 24/7 with flight tracking to ensure on-time pickups regardless of delays." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-5 shadow-sm"
            >
              <AccordionTrigger className="text-foreground font-heading font-semibold text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
