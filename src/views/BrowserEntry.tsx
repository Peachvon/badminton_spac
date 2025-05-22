import App from "@views/App";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root");
const pageProps = (window as any).__PAGE_PROPS__ || {};

if (domNode) {
  hydrateRoot(
    domNode,
    <BrowserRouter>
      <App pageProps={pageProps} />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
