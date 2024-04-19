import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring, useTransition } from "@react-spring/web";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import "./App.css";

function App() {
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;
  const parallax = useRef<IParallax>(null!);

  // LAYER 1

  const welcomeAnimation = useTransition(
    [
      { id: 1, text: "Hi," },
      { id: 2, text: "Rizal" },
      { id: 3, text: "You're invited!" },
    ],
    {
      from: { opacity: 0, y: 30 },
      enter: { opacity: 1, y: 0 },
      leave: { opacity: 1, y: 0 },
      trail: 100,
    }
  );

  const welcomeWrapper = useSpring({
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0 },
  });

  // END LAYER 1

  // LAYER 2

  const [layer2Text, layer2TextApi] = useTransition(
    [
      { id: 1, text: "THE WEDDING OF" },
      { id: 2, text: "RIZAL & HANIFA" },
    ],
    () => ({
      from: {
        x: 100,
        y: 250,
        scale: 1.5,
      },
      enter: {
        x: 0,
        y: 0,
        scale: 1,
      },
      leave: {
        x: 0,
        y: 0,
        scale: 3,
      },
      delay: 1500,
      trail: 400,
    })
  );

  const [layer2Bubble, layer2BubbleApi] = useSpring(() => ({
    from: {
      scale: 0,
      borderRadius: "50%",
    },
  }));

  // END LAYER 2

  const handleScroll = () => {
    console.log(parallax.current.offset);
    if (parallax?.current?.offset === 1) {
      layer2TextApi.start();
      layer2BubbleApi.start({
        to: {
          scale: 1,
          borderRadius: "0",
        },
        delay: 3000,
      });
    }
  };

  useEffect(() => {
    const container = document.querySelector(".my-class-name");
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-fit- bg-[#253237] !overflow-hidden">
      <div className="fixed bottom-4 right-4 text-white flex flex-col gap-2 z-50">
        <button
          className="rounded-full shadow-md items-center justify-center bg-[rgba(0,0,0,0.2)]"
          onClick={() => {
            if (parallax.current?.offset > 0) {
              parallax.current?.scrollTo(parallax.current.offset - 1);
            }
          }}
        >
          <BiChevronUp size={48} />
        </button>
        <button
          className="rounded-full shadow-md items-center justify-center bg-[rgba(0,0,0,0.2)]"
          onClick={() => {
            parallax.current?.scrollTo(parallax.current.offset + 1);
          }}
        >
          <BiChevronDown size={48} />
        </button>
      </div>

      <Parallax
        ref={parallax}
        pages={3}
        className="!overflow-hidden my-class-name"
        // className="my-class-name"
      >
        {/* LAYER 1 */}
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="bg-[url(https://www.kalacerita.com/wp-content/uploads/2024/02/GITAFIKRI-123.jpg)] h-screen w-screen bg-cover bg-center"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.67} speed={0.05}>
          <animated.img src="/shape2.png" style={welcomeWrapper} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0}>
          <animated.img src="/shape1.png" style={welcomeWrapper} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.77} speed={-0.05}>
          <animated.div className="self-center justify-center p-8">
            {welcomeAnimation((style, item) => {
              console.log(style, item);
              return (
                <animated.p
                  className={classNames(
                    (item.id === 1 || item.id === 3) &&
                      "text-[#EC014F] text-[25px] -my-5",
                    item.id === 2 && "text-[#5200CE] text-[50px] -ml-1"
                  )}
                  style={style}
                >
                  {item.text}
                </animated.p>
              );
            })}
          </animated.div>
        </ParallaxLayer>
        {/* END LAYER 1 */}

        {/* LAYER 2 */}
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ backgroundColor: "#24DBD7" }}
          className="p-4 leading-tight"
        >
          {layer2Text((style, item) => {
            console.log(style, item);
            return (
              <animated.p
                className={
                  item.id === 1
                    ? "text-[#EC014F] text-[15px]"
                    : "text-[#5200CE] text-[25px]"
                }
                style={style}
              >
                {item.text}
              </animated.p>
            );
          })}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <animated.div
            className="w-full h-full bg-[#FEE50F]"
            style={layer2Bubble}
          ></animated.div>
        </ParallaxLayer>
        {/* END LAYER 2 */}
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{ backgroundColor: "#e54848" }}
        />

        <ParallaxLayer
          offset={0}
          speed={-0.5}
          factor={4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
      </Parallax>
    </div>
  );
}

export default App;
