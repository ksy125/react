import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// <React.StrictMode> 버그 찾아주는건데 이게 있으면 출력이 두번 됨(개발자모드에서만 사용)
