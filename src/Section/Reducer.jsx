import { Box, Button, Typography } from "@mui/material";
import { Code } from "../Code";
import { useReducer, useState } from "react";

const initialState = { age: 25, height: 170 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...state, age: state.age + 1 };
    case "INCREASE_HEIGHT":
      return { ...state, height: state.height + 1 };
    default:
      return state;
  }
};

export const Reducer = () => {
  const reactP1 = `const [state, dispatch] = useReducer(reducer, initialState)`;

  const reactP1_2 = `const App = () => {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);

  const handleIncreaseAge = () => setAge(age + 1);
  const handleIncreaseHeight = () => setHeight(height + 1);

  return (
    <div>
      <p>年齡: {age}</p>
      <button onClick={handleIncreaseAge}>增加年齡</button>

      <p>身高: {height} cm</p>
      <button onClick={handleIncreaseHeight}>增加身高</button>
    </div>
  );
};`;

  const reactP1_3 = `const initialState = { age: 25, height: 170 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...state, age: state.age + 1 };
    case "INCREASE_HEIGHT":
      return { ...state, height: state.height + 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>年齡: {state.age}</p>
      <button onClick={() => dispatch({ type: "INCREASE_AGE" })}>
        增加年齡
      </button>

      <p>身高: {state.height} cm</p>
      <button onClick={() => dispatch({ type: "INCREASE_HEIGHT" })}>
        增加身高
      </button>
    </div>
  );
};
`;

  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);

  const handleIncreaseAge = () => setAge(age + 1);
  const handleIncreaseHeight = () => setHeight(height + 1);

  //====

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Box
        sx={{
          paddingBottom: "150px",
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          paddingTop: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px", color: "#90CAF9" }}>
            useReducer
          </Typography>

          <Typography sx={{ marginBottom: "20px" }}>
            useReducer 用來管理複雜的狀態邏輯和多個狀態變數，它的運作方式類似於
            Redux，可以讓狀態更新的邏輯集中管理，使程式碼更清晰且易於維護。
            <br />
            <br />
            React 中的 reducer就像 Vuex 中的 mutation
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>不使用Reducer版本</Typography>
          <Code reactCode={reactP1_2} />
          <Box sx={{ textAlign: "center" }}>
            <Typography>年齡: {age}</Typography>
            <Button onClick={handleIncreaseAge}>增加年齡</Button>
            <Typography>身高: {height} cm</Typography>
            <Button onClick={handleIncreaseHeight}>增加身高</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>useReducer語法</Typography>
          <Code reactCode={reactP1} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>
            Reducer Function 是什麼
          </Typography>

          <Typography>
            Reducer 是一個純函數（pure function），它的任務是：根據「目前的
            state」和「傳進來的 action」，執行對應的邏輯運算，並回傳一個新的
            state。{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>使用Reducer版本</Typography>

          <Code reactCode={reactP1_3} />
          <Box sx={{ textAlign: "center" }}>
            <Typography>年齡: {state.age}</Typography>
            <Button onClick={() => dispatch({ type: "INCREASE_AGE" })}>
              增加年齡
            </Button>
            <Typography>身高: {state.height} cm</Typography>
            <Button onClick={() => dispatch({ type: "INCREASE_HEIGHT" })}>
              增加身高
            </Button>
          </Box>
        </Box>

        <Box
          component="img"
          sx={{
            width: "80%",
            margin: "0 auto",
          }}
          alt="The house from the offer."
          src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_lF6YmjuUxxYyTdMqMVTDw.png"
        />
      </Box>
    </>
  );
};
