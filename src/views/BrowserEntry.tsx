import App from "@views/App";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root");

if (domNode) {
  hydrateRoot(
    domNode,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
