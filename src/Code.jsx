import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Code = ({ reactCode }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
      <Box>React</Box>
      <Box sx={{ border: "1px solid #f5f5f5" }}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {reactCode}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};
