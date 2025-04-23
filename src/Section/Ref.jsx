import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Code } from "../Code";

export const Ref = () => {
  const reactP1 = `const App = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>count: {count}</p>
        <p>ref: {ref.current}</p>
        <button onClick={() => setCount(count + 1)}>增加 count</button>
        <button onClick={() => ref.current += 1}>增加 ref</button>
      </div>
    );
  };
  `;

  const reactP2 = `const App = () => {
  const [count, setCount] = useState(0);
  const trueRef = useRef(0);
  let fakeRef = 0;

  const addRef = () => {
    trueRef.current += 1;
    fakeRef += 1;
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>trueRef: {trueRef.current}</p>
      <p>fakeRef: {fakeRef}</p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <button onClick={addRef}>增加 ref</button>
    </div>
  );
};`;

  const reactP3 = `const App = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>聚焦輸入框</button>
    </div>
  );
};`;

  const ref = useRef(0);
  const [count, setCount] = useState(0);

  //====

  const [count2, setCount2] = useState(0);
  const trueRef = useRef(0);
  let fakeRef = 0;

  const addRef = () => {
    trueRef.current += 1;
    fakeRef += 1;
  };

  // ====
  const ref3 = useRef(null);

  const focusInput = () => {
    if (ref3.current) {
      ref3.current.focus();
    }
  };

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
        <Typography sx={{ fontSize: "30px", color: "#90CAF9" }}>
          useRef
        </Typography>
        <Typography sx={{ marginBottom: "20px" }}>
          useRef 會回傳一個包含 current 屬性的物件 (ref Object)，current
          用來存放值。與 useState 不同，修改 current 不會觸發組件重新渲染。{" "}
        </Typography>
        <Code reactCode={reactP1} />
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography>count: {count}</Typography>
            <Typography>ref: {ref.current}</Typography>
          </Box>
          <Box>
            <Button variant="outlined" onClick={() => setCount(count + 1)}>
              增加 count
            </Button>
            <Button variant="outlined" onClick={() => (ref.current += 1)}>
              增加 ref
            </Button>
          </Box>
        </Box>

        <Typography sx={{ fontSize: "30px" }}>為什麼不用let?</Typography>
        <Code reactCode={reactP2} />
        <Box sx={{ textAlign: "center" }}>
          <Typography>count: {count2}</Typography>
          <Typography>trueRef: {trueRef.current}</Typography>
          <Typography>fakeRef: {fakeRef}</Typography>
          <Button variant="outlined" onClick={() => setCount2(count2 + 1)}>
            增加 count
          </Button>
          <Button variant="outlined" onClick={addRef}>
            增加 ref
          </Button>
        </Box>

        <Typography sx={{ fontSize: "30px" }}>useRef來操作DOM</Typography>
        <Code reactCode={reactP3} />
        <Box sx={{ textAlign: "center" }}>
          <Input
            inputRef={ref3}
            sx={{
              color: "white", // 文字顏色
              backgroundColor: "#333", // 深灰色輸入框
              border: "1px solid #777", // 邊框顏色
              "&:hover": { borderColor: "#aaa" }, // 滑鼠移上去時的邊框顏色
              "& .MuiInputBase-input": {
                color: "white", // 讓輸入文字變白
                padding: "6px", // 讓內部文字區域也有內邊距
              },
            }}
            placeholder="輸入內容..."
          />
          <Button onClick={focusInput}>聚焦輸入框</Button>
        </Box>
      </Box>
    </>
  );
};
