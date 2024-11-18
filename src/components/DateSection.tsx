import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { PiGiftBold } from "react-icons/pi";
import { BsChatHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DateSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const op1 = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.25],
    [0.1, 1, 1, 0.1]
  );
  const h1 = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.25],
    [0, 400, 400, 0]
  );

  const op2 = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.45],
    [0.1, 1, 1, 0.1]
  );
  const h2 = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.45],
    [0, 180, 180, 0]
  );

  const op3 = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65, 0.7],
    [0.1, 1, 1, 0.1]
  );
  const h3 = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65, 0.7],
    [0, 100, 100, 0]
  );

  return (
    <div
      className="w-full max-w-[600px] h-[600vh] text-center pt-32 overflow-y-clip relative"
      ref={ref}
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div
        className="fixed h-screen -top-20 left-0 -z-10 text-center"
        style={{ width: "inherit" }}
      >
        <div className="flex h-full flex-col items-center justify-center text-3xl text-black">
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 px-8">
            <motion.div
              className="w-full flex flex-row justify-center items-center gap-4 font-bold"
              style={{ opacity: op1 }}
            >
              <h1>Waktu Acara</h1>
              <BiSolidCalendarHeart color="#17190f" size={50} />
            </motion.div>
            <motion.div
              className="w-full flex flex-col items-center rounded-3xl font-bold overflow-hidden"
              style={{ height: h1 }}
            >
              <div className="flex flex-col justify-center items-center w-full rounded-3xl font-bold overflow-hidden py-4 px-20">
                <h1 className="text-2xl border-b-[1px] border-[rgba(23,25,15,0.3)] pb-2 mb-2 text-kuning">
                  Akad
                </h1>
                <h1 className="text-xl font-normal opacity-60">
                  <span className="text-black">Sabtu,</span>
                  <br />
                  21 Desember 2024
                  <br />
                  07.30 - 10.00
                </h1>
                <h1 className="text-black opacity-50 my-6">&#x2022;</h1>
                <h1 className="text-2xl border-b-[1px] border-[rgba(23,25,15,0.3)] pb-2 mb-2 text-merah">
                  Resepsi
                </h1>
                <h1 className="text-xl font-normal opacity-60">
                  <span className="text-black">Sabtu,</span>
                  <br />
                  21 Desember 2024
                  <br />
                  11.00 - 13.00
                </h1>
              </div>
            </motion.div>

            <motion.div
              className="w-full flex flex-row justify-center items-center gap-4 font-bold"
              style={{ opacity: op2 }}
            >
              <h1>Kirim Hadiah</h1>
              <PiGiftBold color="#17190f" size={50} />
            </motion.div>
            <motion.div
              className="w-full flex flex-col justify-center rounded-3xl font-bold overflow-hidden"
              style={{ height: h2 }}
            >
              <div className="flex flex-row items-center justify-center w-full rounded-3xl font-bold overflow-hidden p-4 gap-4">
                <div className="p-4 flex items-center justify-center rounded-lg bg-[#E8DED8]">
                  <img src="/images/bca.webp" className="w-20 opacity-40" />
                </div>
                <div className="flex flex-col justify-center items-start text-lg w-1/2 text-left leading-6 gap-2 opacity-60 font-normal">
                  <p className="border-b-[1px] border-[rgba(23,25,15,0.3)] pb-2">
                    <span className="font-bold">Muhamad Rizal</span>
                    <br />
                    1390540805
                  </p>
                  <p>
                    <span className="font-bold">Hanifa Mutia</span>
                    <br />
                    1390540805
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full flex flex-row justify-center items-center gap-4 font-bold"
              style={{ opacity: op3 }}
            >
              <h1>Sampaikan Pesan</h1>
              <BsChatHeartFill color="#17190f" size={50} />
            </motion.div>
            <motion.div
              className="w-full rounded-3xl font-bold overflow-hidden"
              style={{ height: h3 }}
            >
              <div className="pt-4">
                <Link
                  to="/messages"
                  className="text-xl border-[1px] border-[rgba(23,25,15,0.6)] rounded-xl p-4 translate-y-5 opacity-60"
                >
                  Kirim pesan disini
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSection;
