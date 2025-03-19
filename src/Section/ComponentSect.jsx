import { Box } from "@mui/material";
import { CodeCompare } from "../CodeCompare";
const reactP1 = `import HelloWorld from ...

const App = () => {
  return (
    <div className="App">
      <p>Hello World</p>
      <HelloWorld />
    </div>
  );
};
`;

const vueP1 = `<script>
  import HelloWorld from ...
</script>

<template>
  <div class="App">
    <p>Hello World</p>
    <HelloWorld />
  </div>
</template>
`;

const reactP2 = `const HelloWorld = () =>{
    return (
      <div>Hello World2</div>
    )
  }`;

const vueP2 = `<template>
  <div>Hello World2</div>
</template>`;
export const ComponentSect = () => {
  return (
    <>
      <Box sx={{ paddingY: "20px" }}>
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>Component</Box>

        <CodeCompare reactCode={reactP1} vueCode={vueP1} />

        <Box>HelloWorld.jsx</Box>
        <CodeCompare reactCode={reactP2} vueCode={vueP2} />

        <Box sx={{ marginBottom: "20px" }}>範例</Box>
        <Box>
          <Box>Hello World</Box>
          <Box>Hello World2</Box>
        </Box>
      </Box>
    </>
  );
};
