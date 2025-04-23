import React, { useContext } from "react";
import { CounterContext } from "../CounterContext";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../counterSlice";

const TestContext = () => {
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
            CounterContext
          </Typography>
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
          <Typography sx={{ fontSize: "30px", color: "#90CAF9" }}>
            CounterSlice
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography>使用 Redux Toolkit</Typography>
            <Typography>目前：{count2}</Typography>
            <Button variant="contained" onClick={() => dispatch2(add())}>
              +1
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TestContext;
