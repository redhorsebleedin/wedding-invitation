import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function Layer({
  speed,
  children,
  ...props
}: HTMLMotionProps<"div"> & {
  speed: number;
  children: ReactNode;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, speed);

  return (
    <motion.div style={{ y }} {...props}>
      {children}
    </motion.div>
  );
}
