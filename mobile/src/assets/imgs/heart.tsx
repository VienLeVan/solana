import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartIcon = (props: any) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.12 20.81c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12C2.5 5.6 4.99 3.1 8.06 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12Z"
      stroke="#F6F6F6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HeartIcon;
