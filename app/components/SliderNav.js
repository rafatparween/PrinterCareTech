"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function SliderNav() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      leftImage: "https://t4.ftcdn.net/jpg/05/69/78/61/360_F_569786199_dFTvmfHTzvbl6zT5GepyLDjhqG6logTe.jpg",
      rightImage: "https://t4.ftcdn.net/jpg/06/51/89/81/360_F_651898136_VYg9YknaxQKK1DYYopfmaUI1MjUBRRwl.jpg",
      title: "High Quality Printers for Your Business",
      subtitle: "Get Premium Printers at Best Prices",
    },
    {
      leftImage: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-printer-with-several-color-prints-on-it-image_2685783.jpg",
      rightImage: "https://img.freepik.com/premium-photo/printer-with-picture-mountain-it_188544-22334.jpg",
      title: "Ink Your Ideas",
      subtitle: "Explore a Range of Self-Inking Stamps",
    },
    {
      leftImage: "https://img.freepik.com/premium-photo/people-using-copy-printer-print-documents-ai-generated_397889-1193.jpg?w=360",
      rightImage: "https://img.freepik.com/premium-photo/photo-screen-printing-machine-applying-ink_1056572-30409.jpg?w=360",
      title: "Your Personalized Printer Solutions",
      subtitle: "Get Custom Printing Options for Every Need",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-[580px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-row justify-between items-center py-10 px-12 bg-[#C2CCE5] shadow-2xl"
          >
            <div className="relative w-[35%] h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={slide.leftImage}
                alt="Left Slide"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex-1 max-w-[700px]">
              <h1 className="font-semibold text-4xl text-[#333] mb-4">{slide.title}</h1>
              <p className="text-xl text-gray-700 mb-6">{slide.subtitle}</p>
              <button className="bg-[#333] text-white px-8 py-4 rounded-full hover:bg-[#444] transition duration-300">
                Explore Now
              </button>
            </div>
            <div className="relative w-[35%] h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={slide.rightImage}
                alt="Right Slide"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#333] text-white p-4 rounded-full hover:bg-[#444] transition duration-300 shadow-lg"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#333] text-white p-4 rounded-full hover:bg-[#444] transition duration-300 shadow-lg"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default SliderNav;
