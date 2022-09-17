// import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import React from 'react'

const Scroll = ({children, delay, origin}:{children:any, delay:any, origin:any}) => {
    
    const cardRef:any = useRef();
useEffect(() => {
    if(cardRef.current) {
        ScrollReveal().reveal(cardRef.current, {
            reset: false,
            delay: delay,
            origin: origin,
            opacity: 0,
            distance: "20px",
            duration: 1000
        });
    }
}, []);
  return (
    <section ref={cardRef}>{children}</section>
  )
}

export default Scroll

