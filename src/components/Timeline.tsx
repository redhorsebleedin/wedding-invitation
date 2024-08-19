import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Timeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // const boxAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="h-[900vh] relative w-full px-4" ref={ref}>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          amount: 1,
          once: true,
        }}
        transition={{
          delay: 1,
          duration: 0.3,
        }}
        className="origin-[0_100%] w-full bg-[#ffcd00] rounded-xl p-6 leading-6"
      >
        <motion.p
          className="text-[#29296d] font-bold"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 1,
            once: true,
          }}
          transition={{
            delay: 1.4,
            duration: 0.3,
          }}
        >
          <span className="text-[30px]">21</span>
          <p className="text-[24px]">Desember 2022</p>
        </motion.p>
      </motion.div>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          amount: 1,
          once: true,
        }}
        transition={{
          delay: 1,
          duration: 0.3,
        }}
        className="origin-[0_100%] w-full bg-[#df3708] rounded-xl p-6 leading-6 mt-4"
      >
        <motion.p
          className="text-white font-bold"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 1,
            once: true,
          }}
          transition={{
            delay: 1.4,
            duration: 0.3,
          }}
        >
          Aula Al Abror
        </motion.p>
      </motion.div>
    </div>
  );
};
