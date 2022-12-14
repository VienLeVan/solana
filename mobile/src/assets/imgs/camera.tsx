import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CameraIcon(props) {
  return (
    <Svg
      width={18 * 2}
      height={16 * 2}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.854 4C.83 4 0 4.83 0 5.854v5.003c0 2.005 0 3.007.46 3.74a3 3 0 00.944.943c.732.46 1.734.46 3.739.46h7.714c2.005 0 3.007 0 3.74-.46a3 3 0 00.943-.944c.46-.732.46-1.734.46-3.739V5.854C18 4.83 17.17 4 16.146 4a1.854 1.854 0 01-1.659-1.025l-.82-1.642c-.11-.22-.165-.33-.228-.425a2 2 0 00-1.447-.895C11.877 0 11.755 0 11.508 0H6.491c-.246 0-.37 0-.483.013a2 2 0 00-1.447.895c-.063.095-.118.205-.228.425l-.82 1.642A1.854 1.854 0 011.853 4zM11 9a2 2 0 11-4 0 2 2 0 014 0zm2 0a4 4 0 11-8 0 4 4 0 018 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CameraIcon;
