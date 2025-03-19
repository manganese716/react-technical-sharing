import { Box, Button } from "@mui/material";
import { CodeCompare } from "../CodeCompare";
import { useState } from "react";
import { Code } from "../Code";

export const StateSect = () => {
  const reactP1 = `const App = () => {
  const [count,setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count+1);
  }

  return (
  <>
    <div>count : {count}</div>
    <button onClick={handleClick}>點我+1</button>
  </>
  )
};
`;

  const vueP1 = `<script>
  const count = ref(0);
  
  const handleClick = () => {
    count.value += 1;  
  }
</script>
<tamplate>
  <div>count : {count}</div>
  <button :click={handleClick}>點我+1</button>
</template>
  
  `;

  const reactP2 = `const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};
  `;

  const reactP3 = `const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={handleClick}>Count: {count}</button>;  
};
    `;

  const reactP4 = `const App = () => {
  const [cat, setCat] = useState({ name: "貓咪", age: 0 });

  const updateAge = () => {
    setCat(() => {{ age: 1 });
  };

  return (
    <div>
      <p>名字：{cat?.name}</p>
      <p>年齡：{cat.age}</p>
      <button onClick={updateAge}>更新年齡</button>
    </div>
  );
};
`;

  const reactP5 = `const App = () => {
  const [cat, setCat] = useState({ name: "貓咪", age: 0 });
  
  const updateAge = () => {
    setCat((prev) => {
      return { ...prev, age: 1 };
    });
  };

  return (
    <div>
      <p>名字：{cat.name}</p>
      <p>年齡：{cat.age}</p>
      <button onClick={updateAge}>更新年齡</button>
    </div>
  );
};
`;

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //====

  const [count2, setCount2] = useState(0);
  const handleClick2 = () => {
    setCount2(count2 + 1);
    setCount2(count2 + 1);
    setCount2(count2 + 1);
  };

  //===

  const [count3, setCount3] = useState(0);
  const handleClick3 = () => {
    setCount3((prevCount) => prevCount + 1);
    setCount3((prevCount) => prevCount + 1);
    setCount3((prevCount) => prevCount + 1);
  };

  //===

  const [user, setUser] = useState({ name: "貓咪", age: 0 });

  const updateCatAge = () => {
    setUser({ age: 1 });
  };

  //===

  const [cat2, setCat2] = useState({ name: "貓咪", age: 0 });

  const updateCatAge2 = () => {
    setCat2((prev) => {
      return { ...prev, age: 1 };
    });
  };

  return (
    <>
      <Box
        sx={{
          paddingY: "20px",
          borderBottom: "1px solid white",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {/* 這要改 */}
        <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>State</Box>
        <CodeCompare reactCode={reactP1} vueCode={vueP1} />

        <Box>範例</Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "20px",
            borderBottom: "1px solid white",
            marginBottom: "20px",
          }}
        >
          <Box>count : {count}</Box>
          <Button onClick={handleClick}>點我+1</Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid white",
          }}
        >
          <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>
            setState是非同步
          </Box>
          <Code reactCode={reactP2} />
          <Box>錯誤範例</Box>
          <Box>
            <Button onClick={handleClick2}>Count: {count2}</Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid white",
          }}
        >
          <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>正確用法</Box>
          <Code reactCode={reactP3} />
          <Box>範例</Box>
          <Box>
            <Button onClick={handleClick3}>Count: {count3}</Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid white",
          }}
        >
          <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>
            state儲存Object並更新(錯誤範例)
          </Box>
          <Code reactCode={reactP4} />
          <Box>範例</Box>
          <Box>
            <Box>名字：{user?.name}</Box>
            <Box>年齡：{user.age}</Box>
            <Button onClick={updateCatAge}>更新年齡</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Box sx={{ fontSize: "30px", color: "#90CAF9" }}>
            state儲存Object並更新(正確範例)
          </Box>
          <Code reactCode={reactP5} />
          <Box>範例</Box>
          <Box>
            <Box>名字：{cat2?.name}</Box>
            <Box>年齡：{cat2.age}</Box>
            <Button onClick={updateCatAge2}>更新年齡</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
