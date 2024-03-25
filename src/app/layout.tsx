import { ReactNode } from "react";
import type { Metadata } from "next";
import "../App.css";
import "../index.css";

export const metadata: Metadata = {
  title: "Next.js | migrate from vite + react + TS",
  description: "설명설명입니당당당",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
};

export default RootLayout;
