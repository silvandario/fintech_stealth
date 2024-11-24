"use client"
import React, { useState, useEffect } from 'react';
import RetroGrid from './ui/retro-grid';

const ValueProposition = () => {
  const [title, setTitle] = useState("Lumi");

  useEffect(() => {
    const titles = [
      'We provide a one-stop solution for all your financial tasks.',
      'Track your spending, transfer money, generate your tax declaration.',
      'Never worry again – it\'s that easy.',
      'Enlighten your finances.'
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      setTitle(titles[currentIndex]);
    }, 8000); // Change text every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      {/* Dynamic Title */}
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        {title}
      </span>

      {/* Retro Grid */}
      <RetroGrid />
    </div>
  );
};

export default ValueProposition;