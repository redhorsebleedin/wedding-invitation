import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Line5 from "./svg/Line5";

const DateSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
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

  const isInView = useInView(ref, {
    amount: 0.5,
  });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.div className="h-[2000px] w-[400px] mx-auto relative sm:z-0 -z-10 sm:-mt-[80px] -mt-[100px]">
      <div className="w-full h-[700px] sticky top-0 overflow-x-clip">
        <Line5 progress={scrollYProgress} />
        <div
          className="pt-[100px] flex flex-1 flex-col items-center h-full"
          ref={ref}
        >
          <motion.div className="bg-[#df3708] w-5/6 p-4 rounded-t-[30px]">
            asdasd
          </motion.div>
          <motion.div className="bg-[#fa673e] w-5/6 p-4 rounded-b-[30px]">
            asdasd
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DateSection;
