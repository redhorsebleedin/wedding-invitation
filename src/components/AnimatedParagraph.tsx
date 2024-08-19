import { useScroll, useTransform, motion } from "framer-motion";
import React, { forwardRef, useRef } from "react";
import * as styles from "./styles.module.scss";
import classNames from "classnames";

const AnimatedParagraph = forwardRef(function AnimatedParagraph(
  { paragraph, ...props },
  ref
) {
  const container = ref ?? useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.2"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={classNames(styles.paragraph, props?.className)}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
});

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default AnimatedParagraph;
