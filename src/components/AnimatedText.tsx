import classNames from "classnames";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { useEffect, useState } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function AnimatedText({
  text,
  className,
  delay = 0,
}: AnimatedTextProps) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 0.3,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
      delay: delay,
    });

    return controls.stop;
  }, []);

  return (
    <p
      className={classNames(
        animationCompleted ? "animation-completed" : "",
        className
      )}
    >
      <motion.span>{displayText}</motion.span>&nbsp;
    </p>
  );
}
