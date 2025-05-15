import express from "express";
import { renderToString } from "react-dom/server";
import { build } from "esbuild";
import { StaticRouter } from "react-router-dom";
import Index from "@views/Index";
import App from "@views/App";

const app = express();
app.use(express.static("public"));

app.get("/client.js", async (req, res) => {
  const result = await build({
    entryPoints: ["./src/views/BrowserEntry.tsx"],
    bundle: true,
    format: "esm",
    platform: "browser",
    write: false,
  });
  res.setHeader("Content-Type", "application/javascript;charset=utf-8");
  res.send(result.outputFiles[0].text);
});

app.get("*", (req: any, res: any) => {
  try {
    const appHtml: string = renderToString(
      <Index
        children={
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        }
      />
    );

    console.log("appHtml", appHtml);
    res.send(appHtml);
  } catch (e) {
    console.log("error", e);
  }
});

export default app;
