import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Cloud = (props) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["10 1", "14 1"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.1]);

  const fillOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <motion.svg
      width={props?.width ?? "50px"}
      height={props?.height ?? "50px"}
      viewBox="0 0 24 24"
      fill="#fff"
      style={{ fillOpacity }}
      ref={ref}
    >
      <motion.path
        d="M7.26906 13.0098C6.73906 12.7398 6.14906 12.5998 5.54906 12.5998C0.869062 12.9298 0.869062 19.7398 5.54906 20.0698H16.6391C17.9891 20.0798 19.2891 19.5798 20.2791 18.6698C23.5691 15.7998 21.8091 10.0298 17.4791 9.47976C15.9191 0.109757 2.38906 3.66976 5.59906 12.5998"
        stroke="#29296d"
        strokeWidth=".4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        // style={{ pathLength }}
      />
      <motion.path
        d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977"
        stroke="#29296d"
        strokeWidth=".4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        // style={{ pathLength }}
      />
    </motion.svg>
  );
};

export default Cloud;
