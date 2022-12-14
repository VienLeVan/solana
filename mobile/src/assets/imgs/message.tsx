import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '~/constans/colors';

interface IProps {
  color?: string;
  props?: any;
}

const MessageIcon = ({color = colors.WHITE, props}: IProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.75 10.768c0 1.798-.72 3.46-1.93 4.775-1.62 1.814-4.19 2.977-7.07 2.977l-4.27 2.343c-.72.408-1.637-.151-1.54-.922l.41-2.977c-2.193-1.406-3.6-3.657-3.6-6.196 0-2.66 1.538-5.002 3.895-6.393C9.1 3.5 10.852 3 12.75 3c4.974 0 9 3.476 9 7.768Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MessageIcon;
