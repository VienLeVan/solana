import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EthIcon(props: any) {
  return (
    <Svg
      width={6 * 1.5}
      height={13 * 1.5}
      viewBox="0 0 6 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M3 0l-.066.296V8.89l.065.087L6 6.62 2.998 0z" fill="#9EF4F4" />
      <Path d="M3 0L1.5 3.31 0 6.62l3 2.357V0z" fill="#C3FAFA" />
      <Path
        d="M3 9.732l-.038.06v3.062l.037.143L6 7.376 3 9.732z"
        fill="#9EF4F4"
      />
      <Path d="M3 12.997V9.732L0 7.376l3 5.621z" fill="#C3FAFA" />
      <Path d="M2.999 8.977l3-2.358-3-1.813v4.171z" fill="#16ECEC" />
      <Path d="M0 6.62l3 2.357V4.806L0 6.619z" fill="#74EFEF" />
    </Svg>
  );
}

export default EthIcon;
