import styles from "./Footer.module.css";
import stylesMain from "../../styles/Home.module.css";
import Pen from "../icons/pen";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Letter from "../icons/Letter";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 px-16">
      <div className={styles.vendorSection}>
        <h2 className="text-center text-6xl font-ogg">
          Interested in becoming a vendor?
        </h2>
        <div className="w-full flex justify-center">
          <button className="font-apercu border md:mx-auto bg-white  border-black w-full mt-12 py-4 text-sm md:text-base md:w-auto px-20 hover:text-white hover:bg-black transition-all duration-300">
            click here
          </button>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 mt-16">
        <Link
          href="/"
          className={
            stylesMain.borderDotted +
            " p-20 flex flex-col justify-center items-center font-apercu"
          }
        >
          <Pen />
          <h3 className="text-lg mt-4">Email us</h3>
        </Link>
        <Link
          href="/"
          className={
            stylesMain.borderDotted +
            " p-20 flex flex-col justify-center items-center font-apercu"
          }
        >
          <Facebook />
          <h3 className="text-lg mt-4 text-center">Follow us on facebook</h3>
        </Link>
        <Link
          href="/"
          className={
            stylesMain.borderDotted +
            " p-20 flex flex-col justify-center items-center font-apercu"
          }
        >
          <Instagram />
          <h3 className="text-lg mt-4 text-center">Follow us on instagram</h3>
        </Link>
      </div>
      <div
        className={
          stylesMain.borderDotted +
          " p-16 flex flex-col justify-center items-center font-apercu mt-16 lg:grid grid-cols-2 lg:gap-6"
        }
      >
        <div className="lg:hidden flex flex-col items-center">
          <Letter />
          <h3 className="text-lg mt-4 text-center">
            Get updates in your inbox
          </h3>
        </div>
        <div className="hidden lg:flex justify-center items-center ">
          <h3 className="text-2xl font-bold">
            Stay up to date with our newsletter
          </h3>
        </div>
        <div className="mt-6 lg:mt-0 relative w-full">
          <input
            type="text"
            placeholder="Email "
            className="border border-black  w-full px-7 py-4 after:content[\21E3]"
          />

          <span className="absolute text-3xl right-6 top-3">⇢</span>
        </div>
      </div>
      <div className="text-xs mt-10 font-apercu">
        <div className="flex justify-between underline">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Vendor Login</Link>
        </div>
        <div className="flex justify-between  mt-4">
          <span>
            Site by{" "}
            <Link href="https://github.com/sparkddr" className="underline">
              CCam
            </Link>{" "}
            (recreation of a Zero website)
          </span>
          <span>Copyright Cam 2022</span>
        </div>
      </div>
    </footer>
  );
}
