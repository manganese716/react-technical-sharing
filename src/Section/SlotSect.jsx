import { Box } from "@mui/material";
import { CodeCompare } from "../CodeCompare";
const reactP1 = `import MyComponent from ...

const App = () => {
  return <MyComponent>
    <div>Hello World</div>
  </MyComponent>
};

`;

const vueP1 = `<template>
  <MyComponent>
    <div>Hello World</div>
  </MyComponent>
</template>

`;

const reactP2 = `const MyComponent = ({ children }) => {
  return (
    <div>
      <div>下面會是div裝著Hello World</div>
      {children}
    </div>
  );
};
`;

const vueP2 = `<template>
  <div>
    <div>下面會是div裝著Hello World</div>
    <slot></slot>
  </div>
</template>
`;

const reactP3 = `import MyComponent from ...

const App = () => {
  const header = () => <header>Header</header>
  const footer = () => <footer>Footer</footer>

  return <MyComponent header={header} footer={footer} />
};

`;

const vueP3 = `<template>
  <MyComponent>
    <template #header>
      <header>Header</header>
    </template>
    <template #footer>
      <footer>Footer</footer>
    </template>
  </MyComponent>
</template>

`;

const reactP4 = `const MyComponent = ({ header, footer }) => {
  return (
    <div>
      <header/>
      <div>上面是 header</div>
      <div>下面是 footer</div>
      <footer/>
    </div>
  );
};
`;

const vueP4 = `<template>
  <div>
    <slot name="header"></slot>
    <div>上面是 header</div>
    <div>下面是 footer</div>
    <slot name="footer"></slot>
  </div>
</template>

`;
export const SlotSect = () => {
  return (
    <>
      <Box sx={{ paddingY: "20px", borderBottom: "1px solid white" }}>
        {/* 這要改 */}
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>Slot</Box>
        <CodeCompare reactCode={reactP1} vueCode={vueP1} />

        <Box>MyComponent.jsx</Box>
        <CodeCompare reactCode={reactP2} vueCode={vueP2} />

        <Box sx={{ marginBottom: "20px" }}>範例</Box>
        <Box>
          <Box>下面是div裝著Hello World</Box>
          <Box>Hello World</Box>
        </Box>
      </Box>

      <Box sx={{ paddingY: "25px" }}>
        {/* 這要改 */}
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>Naming Slot</Box>
        <CodeCompare reactCode={reactP3} vueCode={vueP3} />

        <Box>MyComponent.jsx</Box>
        <CodeCompare reactCode={reactP4} vueCode={vueP4} />

        <Box sx={{ marginBottom: "20px" }}>範例</Box>
        <Box>
          <Box>Header</Box>
          <Box>上面是 header</Box>
          <Box>下面是 footer</Box>
          <Box>Footer</Box>
        </Box>
      </Box>
    </>
  );
};
