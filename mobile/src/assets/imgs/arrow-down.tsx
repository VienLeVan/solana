import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowDownIcon(props: any) {
  return (
    <Svg
      width={16 * 1.5}
      height={16 * 1.5}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.28 5.967l-4.346 4.346a1.324 1.324 0 01-1.867 0L2.72 5.967"
        stroke="#F6F6F6"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowDownIcon;
