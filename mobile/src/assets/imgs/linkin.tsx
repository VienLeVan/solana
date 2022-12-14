import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LinkInIcon(props: any) {
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
        d="M12.046 9.882C12.022 8.814 11.259 8 10.018 8c-1.24 0-2.051.814-2.051 1.882 0 1.046.787 1.883 2.004 1.883h.023c1.265 0 2.052-.837 2.052-1.883zM11.807 13.252H8.181v10.894h3.626V13.252zM20.709 12.996c2.386 0 4.175 1.557 4.175 4.904v6.246h-3.626v-5.828c0-1.464-.525-2.463-1.837-2.463-1.002 0-1.599.673-1.861 1.324-.096.233-.12.558-.12.883v6.085h-3.626s.048-9.872 0-10.895h3.627v1.543c.48-.742 1.343-1.799 3.268-1.799z"
        fill="#EFEFEF"
      />
    </Svg>
  );
}

export default LinkInIcon;
