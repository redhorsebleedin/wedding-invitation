import { motion, useTransform } from "framer-motion";

const Line = ({ progress }) => {
  const pathLength = useTransform(progress, [0, 0.2], [0, 0.9]);

  return (
    <svg viewBox="0 0 400 800" className="absolute -mt-4 -z-30 opacity-20">
      <g transform="matrix(0 1 -1 0 400 -0)">
        <motion.path
          style={{ pathLength }}
          d="M-0.8968609571456909,184.75335693359375C5.979073464870453,184.45440419514975,31.240658620993294,188.4902826944987,40.35874557495117,182.9596405029297C49.47683252890905,177.4289983113607,48.43049558003744,144.09566243489584,53.81166076660156,151.5695037841797C59.19282595316569,159.04334513346353,66.96561686197917,227.95216369628906,72.64573669433594,227.8026885986328C78.3258565266927,227.65321350097656,82.81016667683919,158.74440256754556,87.89237976074219,150.6726531982422C92.97459284464519,142.6009038289388,89.53662363688152,174.88788859049478,103.1390151977539,179.3721923828125C116.7414067586263,183.85649617513022,158.4454434712728,177.87742869059244,169.50672912597656,177.57847595214844"
          fill="none"
          strokeWidth="8"
          stroke="#000000"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Line;
