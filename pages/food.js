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
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.4 } },
};
const Food = forwardRef(function Food(props, ref) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      exit={{ opacity: 0 }}
      className="flex"
    >
      <div className="hidden md:flex w-[60px] shrink-0 relative font-apercu -z-10"></div>
      <div className="hidden md:flex w-[60px] bg-[#5EA2EC] shrink-0 relative font-apercu -z-10"></div>
      <motion.main
        initial="initial"
        animate="animate"
        className="z-10 bg-[#5EA2EC] w-full "
      >
        <Link href="/" className="block pt-10 px-16 fixed">
          <Logo />
        </Link>
        <section className="mx-16 pt-60 flex ">
          <motion.h1
            ref={ref}
            className="text-4xl md:text-[200px] font-ogg md:leading-[11.5rem] w-[1030px] "
          >
            The Food Hall
          </motion.h1>
          <motion.div variants={fadeIn}>
            <Image alt="Canal Street room" src={picture3} className="w-96" />
          </motion.div>
        </section>
        {/* <div>
          
        </div> */}
        <Footer />
      </motion.main>

      <div className="hidden md:flex w-[120px] shrink-0 relative font-apercu -z-10"></div>
    </motion.div>
  );
});

export default Food;
