import { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Layer from "./Layer";
import Signature1 from "./svg/Signature1";

export const GroomBride = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const w1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "85%"]);
  const l1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 40]);
  const l2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 20]);
  const scale1 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);

  const w2 = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "85%"]);
  const l3 = useTransform(scrollYProgress, [0.5, 0.6], [0, -40]);
  const l4 = useTransform(scrollYProgress, [0.5, 0.6], [0, -20]);
  const scale2 = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);

  return (
    <div ref={ref} className="w-full pt-32 overflow-hidden">
      <motion.div
        className="h-[600px] bg-[url(/groom.jpg)] bg-cover bg-center relative rounded-r-3xl"
        style={{ width: w1 }}
      >
        <Layer speed={600} className="absolute bottom-[250px] left-0 w-5/6">
          <motion.div
            className="font-oceanwide w-full py-4 px-6 rounded-xl rounded-bl-xl origin-right"
            style={{ scaleX: scale1 }}
          >
            <motion.h1
              style={{ opacity: op1 }}
              className="text-md text-white font-extrabold"
            >
              The Groom
            </motion.h1>
            <motion.h1
              style={{ opacity: op1 }}
              className="text-2xl text-white font-bold"
            >
              Muhamad Rizal
            </motion.h1>
            <motion.p
              style={{ opacity: op1 }}
              className="text-md text-white font-normal mt-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              nihil reprehenderit accusamus inventore sequi
            </motion.p>
          </motion.div>
        </Layer>
        {/* <motion.div
          style={{ left: l1 }}
          className="absolute w-full top-8 h-[600px] bg-[#31317b] bg-cover bg-center -z-10"
        ></motion.div>
        <motion.div
          style={{ left: l2 }}
          className="absolute w-full top-4 h-[600px] bg-[#29296d] bg-cover bg-center -z-10"
        ></motion.div> */}
      </motion.div>
      <motion.div
        className="h-[600px] bg-[url(/groom.jpg)] bg-cover bg-center relative ml-auto mt-10 rounded-l-3xl"
        style={{ width: w2 }}
      >
        <Layer speed={600} className="absolute bottom-[280px] left-0 w-5/6">
          <motion.div
            className="font-oceanwide w-full py-4 px-6 rounded-xl rounded-br-xl origin-left"
            style={{ scaleX: scale2 }}
          >
            <motion.h1
              style={{ opacity: op2 }}
              className="text-md text-white font-extrabold"
            >
              The Bride
            </motion.h1>
            <motion.h1
              style={{ opacity: op2 }}
              className="text-2xl text-white font-extrabold"
            >
              Hanifa Mutia
            </motion.h1>
            <motion.p
              style={{ opacity: op2 }}
              className="text-md text-white font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              nihil reprehenderit accusamus inventore sequi
            </motion.p>
          </motion.div>
        </Layer>
        {/* <motion.div
          style={{ left: l3 }}
          className="absolute w-full top-8 h-[600px] bg-[#f3633c] bg-cover bg-center -z-10"
        ></motion.div>
        <motion.div
          style={{ left: l4 }}
          className="absolute w-full top-4 h-[600px] bg-[#df3708] bg-cover bg-center -z-10"
        ></motion.div> */}
      </motion.div>
    </div>
  );
};
