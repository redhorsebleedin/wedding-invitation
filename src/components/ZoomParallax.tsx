import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale3 = useTransform(scrollYProgress, [0.01, 0.8], [0.4, 1.1]);
  const scale5 = useTransform(scrollYProgress, [0.01, 1], [1, 7]);
  const scale6 = useTransform(scrollYProgress, [0.01, 1], [1, 12]);
  const scale8 = useTransform(scrollYProgress, [0.01, 1], [1, 15]);

  const pictures = [
    {
      src: "/2.jpg",
      scale: scale3,
      className: "w-full",
    },
    {
      src: "/1.jpg",
      scale: scale5,
      className: "-top-[230px] left-[60px] w-[120px]",
    },
    {
      src: "/5.jpg",
      scale: scale6,
      className: "-top-[150px] -left-[110px] w-[150px]",
    },
    {
      src: "/6.jpg",
      scale: scale8,
      className: "-top-[50px] left-[120px] w-[130px]",
    },
    {
      src: "/4.jpg",
      scale: scale6,
      className: "top-[150px] left-[25px] w-[200px]",
    },
    {
      src: "/3.jpg",
      scale: scale5,
      className: "top-[50px] -left-[120px] w-[120px]",
    },
  ];

  return (
    <div ref={container} className="h-[200vh] relative z-10">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ src, scale, className }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={classNames(
                "w-full h-full top-0 absolute flex items-center justify-center will-change-transform"
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
