import "./App.css";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Common />}>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
