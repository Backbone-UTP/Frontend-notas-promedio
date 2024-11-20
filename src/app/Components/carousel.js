"use client";
import { useState, useEffect } from "react";
import Card from "./card.js";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carts, setCarts] = useState([]);

  const loadItemsFromLocalStorage = () => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setCarts(JSON.parse(storedItems));
    } else {
      localStorage.setItem("items", JSON.stringify([]));
      setCarts([]);
    }
  };

  useEffect(() => {
    loadItemsFromLocalStorage();

    const interval = setInterval(() => {
      loadItemsFromLocalStorage();
    }, 1000);

    return () => clearInterval(interval); 
  }, []); 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (carts.length + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (carts.length + 1)) % (carts.length + 1)
    );
  };

  return (
    <div className="relative min-h-[600px] min-w-[825px] overflow-hidden flex justify-center max-sm:min-w-[300px] max-sm:min-h-[610px] max-[768px]:min-w-[470px] max-[768px]:min-h-[600px]">
      <Card index={0} currentIndex={currentIndex} values={carts[0]} main={true} />
      {carts.map((t, index) => (
        <Card key={index} index={index + 1} currentIndex={currentIndex} values={t} main={false} />
      ))}
      <button
        className="absolute bottom-0 left-[25%] transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full max-[768px]:left-0"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute bottom-0 right-[25%] transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full max-sm max-[768px]:right-0"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
}
