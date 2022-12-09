import Image from "next/image";
import styles from "../styles/Retail.module.css";

import Flower from "../components/icons/Flower";

import picture2 from "../public/assets/section1-2.jpeg";

import Footer from "../components/Footer/Footer";

import { useEffect } from "react";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.4 } },
};
function Retail(props, ref) {
  useEffect(() => {
    props.setIsOn("red");
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
      className="flex w-full"
    >
      <div className="hidden md:flex w-[180px] shrink-0 relative font-apercu -z-10"></div>

      <motion.main
        initial="initial"
        animate="animate"
        className="z-10 bg-[#F64444] w-full  "
      >
        <div className="w-full flex justify-end font-apercu text-sm pt-32 px-10">
          <div className="text-right">
            <h3>Retail Market Hours : </h3>
            <span>Fri - Sun: 11:00AM - 7:00PM</span>
          </div>
        </div>
        <section className="px-10 md:px-0 pt-20 flex flex-col md:flex-row gap-6 md:gap-0 ">
          <div className="lg:w-[60%] xl:w-[70%] flex flex-col justify-center lg:block relative">
            <div className="hidden md:block -translate-y-10 rotate-90 absolute text-gray-700 -top-4">
              <h3 className="font-apercu ">Retail ⇢</h3>
            </div>
            <motion.h1
              ref={ref}
              className="text-[80px] lg:text-[150px] xl:text-[200px]  font-ogg  leading-[5rem] lg:leading-[11.5rem]  "
            >
              The Retail Market
            </motion.h1>
          </div>
          <motion.div
            variants={fadeIn}
            className="relative shrink w-full md:w-[50%] lg:w-[30%] "
          >
            <span className="absolute z-20 text-6xl -right-3 md:-top-10 -bottom-10">
              購物
            </span>
            <Image
              alt="Canal Street room"
              src={picture2}
              className=" w-full md:min-w-[100%] lg:min-w-[140%] xl:min-w-[100%] relative "
            />
          </motion.div>
        </section>
        <section className="grid md:grid-cols-3 pt-20 px-10 w-full gap-20">
          <div>
            <h3 className="font-apercu">Design Objects</h3>
            <h2 className="font-ogg text-3xl mt-6">American Design Club</h2>
          </div>
          <div>
            <h3 className="font-apercu">Jewelry</h3>
            <h2 className="font-ogg text-3xl mt-6">Beeshaus & Raum NYC</h2>
          </div>
          <div>
            <h3 className="font-apercu">Jewelry</h3>
            <h2 className="font-ogg text-3xl mt-6">Beroep Tech</h2>
          </div>
          <div>
            <h3 className="font-apercu">Bonsai Shop</h3>
            <h2 className="font-ogg text-3xl mt-6">Dandy Farmer Bonsai Shop</h2>
          </div>
          <div>
            <h3 className="font-apercu">Fashion Apparel</h3>
            <h2 className="font-ogg text-3xl mt-6">
              Friend Of A Friend Studio
            </h2>
          </div>
          <div>
            <h3 className="font-apercu">Design Objects</h3>
            <h2 className="font-ogg text-3xl mt-6">Leibal</h2>
          </div>
          <div>
            <h3 className="font-apercu">K Pop Apparel and Merchandise</h3>
            <h2 className="font-ogg text-3xl mt-6">Mandu Apparel</h2>
          </div>
          <div>
            <h3 className="font-apercu">Home Goods</h3>
            <h2 className="font-ogg text-3xl mt-6">Mogutable</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Jewelry</h3>
            <h2 className="font-ogg text-3xl mt-6">Mottive</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Newstand and Magazines</h3>
            <h2 className="font-ogg text-3xl mt-6">Office Magazine Newstand</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Fashion Apparel</h3>
            <h2 className="font-ogg text-3xl mt-6">Preppy Trendy</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Sunglasses</h3>
            <h2 className="font-ogg text-3xl mt-6">Savage Anchor</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Jewelry</h3>
            <h2 className="font-ogg text-3xl mt-6">Seven 50</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Sustainable lifestyle store</h3>
            <h2 className="font-ogg text-3xl mt-6">Siizu</h2>
          </div>
          <div>
            <h3 className="font-apercu"> Jewelry</h3>
            <h2 className="font-ogg text-3xl mt-6">Swagychic</h2>
          </div>
        </section>
        {/* <section className="flex justify-around mt-20"> */}
        <section className={styles.happyhour + " grid md:grid-cols-3"}>
          <div className="flex  justify-center items-center">
            <Flower className="w-28 h-28 md:w-36 md:h-36 lg:w-52 lg:h-52 animate-smiley" />
          </div>
          <div>
            <h2 className="text-[100px]  leading-[9rem]  font-ogg text-center">
              {" "}
              The Best <br />
              of NYC
            </h2>
            <div className="font-apercu text-center mt-10">
              <span>All under one roof</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Flower className="w-28 h-28 md:w-36 md:h-36 lg:w-52 lg:h-52 animate-smileyreverse " />
          </div>
        </section>
        {/* <div>
          
        </div> */}
        <Footer />
      </motion.main>

      <div className="hidden md:flex w-[120px] shrink-0 relative font-apercu -z-10"></div>
    </motion.div>
  );
}

export default Retail;
