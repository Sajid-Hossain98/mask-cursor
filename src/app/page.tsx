"use client";

import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="h-screen">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className="absolute h-full w-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default mask-image-styles"
      >
        <p
          onMouseLeave={() => setIsHovered(false)}
          onMouseEnter={() => setIsHovered(true)}
          className="w-[1200px]"
        >
          A web developer - with passion towards creating visually appealing
          websites with latest and modern technologies.
        </p>
      </motion.div>

      <div className="h-full w-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default">
        <p className="w-[1200px]">
          Hi, <span className="text-[#ec4e39]">I&apos;m Sajid</span> , currently
          looking for opportunities to work as a junior web developer to gain
          more experience and to contribute with what I already know!
        </p>
      </div>
    </div>
  );
}
