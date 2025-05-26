export default function GoldenBorderButton({ children, className = "", ...props }) {
  return (
    <button
      className={`
        px-6 py-4 
        bg-white 
        border-2 border-golden 
        rounded-2xl 
        text-darkblue 
        font-semibold 
        text-center 
        hover:bg-golden
        hover:text-white 
        transition-all 
        duration-300 
        focus:outline-none 
        focus:ring-2 
        focus:ring-golden 
        focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}