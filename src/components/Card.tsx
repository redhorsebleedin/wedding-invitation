import classNames from "classnames";
import { easeIn, easeInOut, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  color,
  progress,
  range,
  targetScale,
  children,
  ...props
}) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale], {
    ease: easeInOut,
  });

  console.log(color);
  return (
    <div ref={container} className={classNames("-mb-12", props.className)}>
      <motion.div
        style={{
          scale,
          backgroundImage: `url(${color})`,
        }}
        className={classNames(
          color && "shadow-[inset_-3px_122px_100px_5px_rgba(0,0,0,0.7)]",
          "w-full h-[80lvh] origin-top rounded-3xl bg-bottom bg-cover"
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
// bg-[url(/groom.jpg)]
