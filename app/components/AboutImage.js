'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  '/imgs/consejito-de-la-yaya/cami-frontal.jpeg',
  '/imgs/consejito-de-la-yaya/cami-trasera.jpeg',
  '/imgs/consejito-de-la-yaya/foto_mupi.jpg',
  '/imgs/consejito-de-la-yaya/foto-movil1.jpg',
  '/imgs/consejito-de-la-yaya/cami-frontal.jpeg',
  '/imgs/consejito-de-la-yaya/cami-frontal.jpeg',
  '/imgs/consejito-de-la-yaya/cami-frontal.jpeg',

];

export default function AboutImage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const imageElements = containerRef.current.children;

    // Asegurar que la primera imagen siempre sea visible
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].style.opacity = i === 0 ? '1' : '0';
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const animationHeight = window.innerHeight; // 100vh

      if (scrollPosition > animationHeight) return;

      const progress = scrollPosition / animationHeight;
      const index = Math.min(
        Math.max(0, Math.floor(progress * images.length)),
        images.length - 1
      );

      for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].style.opacity = i === index ? '1' : '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '100%' }}>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Hero image"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading='eager'
          width={1920}
          height={1080}
        />
      ))}
    </div>
  );
}
