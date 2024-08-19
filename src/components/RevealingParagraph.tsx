import { motion, useScroll, useTransform } from "framer-motion";

import React, { useRef } from "react";

import * as styles from "./styles.module.scss";
import classNames from "classnames";

export default function RevealingParagraph({ paragraph, ...props }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end 1", "start 0.3"],
  });

  return (
    <motion.p
      ref={container}
      className={classNames(styles.paragraph, props.className)}
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
}
