import { Box, Button } from "@mui/material";
import { Code } from "../Code";
import { createContext, memo, useContext, useRef, useState } from "react";

const CountContext = createContext(0);

export const Context = () => {
  const react1 = `const CountContext = createContext(0);
  
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Parent />
      <button onClick={() => setCount(count + 1)}>增加計數</button>
      <button onClick={() => setCount(count - 1)}>減少計數</button>
    </CountContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const count = useContext(CountContext);
  return <p>當前計數：{count}</p>;
}`;

  const react2 = `const CountContext = createContext(0);
  
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Parent />
      <button onClick={() => setCount(count + 1)}>增加計數</button>
      <button onClick={() => setCount(count - 1)}>減少計數</button>
    </CountContext.Provider>
  );
}

function Parent() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <>
      <div>Paren render次數：{renderCount.current}</div>
      <Child />
    </>
  );
}

function Child() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <>
      <div>GrandChild render次數：{renderCount.current}</div>
      <GrandChild />
    </>
  );
}

function GrandChild() {
  const count = useContext(CountContext);
  return <p>當前計數：{count}</p>;
}`;

  const react3 = `//CountContext.js
const CountContext = createContext(null);

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount 必須在 CountProvider 內使用！");
  }
  return context;
}`;

  const react3_1 = `export default function App() {
  return (
    <CountProvider>
      <Parent />
    </CountProvider>
  ); 
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const { count, setCount } = useCount();
  return <p>當前計數：{count}</p>;
}`;

  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{
          paddingBottom: "150px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          paddingTop: "20px",
        }}
      >
        {/* 這要改 */}
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>useContext</Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "100px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Box sx={{ fontSize: "30px" }}>context獲取state</Box>
            <Code reactCode={react1} />
            <Box sx={{ textAlign: "center" }}>
              <CountContext.Provider value={count}>
                <Parent />
                <Button onClick={() => setCount(count + 1)}>增加計數</Button>
                <Button onClick={() => setCount(count - 1)}>減少計數</Button>
              </CountContext.Provider>
            </Box>

            <Box sx={{ fontSize: "30px" }}>中間的組建是否會被渲染?</Box>
            <Code reactCode={react2} />
            <Box sx={{ textAlign: "center" }}>
              <CountContext.Provider value={count}>
                <Parent2 />
                <Button onClick={() => setCount(count + 1)}>增加計數</Button>
                <Button onClick={() => setCount(count - 1)}>減少計數</Button>
              </CountContext.Provider>
            </Box>

            <Box sx={{ fontSize: "30px" }}>把context寫在其他檔案</Box>
            <Code reactCode={react3} />
            <Code reactCode={react3_1} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const count = useContext(CountContext);
  return <p>當前計數：{count}</p>;
}

// ====

function Parent2() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <>
      <div>Parent render次數：{renderCount.current}</div>
      <Child2 />
    </>
  );
}

function Child2() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <>
      <div>Child render次數：{renderCount.current}</div>
      <GrandChild2 />
    </>
  );
}

function GrandChild2() {
  const count = useContext(CountContext);
  return <p>當前計數：{count}</p>;
}
