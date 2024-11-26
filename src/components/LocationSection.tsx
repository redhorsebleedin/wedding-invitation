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
    offset: ["center end", "end start"],
  });

  const div1Opacity = useTransform(scrollYProgress, [0.1, 0.18], [0, 1]);
  const div1Y = useTransform(scrollYProgress, [0.12, 0.2], [0, 10]);

  const p1Opacity = useTransform(scrollYProgress, [0.2, 0.24], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.22, 0.27], [10, 0]);

  const div2ScaleX = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const div2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 0.6]);

  const p2Opacity = useTransform(scrollYProgress, [0.36, 0.4], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.35, 0.42], [10, 0]);

  const div3ScaleY = useTransform(scrollYProgress, [0.5, 0.5], [0, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.52, 0.58], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.52, 0.58], [10, 0]);
  return (
    <motion.div
      className="h-[4000px] w-[400px] mx-auto relative -mt-[1500px] pt-[640px] z-[1] pointer-events-auto"
      ref={ref}
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="h-[800px] fixed top-0" style={{ width: "inherit" }}>
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
        {/* <Line3 progress={scrollYProgress} /> */}
        <Line4 progress={scrollYProgress} />
        <div className="pt-[100px] opacity-[0.99]">
          <motion.div
            style={{ opacity: div1Opacity, y: div1Y }}
            className="w-[100px] h-[100px] rounded-full bg-[#E8DED8] pt-4 pb-5 mx-auto"
          >
            <Location progress={scrollYProgress} />
          </motion.div>
          <div className="flex flex-1 flex-col items-center mt-6 text-[30px] text-white px-6">
            {/* <motion.p style={{ opacity: p1Opacity, y: p1Y }}>
              Lokasi Acara
            </motion.p> */}
            <div className="h-10"></div>
            <motion.div
              style={{
                scaleX: div2ScaleX,
              }}
              className="w-full rounded-xl bg-merah mt-4 origin-[0_100%]"
            >
              <motion.p
                style={{ opacity: p2Opacity, y: p2Y }}
                className="text-white pt-6 pb-6 px-4 text-center leading-6 opacity-30"
              >
                <span className="font-bold text-2xl">Lokasi Acara</span>
                <br />
                <span className="text-lg leading-3">
                  Aula Masjid Al-Abror
                  <br /> Jl. H. Abdul Syukur, Padasuka, Cimahi
                </span>
              </motion.p>
              <motion.a
                href="https://maps.app.goo.gl/BbFpfNke99igwToC8"
                target="_blank"
                style={{
                  opacity: div3ScaleY,
                }}
                className="w-1/2 rounded-3x origin-[100%_0] text-[20px] relative z-30"
              >
                <motion.p
                  style={{ opacity: buttonOpacity, y: buttonY }}
                  className="text-white text-center border-[1px] border-white p-4 mx-20 rounded-2xl mb-6"
                >
                  Lihat di map
                </motion.p>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationSection;
