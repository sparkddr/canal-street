import React, { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";

export default function NavbarMobile({ setOpenNav, openNav }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav className="fixed md:hidden inset-0 pb-8 overflow-y-scroll z-50 bg-white  ">
      <div
        className="absolute right-12 top-9 md:hidden cursor-pointer z-20"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      >
        <HiOutlineX className="h-10 w-10" />
      </div>
      <div className="grid grid-cols-2 w-full">
        <Link
          href="/"
          className="w-full h-[45vh] bg-white flex justify-center items-center"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span className="font-apercu text-xl -rotate-45">Home</span>
        </Link>
        <Link
          href="/food"
          className="w-full h-[45vh] bg-[#5EA2EC] flex justify-center items-center"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span className="font-apercu text-xl rotate-45">Food</span>
        </Link>
        <Link
          href="/retail"
          className="w-full h-[45vh] bg-[#F64444] flex justify-center items-center "
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span className="font-apercu text-xl rotate-45 ">Retail</span>
        </Link>
        <Link
          href="/community"
          className="w-full h-[45vh] bg-[#FFB300] flex justify-center items-center"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <span className="font-apercu text-xl -rotate-45">Community</span>
        </Link>
      </div>
      <div className="w-full px-12 font-apercu flex flex-col gap-6 ">
        <button className="font-apercu border  bg-inherit  border-black w-full mt-12 py-4  md:w-auto px-20 hover:text-white hover:bg-black transition-all duration-300">
          Become a vendor
        </button>
        <div>
          <h3>265 Canal Street</h3>
          <span>New York, New York</span>
        </div>
        <div>
          <h3>Food Hall Hours : </h3>
          <span>Mon – Sun: 10AM- 10PM</span>
        </div>
        <div>
          <h3>Retail Market Hours</h3>
          <span>Mon – Sat: 11AM- 7PM</span>
        </div>
        <span className="underline">Email us</span>
        <div className="grid grid-cols-2 gap-4">
          <button className="font-apercu border md:mx-auto bg-inherit flex justify-center border-black w-full  py-4 text-sm md:text-base md:w-auto px-20 hover:text-white hover:bg-black transition-all duration-300">
            Facebook
          </button>
          <button className="font-apercu border md:mx-auto bg-inherit flex justify-center  border-black w-full  py-4 text-sm md:text-base md:w-auto px-20 hover:text-white hover:bg-black transition-all duration-300">
            Instagram
          </button>
        </div>
      </div>
    </nav>
  );
}
