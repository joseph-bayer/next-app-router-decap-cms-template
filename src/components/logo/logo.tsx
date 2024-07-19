"use client";

import Image from "next/image";
import MonkeyCowboyImage from "../../assets/images/monkey_cowboy_logo.png";
import { useState } from "react";

interface LogoProps {
  spinOnHover: boolean;
}

export default function Logo({ spinOnHover }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-row gap-x-1 items-center `}
      onMouseOver={() => setIsHovered(true)}
      onAnimationEnd={() => setIsHovered(false)}
    >
      <span
        className="font-indie-flower text-6xl text-dragonBall"
        aria-hidden="true"
      >
        H
      </span>
      <Image
        src={MonkeyCowboyImage}
        alt="Monkey Cowboy Logo"
        className={`${spinOnHover && isHovered ? "animate-wind-up-spin" : ""}`}
        height={60}
        width={60}
        placeholder="blur"
        style={{
          objectFit: "contain",
        }}
        aria-hidden={true}
      />
      <span
        className="font-indie-flower text-6xl text-dragonBall"
        aria-hidden={true}
      >
        wdy!
      </span>
      <span className="sr-only">Logo for Howdy!</span>
    </div>
  );
}