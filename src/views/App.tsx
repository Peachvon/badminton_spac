import { Route, Routes } from "react-router-dom";
import ProductPage from "@views/product/page";
import Page from "@views/page";
import Login from "./login/page";

export function App({ pageProps }: { pageProps: any }) {
  console.log("App component rendering");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page {...pageProps} />} />
        <Route path="/product" element={<ProductPage {...pageProps} />} />
        <Route path="/login" element={<Login {...pageProps} />} />
      </Routes>
    </div>
  );
}

export default App;
