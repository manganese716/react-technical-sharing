import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Syntax } from "./Section/Syntax";
import { useSection } from "./SectionContext";

function App() {
  const section = useSection();
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {section.map((item) => (
          <Route key={item.id} path={item.path} element={item.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
