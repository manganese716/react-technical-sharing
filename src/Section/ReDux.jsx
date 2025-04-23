import { Box, Button, Typography } from "@mui/material";
import { Code } from "../Code";
import { useContext } from "react";
import { CounterContext } from "../CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../counterSlice";
const reactP1 = `// CounterContext.jsx
import { createContext, useReducer } from "react";

export const CounterContext = createContext(null);

function counterReducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}`;

const reactP1_1 = `import { useContext } from "react";
import { CounterProvider, CounterContext } from "./CounterContext";

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <>
      <div>目前：{state.count}</div>
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
    </>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <h1>使用 Context + Reducer</h1>
      <Counter />
    </CounterProvider>
  );
}`;

const reactP2_1 = `//counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    add: (state) => {
      state.count += 1
    },
  },
})

export const { add } = counterSlice.actions
export default counterSlice.reducer`;

const reactP2_2 = `//store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})`;

const reactP2_3 = `import { Provider,useSelector, useDispatch } from 'react-redux'
import { store } from './store'
import { add } from './counterSlice'


function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  
  return (
    <>
      <div>目前：{count}</div>
      <button onClick={() => dispatch(add())}>+1</button>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <h1>使用 Redux Toolkit</h1>
      <Counter />
    </Provider>
  )
}`;
const ReDux = () => {
  const { state, dispatch } = useContext(CounterContext);

  // ====
  const count2 = useSelector((state) => state.counter.count);
  const dispatch2 = useDispatch();

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
            Redux/Redux Toolkit
          </Typography>

          <Typography sx={{ marginBottom: "20px" }}>
            Redux 是一個 用來管理全域狀態（global state） 的 JavaScript
            工具，常搭配 React 使用。
            <br />
            當你的應用越來越複雜，元件越來越多時，資料在元件間傳來傳去會變得很亂，這時
            Redux 就能幫你統一管理資料。
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>
            Context + Reducer 組合
          </Typography>

          <Code reactCode={reactP1} />
          <Code reactCode={reactP1_1} />

          <Box sx={{ textAlign: "center" }}>
            <Typography>CounterContext值：{state.count}</Typography>
            <Button
              variant="contained"
              onClick={() => dispatch({ type: "add" })}
            >
              +1
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>Redux 流程</Typography>

          <Box
            component="img"
            sx={{
              width: "80%",
              margin: "0 auto",
            }}
            alt="The house from the offer."
            src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "30px" }}>Redux 概念：</Typography>
          <Typography sx={{ fontSize: "25px" }}>
            單一 store <br />
            所有資料集中管理 <br />用 reducer 處理邏輯
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "30px" }}>Redux實作Counter</Typography>
          <Code reactCode={reactP2_1} />
          <Code reactCode={reactP2_2} />
          <Code reactCode={reactP2_3} />
          <Box sx={{ textAlign: "center" }}>
            <Typography>使用 Redux Toolkit</Typography>
            <Typography>目前：{count2}</Typography>
            <Button variant="contained" onClick={() => dispatch2(add())}>
              +1
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography sx={{ fontSize: "30px", color: "#90CAF9" }}>
            Redux thunk
          </Typography>

          <Box
            component="img"
            sx={{
              width: "80%",
              margin: "0 auto",
            }}
            alt="The house from the offer."
            src="https://miro.medium.com/v2/resize:fit:1400/0*wdFzgCg4XPcz_mAr.gif"
          />
        </Box>
      </Box>
    </>
  );
};

export default ReDux;
