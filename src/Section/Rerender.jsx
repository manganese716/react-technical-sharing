import { Box, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Code } from "../Code";

const RerenderChild = () => {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <div>
      <p>我是子組件</p>
      <p>子組件被重新渲染了 {renders.current} 次</p>
    </div>
  );
};

export const Rerender = () => {
  const reactP1 = `const App = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(1);

  renderCount.current += 1;

  return (
    <div className="App">
      <div>這個元件被 re-render 了！</div>
      <div>計數: {count}</div>
      <div>重新渲染次數: {renderCount.current}</div>
      <button onClick="() => {setCount(count+1)}">增加計數</button>
    </div>
  );
};
`;

  const reactP1_1 = `const Child = () => {
  const [renders, setRenders] = useState(0);

  setRenders((prev) => prev + 1);

  return (
    <div>
      <p>我是子組件</p>
      <p>子組件被重新渲染了 {renders} 次</p>
    </div>
  );
}

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>父組件</h2>
      <p>父組件 count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <Child />
    </div>
  );
}
`;

  const reactP2 = `//props更新會觸發rerender
const ReRender = (props) => {
  const [count,setCount] = useState(0);
  //state更新也會觸發rerender
  setCount(count+1);
  return <></>
}`;

  const reactP3 = `const App = () => {
  const [count, setCount] = useState(20);

  const renderCount = useRef(1);
  renderCount.current += 1;

  return (
    <div className="App">
      <div>現在的Count : {count}</div>
      <div>重新渲染次數: {renderCount.current}</div>
      <button onClick="() => {setCount(count)}">更新為{count}</button>
    </div>
  );
};`;

  const reactP4 = `const App = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(1);
  renderCount.current += 1;

  const handleReRender = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div className="App">
      <div>現在的Count : {count}</div>
      <div>重新渲染次數: {renderCount.current}</div>
      <button onClick="() => {handleReRender()}">更新</button>
    </div>
  );
};`;

  const [count, setCount] = useState(0);

  const renderCount = useRef(1);

  renderCount.current += 1;

  // ===
  const [count1_1, setCount1_1] = useState(0);

  // ===
  const [count2, setCount2] = useState(20);

  // ===
  const [count3, setCount3] = useState(0);
  const handleReRender = () => {
    setCount3((prev) => prev + 1);
    setCount3((prev) => prev + 1);
  };

  return (
    <>
      <Box
        sx={{
          paddingBottom: "150px",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        {/* 這要改 */}
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>Re-Render</Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "100px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>什麼是 re-render</Box>
            <Box>
              re-render 當應用程式的狀態或資料發生變化時，React
              會重新渲染畫面，讓顯示的內容保持最新。
            </Box>
            <Box>這裡跟Vue不同的是react會重新執行component</Box>

            <Box sx={{ marginTop: "20px" }}>
              <Code reactCode={reactP1} />
            </Box>

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Typography sx={{ fontSize: "24px" }}>
                這個元件被 re-render 了！
              </Typography>
              <Typography sx={{ fontSize: "20px", mt: 2 }}>
                計數: {count}
              </Typography>
              <Typography sx={{ fontSize: "18px", mt: 1, color: "gray" }}>
                重新渲染次數: {renderCount.current}
              </Typography>
              <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
                sx={{ mt: 2 }}
              >
                增加計數
              </Button>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>
              父組件狀態更新導致子組件也被更新
            </Box>

            <Box sx={{ marginTop: "20px" }}>
              <Code reactCode={reactP1_1} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>父組件</Typography>
              <Typography>父組件 count: {count1_1}</Typography>
              <Button onClick={() => setCount1_1(count1_1 + 1)}>
                增加 count
              </Button>
              <RerenderChild />
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>react觸發re-render情況有幾種</Box>
            <Box>
              1. 狀態更新（setState）：當你使用 setState 更新元件的狀態時，React
              會重新渲染該元件。
            </Box>
            <Box>
              2.
              屬性更新（props）：當父元件傳給子元件的資料（屬性）變更時，React
              會重新渲染子元件。
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Code reactCode={reactP2} />
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>re-render步驟</Box>
            <Box>1. setState觸發狀態更新</Box>
            <Box>2. React 以 Object.is() 方法來檢查新舊 state 是否不同</Box>
            <Box>3. 觸發re-render將component裡面的程式重新執行</Box>
            <Box>
              <Code reactCode={reactP3} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>現在的Count : {count2}</Typography>
              <Typography sx={{ fontSize: "18px", mt: 1, color: "gray" }}>
                重新渲染次數: {renderCount.current}
              </Typography>
              <Button onClick={() => setCount2(count2)}>更新為{count2}</Button>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>問題</Box>
            <Box>下面程式會造成畫面刷新幾次?</Box>
            <Box>
              <Code reactCode={reactP4} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>現在的Count : {count3}</Typography>
              <Typography sx={{ fontSize: "18px", mt: 1, color: "gray" }}>
                重新渲染次數: {renderCount.current}
              </Typography>
              <Button onClick={() => handleReRender()}>更新</Button>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>虛擬 DOM</Box>
            <Box>
              當 React 需要重新渲染時，它不會直接操作真實的
              DOM，而是先在內存中創建一個虛擬DOM。
            </Box>
            <Box>
              React 會將新舊虛擬 DOM
              進行比對。然後只將實際變動的部分更新到真實的 DOM
              中，這樣可以提高性能。
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
