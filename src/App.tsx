import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import "./App.css";
import AnimatedParagraph from "./components/AnimatedParagraph";
import Card from "./components/Card";
import Layer from "./components/Layer";
import RevealingParagraph from "./components/RevealingParagraph";
import WeddingLocation from "./components/WeddingLocation";
import ZoomParallax from "./components/ZoomParallax";
import Cloud from "./components/svg/Cloud";
import WeddingDate from "./components/WeddingDate";
import Heart from "./components/svg/Heart";
import Line from "./components/svg/Line";
import LocationSection from "./components/LocationSection";
import DateSection from "./components/DateSection";
import ReactLenis from "lenis/react";

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
    <ReactLenis root>
      <div className="w-[100vw]" ref={ref1}>
        <div className="fixed"></div>
        <div className="sm:hidden w-full h-[100vh] fixed bg-[url(/bg.jpg)] bg-cover -z-10"></div>
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
              <Layer speed={1000} className="absolute -z-10 w-28 -top-32">
                <img src="/images/leaf1.svg" className="rotate-12" />
              </Layer>
              <Layer speed={800} className="absolute w-32 top-10 -z-10 left-20">
                <img src="/images/leaf3.svg" className="rotate-[48deg]" />
              </Layer>
              <Layer
                speed={1800}
                className="absolute w-16 -top-20 right-14 z-10"
              >
                <img src="/images/leaf2.svg" className="rotate-[-38deg]" />
              </Layer>
              <motion.div
                layout
                className="bg-[#ffcd00] h-10 absolute top-[69px] right-0 -z-10 rounded-l-3xl"
                initial={{
                  width: 0,
                }}
                whileInView={{ width: "90%" }}
                viewport={{ amount: 1, once: true }}
              ></motion.div>
              <RevealingParagraph
                className="text-[#29296d] text-[40px] text-center font-bold"
                paragraph="The wedding of Rizal & Hanifa"
              />
            </div>
          </div>
          <ZoomParallax />
          <div ref={ref2} className="relative z-10 px-4">
            <Card
              i={0}
              progress={scrollYProgress}
              range={[0 * 0.25, 1]}
              targetScale={1}
              // color="#e54848"
              className="top-4 pt-8 text-slate-700 font-bold italic sticky"
            >
              <Layer
                speed={1000}
                className="absolute z-10 w-40 left-10 -top-[300px]"
              >
                <img src="/images/leaf1.svg" className="rotate-[-160deg]" />
              </Layer>
              {/* <Layer
              speed={1500}
              className="absolute w-28 z-10 right-3 -top-[400px]"
            >
              <img src="/images/leaf4.svg" />
            </Layer> */}
              <Layer speed={700} className="absolute w-28 z-10 right-10 -top-5">
                <img src="/images/leaf3.svg" className="rotate-[160deg]" />
              </Layer>
              <Layer
                speed={200}
                className="absolute w-20 -z-20 left-10 top-5 opacity-50"
              >
                <img src="/images/leaf10.svg" />
              </Layer>
              <Layer speed={100} className="absolute w-20 -z-20 left-40 top-80">
                <img src="/images/leaf12.svg" />
              </Layer>
              <Layer speed={100} className="absolute w-20 -z-20 left-40 top-40">
                <img src="/images/leaf9.svg" />
              </Layer>
              <Layer
                speed={300}
                className="absolute w-14 -z-20 right-40 top-40"
              >
                <img src="/images/leaf2.svg" className="rotate-180" />
              </Layer>
              <Layer speed={400} className="absolute w-16 -z-20 left-20 top-20">
                <img src="/images/leaf12.svg" className="rotate-[70deg]" />
              </Layer>
              <Layer
                speed={200}
                className="absolute w-16 -z-20 right-20 top-20"
              >
                <img src="/images/leaf9.svg" className="rotate-[70deg]" />
              </Layer>
              <Layer speed={400} className="absolute w-16 -z-20 left-20 top-60">
                <img src="/images/leaf10.svg" className="rotate-[180deg]" />
              </Layer>
              <Layer
                speed={300}
                className="absolute w-16 -z-20 right-32 top-96"
              >
                <img src="/images/leaf9.svg" className="rotate-[180deg]" />
              </Layer>
              <Layer
                speed={100}
                className="absolute w-12 -z-10 left-32 top-[400px]"
              >
                <img src="/images/leaf10.svg" className="rotate-[130deg]" />
              </Layer>
              <Layer
                speed={100}
                className="absolute w-12 -z-10 left-32 bottom-20"
              >
                <img src="/images/leaf10.svg" className="rotate-[130deg]" />
              </Layer>
              <Layer
                speed={200}
                className="absolute w-12 -z-10 right-20 bottom-40"
              >
                <img src="/images/leaf10.svg" className="rotate-[20deg]" />
              </Layer>
              <AnimatedParagraph
                className="text-center px-8"
                paragraph='"It is He who created you from one soul and created from it its mate that he might dwell in security with her.” (Quran, 7:189)'
              />
            </Card>
            <Card
              i={1}
              progress={scrollYProgress}
              range={[1 * 0.25, 1]}
              targetScale={0.9}
              color="/bride.jpg"
              className="top-8 sticky"
            >
              <div className="px-8 py-8 text-white">
                <p className="text-lg font-bold">The groom</p>
                <h1 className="text-4xl mb-4 font-bold">Muhamad Rizal</h1>
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  cupiditate quos est ad ipsa aliquid eum laudantium nobis ut,
                  voluptas maxime? Cum, porro consequuntur. Debitis a eaque
                  quidem deleniti error.
                </p>
              </div>
            </Card>
            <Card
              i={2}
              progress={scrollYProgress}
              range={[2 * 0.25, 1]}
              targetScale={1}
              color="/groom.jpg"
              className="relative"
            >
              <div className="px-8 py-8 text-white">
                <p className="text-lg font-bold">The bride</p>
                <h1 className="text-4xl mb-4 font-bold">Hanifa Mutia</h1>
                <p className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  cupiditate quos est ad ipsa aliquid eum laudantium nobis ut,
                  voluptas maxime? Cum, porro consequuntur. Debitis a eaque
                  quidem deleniti error.
                </p>
              </div>
            </Card>
          </div>
          {/* <div className="-mt-28 p-8 relative text-center flex flex-col items-center">
          <motion.div
            layout
            className="bg-[#29296d] h-16 absolute top-[18px] right-0 -z-10 rounded-l-3xl"
            initial={{
              width: 0,
            }}
            whileInView={{ width: "90%" }}
            viewport={{ amount: 1, once: true }}
          ></motion.div>
          <RevealingParagraph
            className="text-white text-[40px] font-bold -z-10"
            paragraph="Save the date"
          />
        </div> */}
          {/* <WeddingLocation /> */}

          {/* <motion.div
          className="h-[200vh] relative -z-10 pt-36 bg-white"
          viewport={{ amount: 0.2 }}
        >
          <WeddingLocation />
          <WeddingDate />
          <div className="flex flex-col items-center mt-24">
            <RevealingParagraph
              className="text-[#29296d] text-[30px] text-center font-bold mb-4"
              paragraph="We'll see you there"
            />
            <Heart />
          </div>
        </motion.div> */}
          <LocationSection />
          <DateSection />
          <div className="h-[200vh]"></div>
        </div>
      </div>
    </ReactLenis>
  );
}
