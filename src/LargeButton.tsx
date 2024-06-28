// backgroundColor: 좋아하는 색깔
// padding: 10px 20px
// borderRadius: 8px
// 버튼

import { CSSProperties } from "react";

const LargeButton = () => {
    const buttonStyle: CSSProperties = {
        backgroundColor: "pink",
        padding: "10px 20px",
        borderRadius: "8px",
    };
    return <button style={buttonStyle}>버튼</button>
};
export default LargeButton;