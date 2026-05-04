import "./globals.css";

export const metadata = {
  title: "向北數位媒體整合｜廣告健檢 × LINE官方轉單",
  description: "協助店家優化 Meta 廣告、LINE 官方帳號與轉單流程。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
