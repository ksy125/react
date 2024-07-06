import { useState } from "react";
import CatergoryButton from "./CategoryButton";

const Tabs = () => {
  const [tabList, setTabList] = useState([
    {
      name: "무비",
      isSelect: true,
      categories: [
        { image: "netfilx.png", title: "넷플릭스" },
        { image: "watcha.png", title: "왓챠" },
      ],
    },
    {
      name: "캐릭터",
      isSelect: false,
      categories: [
        { image: "disney.png", title: "디즈니" },
        { image: "avg.png", title: "어벤져스" },
      ],
    },
    {
      name: "만화",
      isSelect: false,
      categories: [
        { image: "tooni.png", title: "투니버스" },
        { image: "ghibli.png", title: "지브리" },
      ],
    },
  ]);

  const click = (i: number) => {
    setTabList((prev) => {
      const newTabList = prev.map((v, index) => (i === index ? { ...v, isSelect: true } : { ...v, isSelect: false }));
      return newTabList;
    });
  };

  const seleced = "px-8 py-6 text-center border-b-4 border-black";
  const notSelected = "px-8 py-6 text-center";

  return (
    <>
      <nav className="flex justify-center">
        {tabList.map((v, i) => {
          return (
            <div onClick={() => click(i)} className={v.isSelect ? seleced : notSelected}>
              <button className="text-black">{v.name}</button>
            </div>
          );
        })}
      </nav>
      {tabList.map((v) => {
        return v.isSelect && v.categories.map((v1) => <CatergoryButton {...v1} />);
      })}
    </>
  );
};
export default Tabs;
