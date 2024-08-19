import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Layer from "./Layer";
import Line5 from "./svg/Line5";

const DateSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const wrapperBg = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [
      "rgba(255, 205, 0, 0)",
      "rgba(255, 205, 0, 0)",
      "rgba(255, 205, 0, 0)",
      "rgba(255, 205, 0, 0.1)",
    ]
  );

  const div1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["rgba(41, 41, 109, 0)", "rgba(41, 41, 109, 0)", "rgba(41, 41, 109, 1)"]
  );
  const p1Y = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
  const p1Color = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["rgba(41, 41, 109, 1)", "rgba(41, 41, 109, 1)", "rgba(255,255,255,1)"]
  );

  const revealDiv1 = useTransform(scrollYProgress, [0.3, 0.8], [0, 10]);
  const revealDiv2 = useTransform(scrollYProgress, [0.3, 1], [0, -10]);

  const revealDivX1 = useTransform(scrollYProgress, [0.3, 1], [0, 260]);
  const revealDivX2 = useTransform(scrollYProgress, [0.3, 1], [0, -260]);

  return (
    <motion.div
      className="h-[2000px] w-full relative sm:z-0 -z-10 sm:-mt-[80px] -mt-[100px]"
      ref={ref}
    >
      <div className="w-full h-[700px] sticky top-0 overflow-x-clip">
        <motion.div>
          <Layer speed={100} className="absolute w-28 -z-10 right-10 -top-20">
            <img src="/images/leaf4.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={200} className="absolute w-28 -z-10 left-10 -top-24">
            <img src="/images/leaf10.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={150} className="absolute w-28 -z-10 right-20 -top-7">
            <img src="/images/leaf12.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={250} className="absolute w-16 -z-10 left-32 -top-7">
            <img src="/images/leaf7.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={300} className="absolute w-28 -z-10 right-5 -top-7">
            <img src="/images/leaf9.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={350} className="absolute w-16 -z-10 left-5 -top-7">
            <img src="/images/leaf5.svg" className="rotate-[160deg]" />
          </Layer>
        </motion.div>
        <Line5 progress={scrollYProgress} />
        <div className="pt-[150px] opacity-[0.99] flex flex-1 flex-col items-center h-full">
          <motion.div
            className="overflow-hidden text-[30px] font-bold px-4 py-2 rounded-3xl"
            style={{ backgroundColor: div1Opacity }}
          >
            <motion.p style={{ y: p1Y, color: p1Color }}>
              Save the date
            </motion.p>
          </motion.div>
          <div className="w-3/4 font-bold mt-20 py-8 text-center text-[#29296d] leading-10 relative overflow-visible">
            <motion.div
              className="absolute bg-[url(/couple1.jpg)] w-[300px] h-[400px] bg-cover -top-4 left-0 rounded-xl"
              style={{ rotate: revealDiv2, x: revealDivX2 }}
            ></motion.div>
            <motion.div
              className="absolute bg-[url(/couple-bg.jpg)] w-[300px] h-[400px] bg-cover -top-4 right-0 rounded-xl"
              style={{ rotate: revealDiv1, x: revealDivX1 }}
            ></motion.div>
            <p className="text-[20px] mb-4">Sabtu</p>
            <p className="text-[60px]">21</p>
            <p className="text-[40px] font-normal">Desember</p>
            <p className="text-[30px]">2024</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DateSection;
