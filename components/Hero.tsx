// Hero component - build it yourself
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=90",
    subtitle: "NEW COLLECTION",
    title: "Elegance in Every Moment",
    description:
      "Discover timeless styles designed for the modern woman.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2000&q=90",
    subtitle: "SPRING / SUMMER",
    title: "Style That Speaks",
    description:
      "Explore our latest collection of effortless fashion.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=2000&q=90",
    subtitle: "LUNA EDIT",
    title: "Made for Your Style",
    description:
      "Curated pieces to elevate your everyday wardrobe.",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
           className={`h-full w-full object-cover transition-transform duration-[5000ms] ease-out ${
    activeSlide === index ? "scale-110" : "scale-100"
  }`}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-xl text-white">

            <p className="mb-4 text-sm font-medium tracking-[0.3em]">
              {slides[activeSlide].subtitle}
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              {slides[activeSlide].title}
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/90">
              {slides[activeSlide].description}
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
            >
              SHOP NOW
            </Link>

          </div>
        </div>
      </div>

      {/* Slider Dots - Right Side */}
      <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-4">

        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 ${
              activeSlide === index
                ? "h-8 w-[2px] bg-white"
                : "h-4 w-[2px] bg-white/50 hover:bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;