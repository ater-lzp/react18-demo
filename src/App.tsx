// import style from "./css/box-局部样式.module.css";
// import style2 from "./css/sass的使用.module.scss";
// import classNames from "classnames";

// const classStyle = classNames({
//   [style.box ]: true,
//   [style2.box ]: true
// });

import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

function FadeIn({
  isShow,
  children,
}: {
  isShow: boolean;
  children: React.ReactNode;
}) {
  const springs = useSpring({
    from: { x: isShow ? 400 : 0, opacity: 0 },
    to: { x: isShow ? 0 : 400, opacity: isShow ? 1 : 0 },
  });
  return <animated.div style={{ ...springs }}>{children}</animated.div>;
}

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsShow(!isShow)}
        className="w-10 h-7 bg-gray-300 rounded-md m-2"
      >
        {isShow ? "隐藏" : "显示"}
      </button>
      <FadeIn isShow={isShow}>
        <div className="bg-red-600 w-15  text-white text-center " >你好</div>
      </FadeIn>
    </>
  );
}

export default App;
