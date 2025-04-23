import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Code } from "../Code";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

export const Tailwind = () => {
  const reactP1 = `<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  點我一下
</button>`;

  const reactP2 = `<div class="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-10 hover:bg-gray-50 transition duration-300 border border-gray-200">
  <h2 class="text-xl font-semibold text-gray-800 mb-4">使用者資訊</h2>
  <div class="flex items-center space-x-4 mb-4">
    <img class="w-12 h-12 rounded-full border-2 border-blue-500" src="https://i.pravatar.cc/150?img=3" alt="avatar">
    <div>
      <p class="text-gray-900 font-medium">王小明</p>
      <p class="text-gray-500 text-sm">全端工程師</p>
    </div>
  </div>
  <button class="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
    送出請求
  </button>
</div>`;
  return (
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
          Tailwind css
        </Typography>
        <Typography>
          傳統的 CSS 框架（像是 Bootstrap）通常都提供一套預設好的 UI
          元件，像是按鈕、卡片、表單等等，讓開發者能快速建立介面。但這些元件的樣式通常是固定的，要創造出不同風格或高度客製化的設計，會變得非常困難。
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Tailwind CSS
          則採用了「原子化（Utility-First）」的設計方式，不是給你一整個元件，而是提供非常多細小的工具類別（utility
          classes），像是
          <code>p-4</code> 表示 padding、<code>text-blue-500</code>{" "}
          表示文字顏色。
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem>
              <ListItemText primary="	•	排版：text-xl、font-bold、leading-tight" />
            </ListItem>
            <ListItem>
              <ListItemText primary="	•	間距：p-4、mt-2、gap-6" />
            </ListItem>
            <ListItem>
              <ListItemText primary="	•	定位與排列：flex、grid、items-center、justify-between" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <Box sx={{ border: "1px solid #f5f5f5" }}>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {reactP1}
          </SyntaxHighlighter>
        </Box>
        <Box
          sx={{ display: "flex", columnGap: "15px", justifyContent: "center" }}
        >
          <button>點我一下</button>
          <button class="btn-tailwind">點我一下</button>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "30px", textAlign: "center" }}>
          優點
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem>
              <ListItemText
                sx={{ ".MuiTypography-root": { textAlign: "center" } }}
                primary="迅速開發"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                sx={{ ".MuiTypography-root": { textAlign: "center" } }}
                primary="高度可定制"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                sx={{ ".MuiTypography-root": { textAlign: "center" } }}
                primary="小巧且高效"
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <Box sx={{ border: "1px solid #f5f5f5" }}>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {reactP2}
          </SyntaxHighlighter>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ fontSize: "30px", textAlign: "center" }}>
          缺點
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem>
              <ListItemText
                sx={{ ".MuiTypography-root": { textAlign: "center" } }}
                primary="HTML太長造成閱讀困難"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
