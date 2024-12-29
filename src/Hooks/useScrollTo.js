import { useRef } from 'react';

// Custom hook to scroll to a particular element
export function useScrollTo() {
    const elementRef = useRef(null);

    const scrollTo = () => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // const handleItemClick = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    //   };

    return [elementRef, scrollTo];
};

