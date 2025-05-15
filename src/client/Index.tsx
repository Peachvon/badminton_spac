import React from "react";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script src="/index.js" defer></script>
      </head>
      <body>
        <div id="root"> {children}</div>
      </body>
    </html>
  );
}
