import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '~/constans/colors';

interface IProps {
  color?: string;
  props?: any;
}
const SearchIcon = ({color = colors.WHITE, props}: IProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.25 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22.75 22l-2-2"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SearchIcon;
