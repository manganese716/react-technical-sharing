import { Box, Button, TextField } from "@mui/material";
import { CodeCompare } from "../CodeCompare";

export const Event = () => {
  const reactP3 = `const App = () => {
        return (
          <div className="App">
            <input type="text" onChange={(e) => console.log(e.target.value)} />
            <button onClick={() => console.log("被點了")}>點我</button>
          </div>
        );
      };
      `;

  const vueP3 = `<template>
        <div class="App">
          <input type="text" @change={(e) => console.log(e.target.value)} />
          <button @click={() => console.log("被點了")}>點我</button>
        </div>
      </template>
      `;
  return (
    <>
      {" "}
      <Box sx={{ paddingY: "20px" }}>
        <Box sx={{ fontSize: "20px" }}>Event</Box>
        <CodeCompare reactCode={reactP3} vueCode={vueP3} />
        <Box sx={{ marginBottom: "20px" }}>範例</Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => console.log(e.target.value)}
          />{" "}
          <Button onClick={() => console.log("被點了")}>點我</Button>
        </Box>
      </Box>
    </>
  );
};
