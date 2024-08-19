import {
  motion,
  spring,
  stagger,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Location from "./svg/Location";
import Map from "./svg/Map";

const WeddingLocation = () => {
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["1 1", "1.5 1"],
  // });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  // const scaleXVal = useTransform(scrollYProgress, (x) => (x > 0.4 ? 1 : 0));

  // const scaleX = useSpring(scaleXVal, {
  //   bounce: 0,
  //   duration: 800,
  // });

  const [scope, animate] = useAnimate();

  const inView = useInView(scope, {
    amount: "all",
  });

  useEffect(() => {
    if (inView) {
      animate([
        ["#location-container", { scaleX: 1 }],
        [
          "#location-icon-wrapper, p",
          { opacity: 1, y: 0 },
          { delay: stagger(0.1) },
        ],
        [
          "path",
          { pathLength: 1.1, fillOpacity: 1 },
          { delay: -0.3, duration: 0.5 },
        ],
        ["button", { y: 0, opacity: 1 }, { delay: -0.3 }],
      ]);
      animate(
        "svg",
        { y: 3 },
        { repeat: Infinity, repeatType: "mirror", duration: 0.6 }
      );
    }
  }, [inView]);

  return (
    <div className="w-full mx-auto relative px-4" ref={scope}>
      <motion.div
        id="location-container"
        className="w-full bg-[#29296d] rounded-3xl origin-[0_100%] z-0 relative"
        initial={{ scaleX: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          id="location-icon-wrapper"
          className="absolute -top-[25px] right-[20px] flex flex-col items-center bg-[#df3708] h-[70px] w-[70px] py-3 pr-3 pl-1 rounded-full"
        >
          <Location className="-mb-12 ml-2 z-10" inView={inView} />
        </motion.div>
        <div className="flex flex-1 flex-col justify-center h-full p-6">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            className="text-white font-normal text-2xl"
          >
            Held at
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 2 }}
            className="text-white font-bold text-md leading-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            className="h-10 origin-[0_100%] text-white text-xs border border-white rounded-xl py-1 mt-3"
          >
            View map
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingLocation;
