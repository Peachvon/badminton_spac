import App from "@views/App";
import { Request, Response } from "express";
import { getProductSsrProp } from "@views/product/page";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { getIndexSsrProp } from "@views/page";

function getPageProps(req: Request) {
  switch (req.url) {
    case "/":
      return getIndexSsrProp();
    case "/product":
      return getProductSsrProp();
    default:
      return {};
  }
}

export function renderReact(req: Request, res: Response) {
  let pageProps = getPageProps(req);

  try {
    const appHtml: string = renderToString(
      <StaticRouter location={req.url}>
        <App pageProps={pageProps} />
      </StaticRouter>
    );
    const html = `
  <!DOCTYPE html>
  <html>
    <head>
    <link rel="stylesheet" href="/css/tailwind.css">
      <script>
        window.__PAGE_PROPS__ = ${JSON.stringify(pageProps)};
      </script>
      <script type="module" src="/client.js"></script>
    </head>
    <body>
      <div id="root">${appHtml}</div>
    </body>
  </html>
`;

    res.send(html);
  } catch (e) {
    console.log("error", e);
  }
}
