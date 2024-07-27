'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative bg-[#1E1E1E] bg-cover bg-center min-h-screen w-full flex flex-col items-center justify-center text-white">
      {/* White line at the top, with a two-finger gap and thin */}
      <div className="absolute top-24 left-0 w-full h-0.5 bg-white"></div> {/* 96px gap and thin line */}
      
      {/* Background Pattern or Image (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-gray-600 opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 uppercase tracking-widest">
          Elevate Your Content With
        </h2>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-white uppercase no-underline">
          Wordsmith
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-300">
          Effortless Content Creation with AI
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mx-auto">
          Transform your ideas into captivating content swiftly. Experience efficiency and creativity combined.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/dashboard">
            <Button className="bg-white text-black py-2 sm:py-3 px-4 sm:px-8 rounded-full text-base sm:text-lg font-bold shadow-md hover:bg-gray-200 transition">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Footer with social links and email */}
      <footer className="absolute bottom-4 w-full flex justify-center items-center space-x-6 text-gray-400">
        <a href="https://www.linkedin.com/in/priyanshusamal-" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-2xl sm:text-3xl">
          <FaLinkedin />
        </a>
        <a href="https://x.com/PriyanshuS92042" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-2xl sm:text-3xl">
          <FaTwitter />
        </a>
        <span className="text-gray-400 text-base sm:text-lg">
          samalpriyanshu966@gmail.com
        </span>
      </footer>
    </div>
  );
}
