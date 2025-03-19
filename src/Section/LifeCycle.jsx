import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Code } from "../Code";

export const UEffect = () => {
  const reactP1 = `const App = () => {
  const [count,setCount] = useState(0);
  const effectCount = useRef(0);

  useEffect(() => {
    effectCount.current += 1;
  });

  return (
    <div>
      <div>effect執行次數: {effectCount.current}</div>
      <button onClick={() => setCount(count+1)}>刷新用</button>
    </div>
  );
};
`;

  const reactP2 = `const App = () => {
  const [count,setCount] = useState(0);
  const effectCount = useRef(0);

  useEffect(() => {
    effectCount.current += 1;
  },[]);

  return (
    <div>
      <div>effect執行次數: {effectCount.current}</div>
      <button onClick={() => setCount(count+1)}>刷新用</button>
    </div>
  );
};
`;

  const reactP3 = `const App = () => {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0)
  const [effectCount,setEffectCount] = useState(0)

  // 像是vue的watch
  useEffect(() => {
    setEffectCount(effectCount += 1)
  },[count]);

  return (
    <div>
      <div>effect執行次數: {effectCount}</div>
      <button onClick={() => setCount(count+1)}>刷新用</button>
      <button onClick={() => setCount2(count2+1)}>刷新用2</button>
    </div>
  );
};
`;

  const reactP4 = `const App = () => {
  // 像是vue的watch
  useEffect(() => {
    return () => console.log("componentWillUnmount")
  },[]);
};
`;

  const [count, setCount] = useState(0);
  const effectCount = useRef(0);

  useEffect(() => {
    effectCount.current += 1;
  });

  //===

  const [count2, setCount2] = useState(0);
  useEffect(() => {
    setCount2(1);
  }, []);

  //===

  const [count3, setCount3] = useState(0);
  const [count3_1, setCount3_1] = useState(0);
  const [count3_2, setCount3_2] = useState(0);

  useEffect(() => {
    setCount3_2(count3_2 + 1);
  }, [count3]);

  //===

  useEffect(() => {
    return () => console.log("componentWillUnmount");
  }, []);
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
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>useEffect</Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "100px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box sx={{ fontSize: "30px" }}>react 生命週期</Box>
            <Box
              component="img"
              sx={{
                width: "80%",
                margin: "0 auto",
              }}
              alt="The house from the offer."
              src="https://miro.medium.com/v2/resize:fit:2256/1*LJvN_m5gZ7w6zT_LrYXUJw.png"
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Box sx={{ fontSize: "30px" }}>useEffect使用介紹</Box>
            <Code reactCode={reactP1} />
            <Box sx={{ textAlign: "center" }}>
              <Box>effect執行次數: {effectCount.current}</Box>
              <Button onClick={() => setCount(count + 1)}>刷新用</Button>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Box sx={{ fontSize: "30px" }}>
              useEffect使用介紹(componentDidMount)
            </Box>
            <Code reactCode={reactP2} />
            <Box sx={{ textAlign: "center" }}>
              <Box>effect執行次數: {count2}</Box>
              <Button onClick={() => setCount(count + 1)}>刷新用</Button>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Box sx={{ fontSize: "30px" }}>
              useEffect使用介紹(componentDidUpdate)
            </Box>
            <Code reactCode={reactP3} />
            <Box sx={{ textAlign: "center" }}>
              <Box>effect執行次數: {count3_2}</Box>
              <Box>
                <Button onClick={() => setCount3(count3 + 1)}>更新count</Button>
              </Box>
              <Box>
                <Button onClick={() => setCount3_1(count3_1 + 1)}>
                  更新count2
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Box sx={{ fontSize: "30px" }}>
              useEffect使用介紹(componentWillUnmount)
            </Box>
            <Code reactCode={reactP4} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
