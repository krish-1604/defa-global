import { useEffect, useState } from 'react'
export default function GoldenCircle(){
    const [leftOffset, setLeftOffset] = useState('-120vw'); 
    
      useEffect(() => {
        const getBreakpoint = () => {
          const width = window.innerWidth;
          return width < 640 ? 'base' :
                 width < 768 ? 'sm' :
                 width < 1024 ? 'md' :
                 width < 1280 ? 'lg' : 'xl';
        };
    
        const breakpoints = {
          base: '-120vw',
          sm: '-100vw',
          md: '-80vw',
          lg: '-70vw',
          xl: '-55vw',
        };
    
        const handleResize = () => {
          const current = getBreakpoint();
          setLeftOffset(breakpoints[current]);
        };
    
        handleResize(); 
        window.addEventListener('resize', handleResize); 
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <div
          className="absolute z-10 bg-[rgba(212,184,115,0.9)] rounded-full"
          style={{
            width: '100vw',
            height: '100vw',
            top: '-20vw',
            left: leftOffset,
          }}
        ></div>
    );
}