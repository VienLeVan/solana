import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1 10h18M10 19V1"
      stroke="#16ECEC"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlusIcon;
