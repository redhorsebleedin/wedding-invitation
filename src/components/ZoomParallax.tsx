import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as styles from "./styles.module.scss";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  console.log(styles);

  const scale4 = useTransform(scrollYProgress, [0.01, 1], [1, 2]);
  const scale5 = useTransform(scrollYProgress, [0.01, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0.01, 1], [1, 10]);
  const scale8 = useTransform(scrollYProgress, [0.01, 1], [1, 15]);

  const pictures = [
    {
      src: "/couple-bg.jpg",
      scale: scale4,
      className: "w-[200px]",
    },
    {
      src: "/couple1.jpg",
      scale: scale5,
      className: "-top-[230px] left-[60px] w-[120px]",
    },
    {
      src: "/couple2.jpg",
      scale: scale6,
      className: "-top-[150px] -left-[90px] w-[150px]",
    },
    {
      src: "/couple3.jpg",
      scale: scale8,
      className: "-top-[50px] left-[120px] w-[130px]",
    },
    {
      src: "/couple4.jpg",
      scale: scale6,
      className: "top-[120px] left-[25px] w-[140px]",
    },
    {
      src: "/couple5.jpg",
      scale: scale5,
      className: "top-[50px] -left-[120px] w-[120px]",
    },
  ];

  return (
    <div ref={container} className="h-[200vh] relative">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ src, scale, className }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={classNames(
                "w-full h-full top-0 absolute flex items-center justify-center",
                styles.el
              )}
            >
              <div className={classNames("relative", className)}>
                <img
                  src={src}
                  className="w-full object-cover rounded-xl border-4"
                  alt="image"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
