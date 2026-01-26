import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Registrar el plugin de GSAP
gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export const animatePageIn = () => {
    const container = document.getElementById("container");

    if (container) {
        gsap.to(container, {
            opacity: 1,
            duration: .8,
            ease: "InOutQuart", // Aquí usas el easing personalizado
        });
    }
};

export const animatePageOut = (href, router) => {
    const container = document.getElementById("container");

    if (container) {
        gsap.to(container, {
            opacity: 0,
            duration: 0.6,
            ease: "InOutQuart", // Puedes usar el mismo easing personalizado
            onComplete: () => {
                router.push(href); // Navegar al completar la animación
            },
        });
    } else {
        // Fallback: Navegar directamente si no existe el contenedor
        router.push(href);
    }
};
