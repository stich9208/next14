import { ReactNode } from "react";
import type { Metadata } from "next";
import "../App.css";
import "../index.css";

export const metadata: Metadata = {
  title: "Next.js | migrate from vite + react + TS",
  description: "설명설명입니당당당",
  openGraph: {
    title: "입시의 최전선 | 스터디프론트 STUDYFRONT",
    description:
      "내가 갈 대학교를 조금이라도 더 정확히. 최후의 1인이 되고 싶다면 스터디프론트에서",
    url: "https://next14-alpha-blush.vercel.app",
    images: [
      {
        url: "https://next14-alpha-blush.vercel.app/assets/arrow.png",
        width: 800,
        height: 600,
      },
    ],
  },
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
