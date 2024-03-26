import { ReactNode } from "react";
import type { Metadata } from "next";
import "../App.css";
import "../index.css";

export const metadata: Metadata = {
  title: "Next.js | migrate from vite + react + TS",
  description: "설명설명입니당당당",
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
  test: ReactNode;
  test2: ReactNode;
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/vite.svg" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
