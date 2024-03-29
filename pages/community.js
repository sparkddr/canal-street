import Image from "next/image";

import picture3 from "../public/assets/section1-3.jpeg";

import Footer from "../components/Footer/Footer";

import { useEffect } from "react";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.4 } },
};
function Community(props, ref) {
  useEffect(() => {
    props.setIsOn("yellow");
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
      <div className="hidden md:flex w-[60px]  shrink-0 relative font-apercu -z-10"></div>
      <div className="hidden md:flex w-[60px]  shrink-0 relative font-apercu -z-10"></div>
      <div className="hidden md:flex w-[60px]  shrink-0 relative font-apercu -z-10"></div>
      <motion.main
        initial="initial"
        animate="animate"
        className="z-10 bg-[#FFB300] w-full grow "
      >
        <section className="mx-16 pt-60 flex flex-col sm:flex-row items-center  gap-6">
          <motion.h1
            ref={ref}
            className="text-5xl lg:text-[200px] font-ogg md:leading-[11.5rem]  "
          >
            Canal St. Community
          </motion.h1>
          <motion.div
            variants={fadeIn}
            className="relative flex sm:block justify-center shrink w-full md:w-[50%] lg:w-[30%] "
          >
            <Image
              alt="Canal Street room"
              src={picture3}
              className="w-[200px] sm:w-full md:min-w-[100%] lg:min-w-[140%] xl:min-w-[100%] relative "
            />
          </motion.div>
        </section>
        {/* <div>
          
        </div> */}
        <Footer />
      </motion.main>
    </motion.div>
  );
}

export default Community;
