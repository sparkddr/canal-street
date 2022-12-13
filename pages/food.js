import Head from "next/head";
import Image from "next/image";
import Smiley from "../components/icons/Smiley";
import styles from "../styles/Food.module.css";
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
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.4 } },
};
function Food(props, ref) {
  useEffect(() => {
    props.setIsOn("blue");
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
      }}
      exit={{ opacity: 0 }}
      className="flex"
    >
      <div className="hidden md:flex w-[60px] shrink-0 relative font-apercu -z-10"></div>
      <div className="hidden md:flex w-[60px] bg-[#5EA2EC] shrink-0 relative font-apercu -z-10"></div>
      <motion.main
        initial="initial"
        animate="animate"
        className="z-10 bg-[#5EA2EC] w-full grow "
      >
        <div className="w-full flex justify-end font-apercu text-sm pt-32 px-10">
          <div className="text-right">
            <h3>Food Hall Hours : </h3>
            <span>Mon - Sun: 11:00AM - 8:00PM</span>
          </div>
        </div>
        <section className="px-10 md:px-0 pt-20 flex flex-col md:flex-row gap-6 md:gap-0 ">
          <div className="lg:w-[60%] xl:w-[70%] flex flex-col justify-center lg:block relative">
            <div className="hidden md:block -translate-y-10 rotate-90 absolute text-gray-700 -top-4">
              <h3 className="font-apercu ">Food ⇢</h3>
            </div>
            <motion.h1
              ref={ref}
              className="text-[80px] lg:text-[150px] xl:text-[200px]  font-ogg  leading-[5rem] lg:leading-[11.5rem]  "
            >
              The Food Hall
            </motion.h1>
          </div>
          <motion.div
            variants={fadeIn}
            className="relative shrink w-full md:w-[50%] lg:w-[30%] "
          >
            <span className="absolute z-20 text-6xl -right-3 md:-top-10 -bottom-10">
              餐饮
            </span>
            <Image
              alt="Canal Street room"
              src={picture3}
              className=" w-full md:min-w-[100%] lg:min-w-[140%] xl:min-w-[100%] relative "
            />
          </motion.div>
        </section>
        <section className="grid md:grid-cols-3 pt-20 px-10 w-full gap-20">
          <div>
            <h3 className="font-apercu">Khao Man Gai</h3>
            <h2 className="font-ogg text-3xl mt-6">Betong</h2>
          </div>
          <div>
            <h3 className="font-apercu">Coffee, Pastries & Smoothies</h3>
            <h2 className="font-ogg text-3xl mt-6">Chinatown Deli</h2>
          </div>
          <div>
            <h3 className="font-apercu">Artisanal Chocolates</h3>
            <h2 className="font-ogg text-3xl mt-6">
              Daniel Corpuz Chocolatier
            </h2>
          </div>
          <div>
            <h3 className="font-apercu">Napoli Style Pizza</h3>
            <h2 className="font-ogg text-3xl mt-6">
              Enzo Bruni La Pizza Gourmet
            </h2>
          </div>
          <div>
            <h3 className="font-apercu">Chinese Classics</h3>
            <h2 className="font-ogg text-3xl mt-6">Joe's Rice and Noodles</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Cantonese Steamed Rice Rolls</h3>
            <h2 className="font-ogg text-3xl mt-6">Joe's Steam Rice Roll</h2>
          </div>
          <div>
            <h3 className="font-apercu">Delicious Filipino Classics</h3>
            <h2 className="font-ogg text-3xl mt-6">Kabisera</h2>
          </div>
          <div>
            <h3 className="font-apercu">Bingsoo Sundaes & Bubble Tea</h3>
            <h2 className="font-ogg text-3xl mt-6">Lazy Sundaes</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Sushi, Handrolls & Chirashi</h3>
            <h2 className="font-ogg text-3xl mt-6">Mastunori</h2>
          </div>
          <div>
            <h3 className="font-apercu"> COMING SOON</h3>
            <h2 className="font-ogg text-3xl mt-6">Mucho Sarap</h2>
          </div>
        </section>
        {/* <section className="flex justify-around mt-20"> */}
        <section className={styles.happyhour + " grid md:grid-cols-3"}>
          <div className="flex  justify-center items-center">
            <Smiley className="w-28 h-28 md:w-36 md:h-36 lg:w-52 lg:h-52 animate-smiley" />
          </div>
          <div>
            <h2 className="text-[100px] lg:text-[150px] leading-[9rem]  font-ogg text-center">
              {" "}
              Happy <br />
              Hour
            </h2>
            <div className="font-apercu text-center mt-10">
              <span>Every Weekday, 5 - 7PM $4</span>
              <br />
              <span>Beer & $7 Wine Come Hang With Us!</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Smiley className="w-28 h-28 md:w-36 md:h-36 lg:w-52 lg:h-52 animate-smileyreverse " />
          </div>
        </section>
        {/* <div>
          
        </div> */}
        <Footer />
      </motion.main>

      <div className="hidden md:block w-[180px] shrink-0 relative font-apercu -z-10"></div>
    </motion.div>
  );
}

export default Food;
