import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FirstSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [50, 0, 0, 0]);
  const op1 = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const scale1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4, 0.5],
    [0.98, 1, 1, 0.98]
  );
  // const y2 = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [50, 0, 0, 0]);
  const op2 = useTransform(
    scrollYProgress,
    [0.55, 0.75, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const color = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["#000000", "#E06262"]
  );

  return (
    <div
      className="w-full max-w-[600px] h-[300vh] text-center pt-32 overflow-y-clip relative"
      ref={ref}
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div
        className="fixed top-[35%] left-0 -z-10 text-center"
        style={{ width: "inherit" }}
      >
        <motion.h1
          className="text-4xl text-center font-bold will-change-transform"
          style={{ y: y1, opacity: op1, scale: scale1 }}
        >
          The wedding of
          <br />
          <motion.span style={{ color }}>Rizal and Hanifa</motion.span>
        </motion.h1>
      </div>
      <div
        className="fixed top-[35%] left-0 -z-10 text-center"
        style={{ width: "inherit" }}
      >
        <motion.h1
          className="text-4xl text-center font-bold will-change-transform"
          style={{ opacity: op2 }}
        >
          <span className="text-kuning">Sabtu,</span>
          <br /> 21 Desember 2024
        </motion.h1>
      </div>
    </div>
  );
};

export default FirstSection;
