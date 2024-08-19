import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Map = (props) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["2 1", "3 1"],
  });

  // const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.1]);
  // const fillOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const val = useTransform(scrollYProgress, (x) => (x > 0.6 ? 1.1 : 0));

  const pathLength = useSpring(val, {
    bounce: 0,
    duration: 1200,
  });
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <motion.path
        d="M2.28906 7.77998V17.51C2.28906 19.41 3.63906 20.19 5.27906 19.25L7.62906 17.91C8.13906 17.62 8.98906 17.59 9.51906 17.86L14.7691 20.49C15.2991 20.75 16.1491 20.73 16.6591 20.44L20.9891 17.96C21.5391 17.64 21.9991 16.86 21.9991 16.22V6.48998C21.9991 4.58998 20.6491 3.80998 19.0091 4.74998L16.6591 6.08998C16.1491 6.37998 15.2991 6.40998 14.7691 6.13998L9.51906 3.51998C8.98906 3.25998 8.13906 3.27998 7.62906 3.56998L3.29906 6.04998C2.73906 6.36998 2.28906 7.14998 2.28906 7.77998Z"
        stroke="#fff"
        strokeWidth=".5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
      <motion.path
        opacity="0.4"
        d="M8.56055 4V17"
        stroke="#fff"
        strokeWidth=".5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
      <motion.path
        opacity="0.4"
        d="M15.7305 6.62012V20.0001"
        stroke="#fff"
        strokeWidth=".5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
    </motion.svg>
  );
};

export default Map;
