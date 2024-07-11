import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weights: [400, 500, 600, 700, 800]
});

export const metadata = {
  title: "MERN Blog App - Gagan Suman",
  description: "Created by Gagan Suman in MERN Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
