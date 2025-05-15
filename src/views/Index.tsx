import React from "react";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="root"> {children}</div>
      </body>
    </html>
  );
}
