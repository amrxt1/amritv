import "./globals.css";

import { Lora } from "next/font/google";
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "amrit's portfolio",
  description: "amrit's portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="icon.svg" />
      <body className={`${lora.className} antialiased`}>{children}</body>
    </html>
  );
}
