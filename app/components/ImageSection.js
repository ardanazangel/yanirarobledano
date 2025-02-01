'use client'

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);



export default function ImageSection() {
    useEffect(()=>{
            gsap.fromTo(
              ".img-banner",
              { y: "-25%" }, // Estado inicial
              {
                y: "25%", // Animación hacia la posición final
                scrollTrigger: {
                  trigger: ".banner-image", // Activa la animación por cada elemento
                  start: "top 100%", // Cuando el elemento entra al 80% del viewport
                  end: "bottom 0%", // Finaliza cerca del centro
                  scrub: true, // Sin scrub, la animación ocurre una vez
                },
              }
            );
    })
    return(
        <>
            <div className="banner-image">
                <div className="img">
                    <Image className="img-banner" 
                    src="/imgs/consejito-de-la-yaya/foto_mupi.jpg" 
                    width={2560}
                    height={1920}

                    />
                    
                </div>
            </div>
        </>
    )
}