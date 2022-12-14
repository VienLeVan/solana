import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={'100%'}
      height={182}
      viewBox="0 0 375 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M390 16c0-8.837-7.163-16-16-16H1c-8.837 0-16 7.163-16 16v150c0 8.837 7.163 16 16 16h127c8.837 0 15.722-7.396 18.866-15.654C153.176 149.774 169.213 138 188 138s34.824 11.774 41.134 28.346C232.278 174.604 239.163 182 248 182h126c8.837 0 16-7.163 16-16V16z"
        fill="#A8A8A8"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M390 16c0-8.837-7.163-16-16-16H1c-8.837 0-16 7.163-16 16v150c0 8.837 7.163 16 16 16h127c8.837 0 15.722-7.396 18.866-15.654C153.176 149.774 169.213 138 188 138s34.824 11.774 41.134 28.346C232.278 174.604 239.163 182 248 182h126c8.837 0 16-7.163 16-16V16z"
        fill="url(#paint0_linear_206_813)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_206_813"
          x1={188}
          y1={-99}
          x2={188}
          y2={182}
          gradientUnits="userSpaceOnUse">
          <Stop />
          <Stop offset={1} stopOpacity={0} />
        </LinearGradient>
      </Defs>
      {props.children}
    </Svg>
  );
}

export default SvgComponent;
