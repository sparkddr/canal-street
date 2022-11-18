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
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  forwardRef,
} from "react";

const Home = forwardRef(function Home(props, ref) {
  return (
    <div className="flex">
      <main className="z-10">
        <Link href="/" className="block pt-10 px-16 fixed">
          <Logo />
        </Link>
        <section className="mx-16 py-52 max-w-[1030px]">
          <h1
            ref={ref}
            className="text-4xl md:text-7xl font-ogg md:leading-[5.5rem] "
            style={{ opacity: 0 }}
          >
            Canal Street Market is a carefully curated retail market, food hall
            & community space open year-round at 265 Canal Street.{" "}
            <Link href="/food" className={styles.yellowUnderline}>
              Support Small Business
            </Link>{" "}
            this weekend!
          </h1>
        </section>
        <div>
          <Image alt="Canal Street room" src={background} />
        </div>
        <section className="px-16 py-28">
          <h2 className="text-6xl text-center md:text-left md:text-8xl xl:text-9xl font-ogg md:leading-[5.5rem]>A New Kind of Market">
            A New Kind <br className="hidden md:block" /> of Market
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-24">
            <div>
              <Image src={picture1} />
              <p className="font-apercu mt-8 md:text-xs lg:text-base">
                Merging retail, food, art, and culture, Canal Street Market
                highlights top retail and design concepts, restaurants, and
                up-and-coming players in the downtown New York City community.
              </p>
            </div>
            <div>
              <Image src={picture2} />
              <p className="font-apercu mt-8 md:text-xs lg:text-base">
                Retail Market Hours: <br />
                Fri– Sun: 11:00AM - 7:00PM
              </p>
            </div>
            <div>
              <Image src={picture3} />
              <p className="font-apercu mt-8 md:text-xs lg:text-base">
                Food Hall Hours:
                <br />
                Mon – Thurs: 11:00AM - 6:00PM
                <br />
                Fri– Sun: 11:00AM - 7:00PM
              </p>
            </div>
          </div>
        </section>
        <section className="px-16">
          <div className="grid gap-6 md:grid-cols-4 ">
            <div className="text-4xl md:text-6xl text-white flex justify-center items-center min-w-[120px]">
              <span className={styles.asianSigns}>活動</span>
            </div>
            <div className="flex justify-center md:col-span-2 ">
              <h2 className="text-7xl text-center  md:text-8xl xl:text-9xl font-ogg md:leading-[5.5rem] ">
                Market Events
              </h2>
            </div>
            <div className="text-4xl md:text-6xl text-white flex justify-center items-center min-w-[120px]">
              <span className={styles.asianSigns}>活動</span>
            </div>
          </div>
          <div
            className={
              styles.borderScore +
              " " +
              styles.borderScoreLarge +
              " font-apercu mt-10 py-3 flex flex-col gap-3 md:grid grid-cols-3 md:gap-6 md:p-16"
            }
          >
            <div className={styles.borderScore + " text-xs text-center py-12 "}>
              <h3 className="text-center">10/22</h3>
              <span>Small Business Retail Pop Up Weekend!</span>
            </div>
            <div className={styles.borderScore + " text-xs text-center py-12 "}>
              <h3 className="text-center">02/07</h3>
              <span>
                New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
              </span>
            </div>
            <div className={styles.borderScore + " text-xs text-center py-12 "}>
              <h3 className="text-center">12/11</h3>
              <span>Hack City </span>
            </div>
          </div>
          <div className="w-full md:flex justify-center md:-mt-[86px]">
            <button className="font-apercu border md:mx-auto bg-white  border-black w-full mt-12 py-4 text-sm md:text-base md:w-auto px-20 hover:text-white hover:bg-black transition-all duration-300">
              see all
            </button>
          </div>
        </section>
        <section className="px-16 lg:grid grid-cols-2 gap-6 mt-10">
          <Link
            href="https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427"
            className={
              styles.borderDotted +
              " flex justify-center items-center py-20 px-16   w-full"
            }
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center  font-ogg ">
              265 Canal St. New York, NY
            </h2>
          </Link>
          <Link
            href="https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427"
            className={
              styles.borderDotted + " hidden  lg:block w-full p-[0.8px] "
            }
          >
            <Image src={mapPic} className="w-full h-full object-cover" />
          </Link>
        </section>
        <Footer />
      </main>
      <div className="hidden md:flex w-[180px] shrink-0 relative font-apercu -z-10"></div>
    </div>
  );
});

export default Home;
