import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Heart = (props) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["3 1", "6 1"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.1]);
  const fillOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // const scaleXVal = useTransform(scrollYProgress, (x) => (x > 0.6 ? 1.1 : 0));

  return (
    <motion.svg
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
    >
      <motion.path
        d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
        stroke="#df3708"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
    </motion.svg>
  );
};

export default Heart;
