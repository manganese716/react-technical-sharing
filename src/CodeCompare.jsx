import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const CodeCompare = ({ reactCode, vueCode }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "44vw 44vw",
        gap: "20px",
        marginY: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Box>React</Box>
        <Box sx={{ border: "1px solid #f5f5f5" }}>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {reactCode}
          </SyntaxHighlighter>
        </Box>
      </Box>
      {vueCode && (
        <Box>
          <Box sx={{ marginBottom: "10px" }}>Vue</Box>
          <Box sx={{ border: "1px solid #f5f5f5" }}>
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {vueCode}
            </SyntaxHighlighter>
          </Box>
        </Box>
      )}
    </Box>
  );
};
