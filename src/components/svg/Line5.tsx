import { motion, useTransform } from "framer-motion";

const Line5 = ({ progress }) => {
  const pathLength = useTransform(progress, [0.1, 0.5], [0, 0.7]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 800"
      className="absolute -z-10 -translate-x-1"
    >
      <g xmlns="http://www.w3.org/2000/svg" transform="matrix(0 1 -1 0 400 -0)">
        <motion.path
          style={{ pathLength }}
          d="M0,34.080718994140625C11.360239664713541,34.977579752604164,52.61584726969401,23.019432067871094,68.16143798828125,39.461883544921875C83.70702870686848,55.904335021972656,71.15097300211589,111.95814768473308,93.27354431152344,132.7354278564453C115.39611562093098,153.51270802815756,173.2436548868815,158.5949223836263,200.89686584472656,164.1255645751953C228.55007680257162,169.6562067667643,249.47681935628256,165.62032826741537,259.19281005859375,165.91928100585938"
          fill="none"
          strokeWidth="8"
          stroke="#ff9d00"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Line5;
