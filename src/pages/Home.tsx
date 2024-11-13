import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import "../App.css";
import AnimatedParagraph from "../components/AnimatedParagraph";
import DateSection from "../components/DateSection";
import LocationSection from "../components/LocationSection";
import RevealingParagraph from "../components/RevealingParagraph";
import ZoomParallax from "../components/ZoomParallax";
import { GroomBride } from "../components/GroomBride";
import {
  HiOutlineHome,
  HiOutlineChatBubbleLeftRight,
  HiOutlineMapPin,
  HiOutlineCalendar,
  HiOutlineHeart,
  HiChevronDown,
} from "react-icons/hi2";
import Layer from "../components/Layer";
import { Link } from "react-router-dom";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll();

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const op = useTransform(scrollYProgress2, [0, 0.01], [200, 0]);
  return (
    <div className="w-[100svw]" ref={ref1}>
      <div className="w-full sm:max-w-[600px] sm:shadow-xl sm:m-auto py-2">
        <motion.div
          className="fixed bottom-0 left-0 w-full z-[9999]"
          style={{ y: op }}
        >
          <div className="flex flex-row justify-center gap-2">
            <p className="text-center text-sm mb-2 text-[#29296d]">
              Scroll pelan-pelan
            </p>
            <motion.div
              initial={{ y: -2 }}
              animate={{ y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.4,
              }}
            >
              <HiChevronDown color="#29296d" />
            </motion.div>
          </div>
          <div className="rounded-2xl bg-white flex flex-row py-4 mx-2 mb-6 border-[#df3708] items-center justify-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <a
              href="#"
              className="border-[rgba(223,55,8,0.2)] border-r-[1px] px-5"
            >
              <HiOutlineHome color="#29296d" size={32} />
            </a>
            <a
              href="#"
              className="border-[rgba(223,55,8,0.2)] border-r-[1px] px-5"
            >
              <HiOutlineHeart color="#29296d" size={32} />
            </a>
            <a
              href="#"
              className="border-[rgba(223,55,8,0.2)] border-r-[1px] px-5"
            >
              <HiOutlineCalendar color="#29296d" size={32} />
            </a>
            <a
              href="#"
              className="border-[rgba(223,55,8,0.2)] border-r-[1px] px-5"
            >
              <HiOutlineMapPin color="#29296d" size={32} />
            </a>
            <Link to="messages" className="px-5">
              <HiOutlineChatBubbleLeftRight color="#29296d" size={32} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className=" bg-[#df3708] fixed top-0 left-0 z-50 origin-[0_100%] w-full h-1"
          style={{ scaleX: scrollYProgress2 }}
        ></motion.div>
        <motion.div className="rounded-3xl relative h-[700px] w-[400px] mx-auto bg-[url(/bg-hero.png)] bg-center bg-cover text-white px-4 py-8 leading-6 flex flex-col justify-end text-right">
          <div className="absolute top-[230px] left-[80px] w-[235px] rotate-[14deg] mix-blend-multiply">
            <video src="/herovideo1.mp4" autoPlay playsInline loop muted />
          </div>
          <div className="flex flex-col items-center w-full text-center h-[170px]">
            <p className="font-thin text-[40px]">Hi Rusli</p>
            <p className="font-thin leading-4 mt-4 w-[250px]">
              It will be an absolute pleasure if you could witness this moment
            </p>
          </div>
          <p className="text-center text-xs opacity-80">
            Scroll to open the invitation!
          </p>
        </motion.div>
        <div className="overflow-x-clip">
          <div className="mt-36 p-8 relative">
            <RevealingParagraph
              className="text-[#29296d] text-[40px] text-center font-bold"
              paragraph="The wedding of Rizal & Hanifa"
            />
          </div>
        </div>
        <ZoomParallax />
        <div
          ref={ref2}
          className="relative z-10 px-4 text-slate-700 font-bold italic"
        >
          <Layer speed={700} className="absolute w-28 z-10 right-10 -top-20">
            <img src="/images/leaf3.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer
            speed={200}
            className="absolute w-20 -z-20 left-10 top-5 opacity-50"
          >
            <img src="/images/leaf10.svg" />
          </Layer>
          <Layer speed={100} className="absolute w-20 -z-20 left-20 -top-10">
            <img src="/images/leaf9.svg" />
          </Layer>
          <Layer speed={300} className="absolute w-14 -z-20 right-40 -top-20">
            <img src="/images/leaf2.svg" className="rotate-180" />
          </Layer>
          <AnimatedParagraph
            className="text-center px-8"
            paragraph='"It is He who created you from one soul and created from it its mate that he might dwell in security with her.” (Quran, 7:189)'
          />
        </div>
        <GroomBride />
        <LocationSection />
        <DateSection />
        <div className="h-[200vh]"></div>
      </div>
    </div>
  );
};

export default Home;
