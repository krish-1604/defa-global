
import { ArrowRight } from "lucide-react";

const Button = ({ onClick, children = "Read More", className = "" }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 bg-darkblue rounded-lg w-full sm:w-[60%] max-w-[212px] whitespace-nowrap transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <span className="text-sm sm:text-base md:text-lg text-golden font-hk">
        {children}
      </span>
      <ArrowRight className="text-golden" />
    </button>
  );
};

export default Button;