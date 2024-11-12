import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import "./App.css";
import AnimatedParagraph from "./components/AnimatedParagraph";
import DateSection from "./components/DateSection";
import LocationSection from "./components/LocationSection";
import RevealingParagraph from "./components/RevealingParagraph";
import ZoomParallax from "./components/ZoomParallax";
import { GroomBride } from "./components/GroomBride";

export default function App() {
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
  return (
    <div className="w-[100svw]" ref={ref1}>
      <div className="w-full sm:max-w-[430px] sm:shadow-xl sm:m-auto sm:bg-[url(/bg.jpg)] sm:bg-cover sm:bg-fixed py-2">
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
}
