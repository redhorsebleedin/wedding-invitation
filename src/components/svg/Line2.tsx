import { motion, useTransform } from "framer-motion";

const Line2 = ({ progress }) => {
  const pathLength = useTransform(progress, [0.3, 0.5], [0, 0.9]);

  return (
    <svg viewBox="0 0 400 800" className="absolute -z-10 mt-2">
      <g transform="matrix(0 1 -1 0 400 -0)">
        <motion.path
          style={{ pathLength }}
          d="M128.25111389160156,196.4125518798828C137.518679300944,196.4125518798828,167.56352996826172,223.61733436584473,183.85650634765625,196.4125518798828C200.14948272705078,169.2077693939209,211.65919494628906,28.10164515177409,226.00897216796875,33.18385696411133C240.35874938964844,38.26606877644857,255.1569620768229,201.04633140563965,269.9551696777344,226.90582275390625C284.7533772786458,252.76531410217285,298.95367431640625,195.0672607421875,314.7982177734375,188.34080505371094C330.64276123046875,181.61434936523438,356.6517283121745,186.84604136149088,365.0224304199219,186.54708862304688"
          fill="none"
          stroke-width="8"
          stroke="#df3708"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default Line2;
