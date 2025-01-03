import { motion, useTransform } from "framer-motion";

const Location = ({ progress }) => {
  const pathLength = useTransform(progress, [0.19, 0.25], [0, 1.1]);

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      initial={{ y: -3 }}
      animate={{ y: 3 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.4,
      }}
      className="opacity-40"
    >
      <motion.path
        d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
        stroke="black"
        fill="none"
        strokeWidth="1"
        style={{ pathLength }}
      />
      <motion.path
        d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
        fill="black"
        // stroke="#fff"
        // strokeWidth="1"
        strokeLinecap="round"
        style={{ fillOpacity: pathLength }}
      />
    </motion.svg>
  );
};

export default Location;
