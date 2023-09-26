'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero1 from '../../public/hero1.png';
import Hero2 from '../../public/hero2.png';
import Hero3 from '../../public/hero3.png';
import Hero from './Hero';

export default function Carousel() {
  const heros = [
    <Hero
      key="hero1"
      text1="30"
      text2="dresses"
      text3="Ready to wear dresses tailored for you online. Hurry up while stock lasts. We've got what you want."
      imageSrc={Hero1}
    />,
    <Hero
      key="hero2"
      text1="50"
      text2="wear"
      text3="Ready to wear aesthetic tailored for you online. Hurry up while stock lasts. We've got what you want."
      imageSrc={Hero2}
    />,
    <Hero
      key="hero3"
      text1="70"
      text2="suits"
      text3="Ready to wear suits tailored for you online. Hurry up while stock lasts. We've got what you want."
      imageSrc={Hero3}
    />
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide+1) % heros.length);
  //     console.log(currentSlide, heros[currentSlide]?.key)
  //   }, 5000); // Change slide every 5 seconds (5000 milliseconds)

  //   return () => clearInterval(intervalId);
  // }, [currentSlide]);

  return (
    <>
      <div className="mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {heros[currentSlide]}
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-center">
          {heros.map((hero, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`mx-2 h-3 rounded-full bg-[#009f7f] duration-300 ${
                currentSlide === index ? 'w-10 ' : 'w-3'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
