import { Box, Button, Input, TextField } from "@mui/material";
import { CodeCompare } from "../CodeCompare";

export const Syntax = () => {
  const reactP1 = `const App = () => {
  return <div className="App">Hello World</div>;
};
`;

  const vueP1 = `<template>
  <div class="App">Hello World</div>
</template>
`;

  const reactP2 = `const App = () => {
  for (let i = 0; i < 3; i++) {
    console.log("Hello World");
  }

  return <div className="App">Hello World</div>;
};
`;
  const vueP2 = `<template>
  <div class="App">Hello World</div>
</template>

<script>
  for (let i = 0; i < 3; i++) {
    console.log("Hello World");
  }
</script>
`;

  return (
    <>
      <Box sx={{ borderBottom: "1px solid #f5f5f5", paddingY: "20px" }}>
        <Box sx={{ fontSize: "20px" }}>語法</Box>
        <CodeCompare reactCode={reactP1} vueCode={vueP1} />
        <Box sx={{ marginBottom: "20px" }}>範例</Box>
        <div className="App">Hello World</div>
      </Box>

      <Box sx={{ borderBottom: "1px solid #f5f5f5", paddingY: "20px" }}>
        <Box sx={{ fontSize: "20px" }}>結合 JS</Box>
        <CodeCompare reactCode={reactP2} vueCode={vueP2} />
      </Box>
    </>
  );
};
