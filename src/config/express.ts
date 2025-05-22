import express from "express";
import { build } from "esbuild";
import path from "path";
import { renderReact } from "@views/router/router";

const app = express();
app.use(express.static(path.join(__dirname, "../../public")));

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

app.get("*", renderReact);

export default app;
