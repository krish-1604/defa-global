import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Button = ({ onClick, children = "Read More", className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative flex items-center justify-center px-4 py-2 rounded-lg w-full sm:w-[60%] max-w-[212px] whitespace-nowrap overflow-hidden ${className}`}
      style={{ backgroundColor: "#004884" }}
    >
      {/* Background overlay for color change */}
      <motion.div
        variants={{
          rest: { x: "-100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 rounded-lg"
        style={{ backgroundColor: "#D4B873" }}
      />

      {/* Text */}
      <motion.span
        variants={{
          rest: { color: "#D4B873", zIndex: 10 },
          hover: { color: "#004884", zIndex: 10 },
        }}
        className="relative z-10 mr-2 text-sm font-semibold sm:text-base md:text-lg"
      >
        {children}
      </motion.span>

      {/* Arrow - starts behind text, glides forward on hover */}
      <motion.span
        variants={{
          rest: {
            x: 0,
            opacity: 1,
            color: "#D4B873",
            zIndex: 5,
          },
          hover: {
            x: 0,
            opacity: 1,
            color: "#004884",
            zIndex: 10,
          },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex-shrink-0"
      >
        <ArrowRight size={18} />
      </motion.span>
    </motion.button>
  );
};

export default Button;
