import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="w-full h-screen fixed z-50 top-0 bg-[#E8DED8] flex items-center justify-center text-4xl text-white"
      initial={{
        opacity: 1,
        // y: 0,
      }}
      exit={{
        opacity: 0,
        // y: -2000,
      }}
      transition={{
        duration: 2,
      }}
    >
      Tunggu ya
    </motion.div>
  );
};

export default Loading;
