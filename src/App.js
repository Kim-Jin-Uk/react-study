import "./App.css";
import APP3_5 from "./pages/3.5.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/3-5" element={<APP3_5 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
