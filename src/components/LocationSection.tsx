import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Line from "./svg/Line";
import Location from "./svg/Location";
import Line2 from "./svg/Line2";
import Layer from "./Layer";
import Line3 from "./svg/Line3";
import Line4 from "./svg/Line4";

const LocationSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
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

  const div1Opacity = useTransform(scrollYProgress, [0.1, 0.18], [0, 1]);
  const div1Y = useTransform(scrollYProgress, [0.12, 0.2], [0, 10]);

  const p1Opacity = useTransform(scrollYProgress, [0.2, 0.24], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.22, 0.27], [10, 0]);

  const div2ScaleX = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const div2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 0.6]);

  const p2Opacity = useTransform(scrollYProgress, [0.36, 0.4], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.35, 0.42], [10, 0]);

  const div3ScaleY = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.58, 0.62], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.56, 0.63], [10, 0]);
  return (
    <motion.div
      className="h-[4000px] w-[400px] mx-auto relative -mt-[600px] pt-[640px]"
      ref={ref}
    >
      <div className="w-full h-[800px] sticky top-0">
        <motion.div style={{ opacity: div2Opacity }}>
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

          <Layer speed={100} className="absolute w-28 -z-10 right-10 top-52">
            <img src="/images/leaf9.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={200} className="absolute w-28 -z-10 left-10 top-52">
            <img src="/images/leaf5.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={150} className="absolute w-28 -z-10 right-20 top-64">
            <img src="/images/leaf4.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={250} className="absolute w-16 -z-10 left-32 top-64">
            <img src="/images/leaf12.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={300} className="absolute w-28 -z-10 right-5 top-64">
            <img src="/images/leaf10.svg" className="rotate-[160deg]" />
          </Layer>
          <Layer speed={350} className="absolute w-16 -z-10 left-5 top-64">
            <img src="/images/leaf9.svg" className="rotate-[160deg]" />
          </Layer>
        </motion.div>
        <Line progress={scrollYProgress} />
        <Line2 progress={scrollYProgress} />
        <Line3 progress={scrollYProgress} />
        <Line4 progress={scrollYProgress} />
        <div className="pt-[100px] opacity-[0.99]">
          <motion.div
            style={{ opacity: div1Opacity, y: div1Y }}
            className="w-[100px] h-[100px] rounded-full bg-[#29296d] pt-4 pb-5 mx-auto"
          >
            <Location progress={scrollYProgress} />
          </motion.div>
          <div className="flex flex-1 flex-col items-center mt-6 text-[30px] text-[#29296d] font-bold px-6">
            <motion.p style={{ opacity: p1Opacity, y: p1Y }}>Lokasi</motion.p>
            <motion.div
              style={{
                scaleX: div2ScaleX,
              }}
              className="w-full rounded-xl bg-[#ffcd00] mt-4 origin-[0_100%]"
            >
              <motion.p
                style={{ opacity: p2Opacity, y: p2Y }}
                className="text-[#29296d] font-bold py-6 px-4 text-[20px] text-center leading-6"
              >
                Aula Masjid Al-Abror
                <br /> Jl. H. Abdul Syukur Padasuka, Cimahi
              </motion.p>
            </motion.div>
            <motion.a
              href="google.com"
              style={{
                scaleY: div3ScaleY,
                opacity: div3ScaleY,
              }}
              className="w-1/2 rounded-3xl bg-[#df3708] mt-20 origin-[100%_0] text-[20px] text-white py-6 text-center"
            >
              <motion.p style={{ opacity: buttonOpacity, y: buttonY }}>
                Lihat di map
              </motion.p>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationSection;
