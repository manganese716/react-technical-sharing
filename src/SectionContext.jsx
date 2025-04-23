import { createContext, useContext } from "react";
import { Syntax } from "./Section/Syntax";
import { Event } from "./Section/Event";
import { ComponentSect } from "./Section/ComponentSect";
import { PropsSect } from "./Section/PropsSect";
import { SlotSect } from "./Section/SlotSect";
import { StateSect } from "./Section/StateSect";
import { Rerender } from "./Section/Rerender";
import { UEffect } from "./Section/LifeCycle";
import { Context } from "./Section/Context";
import { Ref } from "./Section/Ref";
import { Reducer } from "./Section/Reducer";
import TestContext from "./Section/TestContext";
import ReDux from "./Section/ReDux";
import { Tailwind } from "./Section/Tailwind";

// 建立 Context
const SectionContext = createContext(null);

// 定義 section 資料
const sectionData = [
  { id: "syntax", text: "語法", path: "syntax", component: <Syntax /> },
  { id: "event", text: "Event", path: "event", component: <Event /> },
  {
    id: "component",
    text: "Component",
    path: "component",
    component: <ComponentSect />,
  },
  { id: "props", text: "Props", path: "props", component: <PropsSect /> },
  { id: "slot", text: "Slot", path: "slot", component: <SlotSect /> },
  { id: "state", text: "State", path: "state", component: <StateSect /> },
  {
    id: "rerender",
    text: "Re-Render",
    path: "rerender",
    component: <Rerender />,
  },
  {
    id: "useeffect",
    text: "useEffect",
    path: "useeffect",
    component: <UEffect />,
  },
  {
    id: "usecontext",
    text: "useContext",
    path: "usecontext",
    component: <Context />,
  },
  {
    id: "useref",
    text: "useRef",
    path: "useref",
    component: <Ref />,
  },
  {
    id: "usereducer",
    text: "useReducer",
    path: "usereducer",
    component: <Reducer />,
  },
  {
    id: "redux",
    text: "Redux",
    path: "redux",
    component: <ReDux />,
  },
  {
    id: "textcontext",
    text: "TestContext",
    path: "textcontext",
    component: <TestContext />,
  },
  {
    id: "tailwind",
    text: "TailWind",
    path: "tailwind",
    component: <Tailwind />,
  },
];

//問題 下面程式會造成畫面刷新幾次? 按鈕式20

// Context Provider 組件
export const SectionProvider = ({ children }) => {
  return (
    <SectionContext.Provider value={sectionData}>
      {children}
    </SectionContext.Provider>
  );
};

// 自定義 hook，檢查是否在 Provider 內
export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === null) {
    console.warn("useSection 必須在 SectionProvider 內使用！");
    return [];
  }
  return context;
};
