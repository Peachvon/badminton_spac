import { Route, Routes } from "react-router-dom";
import Home from "@views/Home";
import Product from "@views/Product";

export function App() {
  console.log("App component rendering");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
