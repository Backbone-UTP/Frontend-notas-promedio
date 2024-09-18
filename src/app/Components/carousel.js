"use client"
import { useState } from "react";
import Card from "./card.js";
import { carts } from "../test.js";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (title.length + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + (title.length + 1)) % (title.length + 1)
    );
  };

  const title = Object.keys(carts);

  return (
    <div className="relative min-h-[550px] min-w-[825px] overflow-hidden flex justify-center">
      <Card index={0} currentIndex={currentIndex} values={carts[title[0]]} main={true}/>
      {title.map((t, index) => (
        <Card key={t} index={index + 1} currentIndex={currentIndex} values={carts[t]} main={false}/>
      ))}
      <button 
        className="absolute bottom-0 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full"
        onClick={handlePrev}>
        {"<"}
      </button>
      <button 
        className="absolute bottom-0 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full"
        onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}
