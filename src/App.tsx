import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";
import Layer from "./Layer";
import AnimatedText from "./components/AnimatedText";

export default function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <div className="w-screen">
      <div className="w-full h-[90vh] relative flex flex-col justify-end overflow-hidden font-oceanwide">
        <Layer speed={100} className="absolute w-full h-full top-0">
          <div className="w-full h-1/2 bg-[#020E56]"></div>
          <div className="w-full h-1/2 bg-white"></div>
        </Layer>
        <Layer speed={100} className="absolute w-full">
          <img src="/parallax-bg.svg" className="w-full" />
        </Layer>
        {/* <Layer speed={1700} className="absolute w-full top-0 rotate-180">
          <img src="/stars.svg" className="w-full" />
        </Layer> */}
        <Layer speed={1400} className="absolute w-full">
          <img src="/stars.svg" className="w-full" />
        </Layer>
        <Layer speed={1300} className="absolute w-full">
          <img src="/cloud-5.svg" className="w-full" />
        </Layer>
        <Layer speed={1000} className="absolute w-full">
          <img src="/cloud-4.svg" className="w-full" />
        </Layer>
        <Layer
          speed={800}
          className="absolute w-full"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img src="/cloud-3.svg" className="w-full" />
        </Layer>
        <Layer
          speed={1100}
          className="absolute w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/cloud-2.svg" className="w-full" />
        </Layer>
        <Layer
          speed={1200}
          className="absolute w-full"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img src="/cloud-1.svg" className="w-full" />
        </Layer>
        <Layer
          speed={800}
          className="absolute w-full"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-7.svg" className="w-full" />
        </Layer>
        <Layer
          speed={700}
          className="absolute w-full"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-6.svg" className="w-full" />
        </Layer>
        <Layer
          speed={600}
          className="absolute w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-5.svg" className="w-full" />
        </Layer>
        <Layer
          speed={500}
          className="absolute w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-4.svg" className="w-full" />
        </Layer>
        <Layer
          speed={400}
          className="absolute w-full"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-3.svg" className="w-full" />
        </Layer>
        <Layer
          speed={300}
          className="absolute w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-2.svg" className="w-full" />
        </Layer>
        <Layer
          speed={800}
          className="absolute w-full h-full text-white flex flex-col items-center pt-48"
        >
          <AnimatedText text="Hi RUSLI" className="text-3xl" />
          <AnimatedText
            text="You're invited!"
            className="text-3xl "
            delay={0.5}
          />
        </Layer>
        <Layer
          speed={100}
          className="absolute w-full"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <img src="/mosque-1.svg" className="w-full" />
        </Layer>
        <Layer
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          speed={0}
          className="absolute w-full"
        >
          <img src="/couple-1.png" className="w-full" />
        </Layer>
      </div>
      <div className="w-full rounded-xl h-[2000px] bg-white">
        <div className="w-full h-screen relative">
          <Layer
            speed={0}
            className="w-full text-[#29296D] text-3xl flex flex-col p-4 sticky top-0"
          >
            <motion.span
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                amount: 1,
                once: true,
                margin: "0px 0px -300px 0px",
              }}
              transition={{ ease: "linear" }}
              className="overflow-hidden"
            >
              To the wedding of
            </motion.span>
            <motion.span
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                amount: 1,
                once: true,
                margin: "0px 0px -300px 0px",
              }}
              transition={{ ease: "linear", delay: 0.1 }}
            >
              Rizal & Hanifa
            </motion.span>
          </Layer>
        </div>
      </div>
      <div className="h-[2000px]"></div>
    </div>
  );
}
