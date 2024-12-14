import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { BsChatHeartFill } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Layer from "./Layer";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Story = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start center", "end start"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0.03, 0.1, 0.2, 0.26],
    [50, 0, 0, 0]
  );
  const op1 = useTransform(
    scrollYProgress,
    [0.03, 0.1, 0.2, 0.26],
    [0, 1, 1, 0]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0.03, 0.1, 0.2, 0.26],
    [0.98, 1, 1, 0.98]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0.67, 0.72, 0.8, 0.9],
    [50, 0, 0, 0]
  );
  const op2 = useTransform(
    scrollYProgress,
    [0.67, 0.72, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const op3 = useTransform(
    scrollYProgress,
    [0.67, 0.72, 0.9, 1],
    [0, 0.8, 0.8, 0]
  );
  const op4 = useTransform(scrollYProgress2, [0.1, 0.2], [0, 0.8]);
  const scale2 = useTransform(
    scrollYProgress,
    [0.47, 0.53, 0.6, 0.65],
    [0.98, 1, 1, 0.98]
  );

  const clt = useTransform(
    scrollYProgress2,
    [0, 0.1, 0.3, 0.4],
    [50, 0, 0, 250]
  );
  const cl = useTransform(scrollYProgress2, [0, 0.1, 0.3, 0.4], [50, 0, 0, 0]);
  const cl2 = useTransform(
    scrollYProgress2,
    [0, 0.1, 0.3, 0.4],
    [20, 0, 0, 10]
  );
  const cll = useMotionTemplate`inset(${clt}px ${cl2}px ${cl}px ${cl2}px round ${cl2}px)`;

  const scale3 = useTransform(
    scrollYProgress2,
    [0, 0.1, 0.3, 0.4],
    [1.05, 1, 1, 1.05]
  );
  const op5 = useTransform(scrollYProgress2, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const op6 = useTransform(scrollYProgress2, [0.3, 0.4], [0, 1]);

  return (
    <div
      className="relative w-full z-10"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div
        className="w-full max-w-[600px] pb-[800px] text-center overflow-hidden relative z-10"
        ref={ref}
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <motion.div
          className="w-full mt-[900px] relative bg-black h-[600px] sm:h-[800px]"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <Layer speed={2000} className="absolute -top-[1600px]">
            <img src="/images/couple-2.jpg" className="rounded-lg" />
          </Layer>
          <div className="absolute flex flex-col justify-center text-left px-8 pb-4 w-full bg-gradient-to-t from-[rgba(23,25,15,0.7)] z-[6] text-white bottom-0 h-32 leading-5">
            <h1 className="text-3xl font-bold">awal &#x2022;</h1>
            <p>
              saling mengetahui keberadaan satu sama lain di masa remaja saat
              kami berdua duduk di bangku sekolah yang sama
            </p>
          </div>
        </motion.div>
        <h1 className="text-kuning my-2 text-5xl">&#x2022;</h1>
        <div
          className="w-full relative bg-black h-[600px] sm:h-[800px]"
          style={{ clipPath: "inset(0 15px 0 15px round 40px)" }}
        >
          <Layer speed={2000} className="absolute -top-[1650px] sm:-top-[">
            <img src="/images/couple-3.jpg" className="scale-105 -rotate-1" />
          </Layer>
          <div className="absolute flex flex-col justify-center text-left px-10 pb-4 w-full bg-gradient-to-t from-[rgba(23,25,15,0.7)] z-[6] text-white bottom-0 h-32 leading-5">
            <h1 className="text-3xl font-bold">hubungan &#x2022;</h1>
            <p>
              memutuskan untuk menjalin hubungan beberapa waktu setelah lulus
            </p>
          </div>
        </div>
        <div
          className="fixed top-[35%] left-0 z-10 text-center pointer-events-none"
          style={{ width: "inherit" }}
        >
          <motion.h1
            className="text-4xl text-center font-bold will-change-transform"
            style={{ y: y1, opacity: op1, scale: scale1 }}
          >
            sedikit cerita...
          </motion.h1>
        </div>
        <div
          className="fixed top-[35%] left-0 z-10 text-center"
          style={{ width: "inherit" }}
        >
          <motion.h1
            className="text-3xl text-center font-bold will-change-transform mx-12 text-white"
            style={{ y: y2, opacity: op2, scale: scale2 }}
          >
            namun kami terpisah untuk beberapa waktu
          </motion.h1>
        </div>
      </div>
      <div ref={ref2} className="relative w-full h-[200vh] z-10">
        <div className="w-full sticky top-12">
          <motion.div
            style={{ opacity: op6 }}
            className="w-full rounded-3xl p-4 flex items-center justify-center font-bold overflow-hidden text-white"
          >
            <div className="pt-4 flex flex-col gap-2 items-center justify-center">
              <Link
                to="/messages"
                className="border-[1px] border-white rounded-xl px-4 py-2 flex flex-row items-center gap-2"
              >
                <h1>Sampaikan Pesan</h1>
                <BsChatHeartFill color="white" size={20} />
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="border-[1px] border-white rounded-xl px-4 py-2 flex flex-row items-center gap-2"
              >
                <h1>Kirim Hadiah</h1>
                <PiGiftBold color="white" size={20} />
              </button>
              <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel
                      transition
                      className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                      <div>
                        <div className="mt-3 text-center sm:mt-5">
                          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-lg">
                            <div className="px-4 py-2 sm:px-6 font-bold">
                              Muhamad Rizal
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                              BCA 1390540805
                            </div>
                          </div>
                          <div className="divide-y mt-4 divide-gray-200 overflow-hidden rounded-lg bg-white shadow-lg">
                            <div className="px-4 py-2 sm:px-6 font-bold">
                              Hanifa Mutia
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                              BCA 7940288091
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="inline-flex w-full justify-center rounded-md bg-kuning px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-merah focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Kembali
                        </button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-full sticky top-0 bg-cover bg-center h-screen text-center overflow-hidden"
          style={{ clipPath: cll }}
        >
          <motion.div className="absolute bg-[url(/6.jpg)] top-0 h-full w-full bg-cover bg-center pointer-events-none"></motion.div>
          <motion.h1
            style={{ opacity: op5, scale: scale3 }}
            className="relative font-bold z-10 px-12 pt-40 text-2xl text-white"
          >
            sampai akhirnya memutuskan untuk kembali berbahagia bersama
            <br />
            &#x2022;
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: op4, width: "inherit" }}
        className="fixed top-0 z-0 bg-black h-full pointer-events-none"
      ></motion.div>
      <motion.div
        style={{ opacity: op3, width: "inherit" }}
        className="fixed top-0 z-0 bg-black h-full pointer-events-none"
      ></motion.div>
    </div>
  );
};

export default Story;
