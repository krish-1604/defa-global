"use client";
import { motion } from "framer-motion";

export default function StickyEnquire({ onContactClick }) {
  return (
    <div className="fixed right-0 top-[55%] z-[999] hidden md:block">
      <motion.button
        initial={{ marginRight: "-0.5rem" }}
        whileHover={{ marginRight: "0rem" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-golden text-darkblue font-semibold px-6 py-2 rounded-l cursor-pointer rotate-90 origin-top-right"
        onClick={onContactClick}
      >
        <span className="-rotate-180 inline-block font-hk text-[120%]">
          Enquire Now
        </span>
      </motion.button>
    </div>
  );
}
