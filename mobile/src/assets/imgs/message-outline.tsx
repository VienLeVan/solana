import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MessageOutlineIcon = props => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.25 22.75h-13c-.96 0-1.75-.79-1.75-1.75V8c0-4.42 2.33-6.75 6.75-6.75h8C20.67 1.25 23 3.58 23 8v8c0 4.42-2.33 6.75-6.75 6.75Zm-8-20C4.67 2.75 3 4.42 3 8v13c0 .14.11.25.25.25h13c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25h-8Z"
      fill="#848484"
    />
    <Path
      d="M17.25 10.25h-10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.25 15.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#848484"
    />
  </Svg>
);

export default MessageOutlineIcon;
