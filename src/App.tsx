import style from "./css/box-局部样式.module.css";
import style2 from "./css/sass的使用.module.scss";
import classNames from "classnames";

const classStyle = classNames({
  [style.box ]: true,
  [style2.box ]: true
});

function App() {
  return (
    <>
      <div className={classStyle}>
        你好
        <span>我是span标签</span>
      </div>
    </>
  );
}

export default App;
