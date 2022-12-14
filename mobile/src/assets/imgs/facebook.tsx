import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FacebookIcon(props: any) {
  return (
    <Svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 16c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16-16-7.163-16-16z"
        fill="#292929"
      />
      <Path
        d="M20.845 17.049l.518-3.233h-3.242v-2.098c0-.884.452-1.747 1.904-1.747H21.5V7.218S20.162 7 18.884 7c-2.672 0-4.416 1.549-4.416 4.351v2.464H11.5v3.234h2.968v7.816a12.289 12.289 0 003.653 0v-7.816h2.724z"
        fill="#EFEFEF"
      />
    </Svg>
  );
}

export default FacebookIcon;
