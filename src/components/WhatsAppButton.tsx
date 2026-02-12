import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,49%)] text-card w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="w-7 h-7" />
  </motion.a>
);

export default WhatsAppButton;
