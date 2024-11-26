import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const WeddingDate = () => {
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
        ["#location-container", { scaleY: 1 }],
        ["p", { opacity: 1, y: 0 }, { delay: stagger(0.1) }],
      ]);
    }
  }, [inView]);

  return (
    <div
      className="w-full mx-auto relative px-4 mt-4 text-[#29296d]"
      ref={scope}
    >
      <motion.div
        id="location-container"
        className="w-full bg-[#ffcd00] text-center rounded-3xl origin-[100%_0] z-0 relative"
        initial={{ scaleY: 0 }}
      >
        <div className="flex flex-1 flex-col h-full p-6">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 2 }}
            className="font-bold text-xl leading-7"
          >
            Saturday
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 2 }}
            className="font-bold text-4xl leading-7"
          >
            December 21st
          </motion.p>
          {/* <motion.button
            initial={{ y: 10, opacity: 0 }}
            className="h-10 origin-[0_100%] text-white text-xs border border-white rounded-xl py-1 mt-3"
          >
            View map
          </motion.button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingDate;
