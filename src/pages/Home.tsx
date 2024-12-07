import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { useLoaderData, useNavigate } from "react-router-dom";
import "../App.css";
import AnimatedParagraph from "../components/AnimatedParagraph";
import FirstSection from "../components/FirstSection";
import { GroomBride } from "../components/GroomBride";
import Layer from "../components/Layer";
import Loading from "../components/Loading";
import LocationSection from "../components/LocationSection";
import NoiseCanvas from "../components/NoiseCanvas";
import Story from "../components/Story";
import ZoomParallax from "../components/ZoomParallax";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const navigate = useNavigate();
  const user = useLoaderData();
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end center"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll();

  useEffect(() => {
    if (!user) {
      navigate("not-found");
    }
    const onPageLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1200);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const op = useTransform(scrollYProgress2, [0, 0.01], [200, 0]);

  return (
    <div className="w-screen" ref={ref1}>
      <AnimatePresence>{!isLoaded && <Loading />}</AnimatePresence>
      <div className="w-full sm:max-w-[600px] sm:shadow-xl sm:m-auto">
        <div className="h-[100lvh] w-full max-w-600px fixed z-20 pointer-events-none">
          <NoiseCanvas />
        </div>
        <div className="h-screen w-full max-w-[600px] fixed z-[2] top-0 pointer-events-none overflow-hidden">
          {/* <motion.div className="absolute top-0 opacity-0 bg-black h-full w-full pointer-events-none"></motion.div> */}
          <div
            className="flex flex-col h-full gap-12 blur-[10px] will-change-transform opacity-20 relative"
            // style={{ skewY, scaleX: 1.1 }}
          >
            <div className="h-[120%] w-[200%] flex flex-row gap-8 rotate-[30deg] absolute -top-20 -left-24 shadow-container po">
              <div className="w-10 h-1/2 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-4/6 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-3/4 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-4/6 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-4/6 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-5/6 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-5/6 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-5/6 bg-gradient-to-b from-black"></div>
              <div className="w-10 h-full bg-gradient-to-b from-black"></div>
              <div className="w-10 h-full bg-gradient-to-b from-black"></div>
            </div>
            <motion.img
              className="absolute top-0 rotate-180 opacity-30"
              src="/images/leaf2-shadow.svg"
              initial={{ y: -300, rotate: "180deg", scale: 0.7, skewY: -20 }}
              animate={{ y: 1000 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 6,
              }}
            />
            <motion.img
              className="absolute top-20 left-52 rotate-180 opacity-30"
              src="/images/leaf4-shadow.svg"
              initial={{ y: -300, rotate: "180deg", scale: 0.4, skewY: -20 }}
              animate={{ y: 1000 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
              }}
            />
            <motion.img
              className="absolute top-0 left-64 rotate-180 blur-[-7px] opacity-30"
              src="/images/leaf2-shadow.svg"
              initial={{ y: -300, rotate: "180deg", scale: 0.2, skewY: -20 }}
              animate={{ y: 1000 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                delay: 2,
              }}
            />
          </div>
        </div>
        <motion.div
          className="fixed bottom-0 left-0 w-full m-auto z-[9999]"
          style={{ y: op, width: "inherit" }}
        >
          <div className="flex flex-row justify-center gap-2">
            <p className="text-center mb-5 text-black">Scroll pelan-pelan</p>
            <motion.div
              initial={{ y: -2 }}
              animate={{ y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.4,
              }}
            >
              <HiChevronDown color="black" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className=" bg-[#df3708] fixed top-0 left-0 z-50 origin-[0_100%] w-full h-1"
          style={{ scaleX: scrollYProgress2 }}
        ></motion.div>
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{
                opacity: 0,
                y: 1000,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 2,
                type: "keyframes",
                ease: "anticipate",
              }}
              className="rounded-3xl relative h-[90vh] w-full text-white leading-6 flex flex-col justify-end text-right"
            >
              <div className="absolute w-full h-full px-2 py-2">
                <img
                  src="/bg-hero.webp"
                  className="rounded-3xl h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute h-full w-full mix-blend-multiply">
                <video
                  autoPlay
                  playsInline
                  loop
                  muted
                  className="h-full w-full object-cover"
                >
                  <source src="/hevc2.mov" type="video/quicktime" />
                  <source src="/hero.webm" type="video/webm" />
                </video>
              </div>
              <div className="flex flex-col items-center w-full text-center relative z-10">
                <p className="font-thin text-[40px]">
                  Hi {user?.name ?? "Guest"}
                </p>
                <p className="font-thin leading- mt-4 w-[250px]">
                  Kami mengundang kamu ke acara pernikahan kami!
                </p>
                <p className="text-center text-xs opacity-80 mb-6 mt-32">
                  Scroll to open the invitation!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <FirstSection />
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
            progress={scrollYProgress}
            className="text-center text-black font-bold px-8 mt-40 mb-60"
            paragraph='"It is He who created you from one soul and created from it its mate that he might dwell in security with her.” (Quran, 7:189)'
          />
        </div>
        <GroomBride />
        <LocationSection />
        <div className="w-full h-[100vh] text-center relative">
          <div className="translate-y-[100px] px-24 relative z-30">
            <h1 className="text-white relative z-[6] text-3xl font-bold">
              akad
            </h1>
            <p className="text-white leading-5">
              Sabtu, 21 Desember 2024
              <br />
              07.30 - 10.00
            </p>
            <h1 className="text-kuning my-2 text-4xl">&#x2022;</h1>
            <h1 className="text-white relative z-30 text-3xl font-bold">
              resepsi
            </h1>
            <p className="text-white leading-5">
              Sabtu, 21 Desember 2024
              <br /> 10.00 - 14.00
            </p>
          </div>
          <Layer
            speed={2000}
            className="absolute -top-[1330px] w-full flex flex-col items-center justify-center h-full left-0 z-[1]"
          >
            <div className="bg-[url(/images/couple-1.jpg)] h-full w-full bg-cover bg-center"></div>
          </Layer>
        </div>
        <Story />
        {/* <DateSection /> */}
      </div>
    </div>
  );
};

export default Home;
