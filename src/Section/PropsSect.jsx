import { Box } from "@mui/material";
import { CodeCompare } from "../CodeCompare";
const reactP1 = `import PrintText from ...

const App = () => {
  return (
    <div className="App">
      <PrintText text={"Hello World"} />
    </div>
  );
};

`;

const vueP1 = `<script>
  import HelloWorld from ...
</script>

<template>
  <div class="App">
    <HelloWorld :text="'Hello World'"/>
  </div>
</template>

`;

const reactP2 = `const PrintText = ({ text }) => {
  console.log(text);
  return <></>;
};
`;

const vueP2 = `<script setup>
  const props = defineProps({text:string})
  console.log(props.Text)
</script>

<template>
</template>
`;
export const PropsSect = () => {
  console.log("Hello World");
  return (
    <>
      <Box sx={{ paddingY: "20px" }}>
        <Box sx={{ fontSize: "20px" }}>Props</Box>
        <CodeCompare reactCode={reactP1} vueCode={vueP1} />

        <Box>PrintText.jsx</Box>
        <CodeCompare reactCode={reactP2} vueCode={vueP2} />
      </Box>
    </>
  );
};
