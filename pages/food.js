import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo from "../components/logo";
import Link from "next/link";
import background from "../public/assets/background.avif";
import picture1 from "../public/assets/section1-1.jpeg";
import picture2 from "../public/assets/section1-2.jpeg";
import picture3 from "../public/assets/section1-3.jpeg";
import mapPic from "../public/assets/map.avif";
import Footer from "../components/Footer/Footer";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";
import { forwardRef } from "react";

const Food = forwardRef(function Food(props, ref) {
  return (
    <>
      <div className="hidden md:flex w-[60px] shrink-0 relative font-apercu -z-10"></div>
      <main className="z-10 bg-[#5EA2EC] w-full h-[100vh]">
        <div>
          <Link href="/" className="block pt-10 px-16 fixed">
            <Logo />
          </Link>
          <h1 ref={ref} style={{ opacity: 0 }}>
            Hello World
          </h1>
        </div>
      </main>
      <div className="hidden md:flex w-[120px] shrink-0 relative font-apercu -z-10"></div>
    </>
  );
});

export default Food;
