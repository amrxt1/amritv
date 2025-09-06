import "./globals.css";
import { Lora } from "next/font/google";
import { Archivo } from "next/font/google";

import Header from "@/components/Header";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-body",
});

export const metadata = {
  title: "amrit's portfolio",
  description:
    "Amritveer Singh's portfolio page. Computer Science. Columbia College. CCHive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" />
      <body className={`${lora.variable} ${archivo.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
