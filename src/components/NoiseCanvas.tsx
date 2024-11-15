import React, { useEffect, useRef } from "react";

const NoiseCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          // buffer32[i] = i % 2 === 1 ? 0xffffffff : 0xff000000;
          buffer32[i] = 0xffffffff;
        }
      }

      noiseData.push(idata);
    };

    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
    };

    const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 1);
    };

    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    let resizeThrottle;
    const reset = () => {
      window.addEventListener("resize", () => {
        window.clearTimeout(resizeThrottle);

        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      });
    };

    // Init
    setup();
    reset();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", reset);
      window.clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="noise"
      className="w-full h-[100lvh] opacity-5 absolute top-0 left-0"
    />
  );
};

export default NoiseCanvas;
