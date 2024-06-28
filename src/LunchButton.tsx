import { CSSProperties } from "react";

const LunchButton = () => {
    const h1Style: CSSProperties = {
        color: "skyblue",
        fontSize: "20px",
      };
    
      const buttonStyle:CSSProperties = {
        backgroundColor: "pink",
        padding: "10px",
      };

    return (
        <>
          <button style={buttonStyle}>버튼입니다.</button>
          <h1 style={h1Style}>오늘 점심 메뉴 팟타이</h1>
        </>
      );
};
export default LunchButton;